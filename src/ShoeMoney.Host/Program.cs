var builder = DistributedApplication.CreateBuilder(args);

var theApi = builder.AddProject<Projects.ShoeMoney_API>("theapi");

builder.AddNpmApp("theui",
  "../ShowMoney.Store/", 
  "dev")
  .WithReference(theApi)
  .WithEndpoint(targetPort: 5173, scheme: "http", env: "PORT");

builder.Build().Run();
