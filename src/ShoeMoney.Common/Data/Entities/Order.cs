using ShoeMoney.Enums;

namespace ShoeMoney.Data.Entities;

public class Order
{
  public int Id { get; set; }
  public DateTime OrderDate { get; set; }
  public string? Notes { get; set; }
  public OrderType OrderType { get; set; }
  public string? CompanyName { get; set; }
  public string Contact { get; set; } = "";
  public string? Email { get; set; }
  public string? PhoneNumber { get; set; }

  public Address? ShippingAddress { get; set; }

  public virtual ICollection<OrderItem>? Items { get; set; }
}
