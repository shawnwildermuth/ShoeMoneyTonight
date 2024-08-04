using Microsoft.Extensions.Configuration;

var builder = DistributedApplication.CreateBuilder(args);

var queue = builder.AddRabbitMQ("order-queue");
var db = builder.AddSqlServer("sqlserver")
  .AddDatabase("thedb");

var theApi = builder.AddProject<Projects.ShoeMoney_API>("api")
  .WithExternalHttpEndpoints()
  .WithReference(db)
  .WithReference(queue);

builder.AddProject<Projects.ShoeMoney_OrderProcessing>("order-processing")
  .WithReference(db)
  .WithReference(queue);

builder.AddNpmApp("store", "../shoemoney.store/", "dev")
  .WithReference(theApi)
  .WithHttpEndpoint(env: "PORT")
  .WithExternalHttpEndpoints()
  .PublishAsDockerFile();

builder.Build().Run();
