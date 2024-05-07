using Microsoft.EntityFrameworkCore;

using ShoeMoney.Data;
using ShoeMoney.OrderProcessing;

var builder = Host.CreateApplicationBuilder(args);

builder.Services.AddHostedService<OrderProcessingWorker>();

builder.Services.AddDbContext<ShoeContext>(opt =>
{
  opt.UseSqlServer(builder.Configuration.GetConnectionString("ShoeMoneyDb"));
});

builder.AddRabbitMQClient("orderQueue");

var host = builder.Build();
host.Run();
