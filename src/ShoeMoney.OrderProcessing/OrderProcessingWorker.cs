using System.Text;
using System.Text.Json;

using RabbitMQ.Client;
using RabbitMQ.Client.Events;

using ShoeMoney;
using ShoeMoney.Data;
using ShoeMoney.Data.Entities;
using ShoeMoney.Models;

namespace ShoeMoney.OrderProcessing;

public class OrderProcessingWorker : IHostedService, IDisposable
{
  private readonly ILogger<OrderProcessingWorker> _logger;
  private readonly ConnectionFactory _factory;
  private readonly ShoeContext _context;
  private readonly IConnection _connection;
  private readonly IModel _channel;

  public OrderProcessingWorker(ILogger<OrderProcessingWorker> logger,
    ConnectionFactory factory,
    ShoeContext context)
  {
    _logger = logger;
    _factory = factory;
    _context = context;
    _connection = _factory.CreateConnection();
    _channel = _connection.CreateModel();

    _channel.QueueDeclare(ShoeConstants.OrderQueueName);
    _channel.QueueDeclare(ShoeConstants.ErrorQueueName);
  }

  public Task StartAsync(CancellationToken stoppingToken)
  {
    stoppingToken.Register(() => Stop());

    var consumer = new EventingBasicConsumer(_channel);
    consumer.Received += ProcessQueue;

    _channel.BasicConsume(consumer,
      ShoeConstants.OrderQueueName);

    return Task.CompletedTask;
  }

  public Task StopAsync(CancellationToken cancellationToken)
  {
    Dispose();
    return Task.CompletedTask;
  }

  async void ProcessQueue(object? sender, BasicDeliverEventArgs args)
  {
    try
    {
      var json = Encoding.UTF8.GetString(args.Body.Span);
      var model = JsonSerializer.Deserialize<Order>(json);

      if (model is not null)
      {
        _logger.LogInformation("Retrieved Order from Queue");

        // Remove the products so we don't try to insert them
        foreach (var item in model.Items)
        {
          if (item.Product is not null) item.Product = null;
        }

        _context.Add(model);

        if (await _context.SaveChangesAsync() == 0)
        {
          _logger.LogError($"No changes when adding order");
          SendError("Could not process Order");
        }
      }

    }
    catch (Exception ex)
    {
      _logger.LogError($"Error during Order process: {ex}");
      SendError("Error during Order process", ex);
    }

  }

  void SendError(string error, Exception? ex = null)
  {
    var message = new ErrorMessage()
    {
      Message = error,
      Exception = ex
    };
    var json = JsonSerializer.Serialize(message);
    var body = Encoding.UTF8.GetBytes(json);
    _channel.BasicPublish("", ShoeConstants.ErrorQueueName, null, body);
    _logger.LogInformation("Error Reported");
  }

  public void Dispose()
  {
    Stop();
  }


  void Stop()
  {
    _channel.Dispose();
    _connection.Dispose();
  }

}

