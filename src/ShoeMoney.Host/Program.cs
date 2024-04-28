using Microsoft.Extensions.Configuration;

var builder = DistributedApplication.CreateBuilder(args);

var sql = builder.AddSqlServer("theServer")
  .AddDatabase("ShoeMoneyDb");

//var cn = builder.AddConnectionString("ShoeMoneyDb");

var theApi = builder.AddProject<Projects.ShoeMoney_API>("theApi")
  .WithReference(sql);

builder.AddNpmApp("store", "../shoemoney.store/", "dev")
  .WithReference(theApi)
  .WithEndpoint(targetPort: 5173, scheme: "http", env: "PORT")
  .PublishAsDockerFile();

builder.Build().Run();
