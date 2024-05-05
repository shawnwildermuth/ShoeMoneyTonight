using Microsoft.Extensions.Configuration;

var builder = DistributedApplication.CreateBuilder(args);

var theApi = builder.AddProject<Projects.ShoeMoney_API>("theApi");

builder.AddNpmApp("store", "../shoemoney.store/", "dev")
  .WithReference(theApi)
  .WithEndpoint(targetPort: 5173, scheme: "http", env: "PORT")
  .PublishAsDockerFile();

builder.Build().Run();
