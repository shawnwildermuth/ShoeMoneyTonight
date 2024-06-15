using Microsoft.Extensions.Configuration;

var builder = DistributedApplication.CreateBuilder(args);

var connectionString = builder.AddConnectionString("ShoeMoneyDb");
var queue = builder.AddRabbitMQ("orderQueue");
var sql = builder.AddSqlServer("database");

var theApi = builder.AddProject<Projects.ShoeMoney_API>("theApi")
  .WithReference(sql)
  .WithReference(queue)
  .WithReference(connectionString);

builder.AddProject<Projects.ShoeMoney_OrderProcessing>("orderProcessing")
  .WithReference(sql)
  .WithReference(queue)
  .WithReference(connectionString);

builder.AddNpmApp("store", "../shoemoney.store/", "dev")
  .WithReference(theApi)
  .WithEndpoint(targetPort: 5173, scheme: "http", env: "PORT")
  .PublishAsDockerFile();

builder.Build().Run();
