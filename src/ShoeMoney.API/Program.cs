using Microsoft.EntityFrameworkCore;
using WilderMinds.MinimalApiDiscovery;
using ShoeMoney.Data;
using ShoeMoney.Data.Seeding;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ShoeContext>(opt =>
{
  opt.UseSqlServer(builder.Configuration.GetConnectionString("ShoeMoneyDb"));
});

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

app.MapGet("/", () => "Hello World!");

app.MapApis();

app.Run();
