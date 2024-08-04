using Microsoft.EntityFrameworkCore;
using MinimalApis.Discovery;
using ShoeMoney.Data;
using ShoeMoney.Data.Seeding;
using FluentValidation;
using ShoeMoney.Validators;
using System.Text.Json.Serialization;
using ShoeMoney;

var builder = WebApplication.CreateBuilder(args);

builder.AddRabbitMQClient("order-queue");

builder.AddSqlServerDbContext<ShoeContext>("thedb");


builder.Services.AddTransient<Seeder>();

builder.Services.AddValidatorsFromAssemblyContaining<OrderValidator>();

builder.Services.ConfigureHttpJsonOptions(options =>
{
  options.SerializerOptions.Converters.Add(new JsonStringEnumConverter());
});

builder.Services.AddHealthChecks();

builder.Services.AddCors(cfg => cfg.AddDefaultPolicy(bldr =>
{
  bldr.AllowAnyHeader();
  bldr.AllowAnyOrigin();
  bldr.AllowAnyMethod();
}));

builder.Configure();

var app = builder.Build();

var scopeFactory = app.Services.GetRequiredService<IServiceScopeFactory>();
using var scope = scopeFactory.CreateScope();

if (builder.Environment.IsDevelopment())
{
  var ctx = scope.ServiceProvider.GetRequiredService<ShoeContext>();
  ctx.Database.EnsureCreated();
}

// Enqueue the seeding
var seeder = scope.ServiceProvider.GetRequiredService<Seeder>();
seeder.Seed();


app.UseCors();

app.MapHealthChecks("/health");

app.MapApis();

app.Run();
