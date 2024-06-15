using Microsoft.Extensions.Configuration;

var builder = DistributedApplication.CreateBuilder(args);

var queue = builder.AddRabbitMQ("orderQueue");
var sql = builder.AddSqlServer("sqlserver");
var db = sql.AddDatabase("theDb");

var theApi = builder.AddProject<Projects.ShoeMoney_API>("theApi")
  .WithReference(db)
  .WithReference(queue);

builder.AddProject<Projects.ShoeMoney_OrderProcessing>("orderProcessing")
  .WithReference(db)
  .WithReference(queue);

builder.AddNpmApp("store", "../shoemoney.store/", "dev")
  .WithReference(theApi)
  .WithEndpoint(targetPort: 5173, scheme: "http", env: "PORT")
  .PublishAsDockerFile();

builder.Build().Run();
