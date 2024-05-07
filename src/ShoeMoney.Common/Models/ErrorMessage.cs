using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoeMoney.Models;
public class ErrorMessage
{
  public required string Message { get; set; }
  public Exception? Exception { get; set; }
  public DateTime Timestamp { get; set; } = DateTime.UtcNow;
}
