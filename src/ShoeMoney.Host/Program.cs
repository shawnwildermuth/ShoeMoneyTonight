using Microsoft.Extensions.Configuration;

var builder = DistributedApplication.CreateBuilder(args);

var cn = builder.AddConnectionString("ShoeMoneyDb");

var theApi = builder.AddProject<Projects.ShoeMoney_API>("api")
  .WithExternalHttpEndpoints()
  .WithReference(cn);

builder.AddNpmApp("store", "../shoemoney.store/", "dev")
  .WithReference(theApi)
  .WithHttpEndpoint(env: "PORT")
  .WithExternalHttpEndpoints()
  .PublishAsDockerFile();

builder.Build().Run();
