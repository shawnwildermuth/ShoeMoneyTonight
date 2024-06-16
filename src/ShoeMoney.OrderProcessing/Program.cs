using Microsoft.EntityFrameworkCore;

using ShoeMoney.Data;
using ShoeMoney.OrderProcessing;

var builder = Host.CreateApplicationBuilder(args);

builder.Services.AddHostedService<OrderProcessingWorker>();

builder.AddSqlServerDbContext<ShoeContext>("thedb");

builder.AddRabbitMQClient("order-queue");

var host = builder.Build();
host.Run();
