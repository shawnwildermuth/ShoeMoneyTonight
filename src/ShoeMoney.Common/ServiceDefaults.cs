using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using OpenTelemetry.Logs;
using OpenTelemetry.Metrics;
using OpenTelemetry.Trace;

namespace ShoeMoney;
public static class ServiceDefaults
{
  public static IHostApplicationBuilder Configure(this IHostApplicationBuilder bldr)
  {
    bldr.Logging.AddOpenTelemetry(cfg =>
    {
      cfg.IncludeFormattedMessage = true;
    });

    bldr.Services.AddOpenTelemetry()
      .WithMetrics(cfg =>
      {
        cfg.AddMeter("Microsoft.AspNetCore.Hosting",
          "Microsoft.AspNetCore.Server.Kestrel",
          "System.Net.Http");
      })
      .WithTracing(cfg =>
      {
        cfg.AddAspNetCoreInstrumentation();
      });

    bldr.Services.Configure<OpenTelemetryLoggerOptions>(cfg =>
    {
      cfg.AddOtlpExporter();
    });

    bldr.Services.ConfigureOpenTelemetryMeterProvider(cfg =>
    {
      cfg.AddOtlpExporter();
    });

    bldr.Services.ConfigureOpenTelemetryTracerProvider(cfg =>
    {
      cfg.AddOtlpExporter();
    });


    return bldr;
  }
}
