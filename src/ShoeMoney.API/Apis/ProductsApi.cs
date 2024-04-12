using Microsoft.EntityFrameworkCore;
using ShoeMoney.Data;
using ShoeMoney.Data.Entities;
using WilderMinds.MinimalApiDiscovery;

using static Microsoft.AspNetCore.Http.TypedResults;

namespace ShoeMoney.API.Apis;

public class ProductsApi : IApi
{
  public void Register(IEndpointRouteBuilder builder)
  {
    var group = builder.MapGroup("/api/products");

    group.MapGet("", GetProducts)
      .Produces<IEnumerable<Product>>()
      .ProducesProblem(500);

    group.MapGet("{id:int}", GetProduct)
      .Produces<Product>()
      .ProducesProblem(404)
      .ProducesProblem(500);
  }


  public static async Task<IResult> GetProduct(ShoeContext context, int id)
  {
    var result = await context.Products
      .Include(p => p.Category)
      .Where(p => p.Id == id)
      .FirstOrDefaultAsync();

    if (result is null) return NotFound();

    return Ok(result);
  }

  public static async Task<IResult> GetProducts(ShoeContext context)
  {
    var results = await context.Products
      .Include(p => p.Category)
      .OrderBy(p => p.Title)
      .ToListAsync();

    return Ok(results);
  }
}
