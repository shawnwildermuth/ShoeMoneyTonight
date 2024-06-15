using Microsoft.EntityFrameworkCore;

using ShoeMoney.Data;
using ShoeMoney.OrderProcessing;

var builder = Host.CreateApplicationBuilder(args);

builder.Services.AddHostedService<OrderProcessingWorker>();

builder.AddSqlServerDbContext<ShoeContext>("theDb");

builder.AddRabbitMQClient("orderQueue");

var host = builder.Build();
host.Run();
