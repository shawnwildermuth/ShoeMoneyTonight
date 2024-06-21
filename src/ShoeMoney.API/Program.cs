using Microsoft.EntityFrameworkCore;
using WilderMinds.MinimalApiDiscovery;
using ShoeMoney.Data;
using ShoeMoney.Data.Seeding;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using ShoeMoney.API.HealthChecks;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ShoeContext>(opt =>
{
  opt.UseSqlServer(builder.Configuration.GetConnectionString("ShoeMoneyDb"));
});

builder.Services.AddHealthChecks()
  .AddDbContextCheck<ShoeContext>()
  //.AddCheck("PausedServer", () =>
  //{
  //  var paused = builder.Configuration.GetValue<bool>("PauseServer");
  //  return paused
  //    ? HealthCheckResult.Unhealthy()
  //    : HealthCheckResult.Healthy();
  //});
  .AddCheck<PausedServerHealthCheck>("PausedServer");

builder.Services.AddTransient<Seeder>();

var app = builder.Build();

if (args is not null && args.Length > 0 && args[0] == "/seed")
{
  var scopeFactory = app.Services.GetService<IServiceScopeFactory>();
  using var scope = scopeFactory!.CreateScope();

  // Enqueue the seeding
  var seeder = scope.ServiceProvider.GetService<Seeder>();
  seeder!.Seed();
}

app.MapHealthChecks("/health");

app.MapGet("/", () => "Hello World!");

app.MapApis();

app.Run();
