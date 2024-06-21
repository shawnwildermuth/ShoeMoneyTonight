using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace ShoeMoney.API.HealthChecks;

public class PausedServerHealthCheck(IConfiguration config) : IHealthCheck
{
  public Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
  {
    var paused = config.GetValue<bool>("PauseServer");
    return Task.FromResult(paused
      ? HealthCheckResult.Unhealthy("Server is Paused")
      : HealthCheckResult.Healthy());
  }
}
