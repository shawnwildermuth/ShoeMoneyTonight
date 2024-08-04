using Microsoft.EntityFrameworkCore;

using ShoeMoney;
using ShoeMoney.Data;
using ShoeMoney.OrderProcessing;

var builder = Host.CreateApplicationBuilder(args);

builder.Services.AddHostedService<OrderProcessingWorker>();

builder.AddSqlServerDbContext<ShoeContext>("thedb");

builder.AddRabbitMQClient("order-queue");

builder.Configure();

var host = builder.Build();
host.Run();
