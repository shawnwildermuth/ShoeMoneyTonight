using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EFCore.BulkExtensions;

namespace ShoeMoney.Data.Seeding;
public class Seeder(ShoeContext context)
{
  public void Seed()
  {
    if (!context.Products.Any())
    {
      context.Products.AddRange(SeedData.GetProducts());
      context.Categories.AddRange(SeedData.GetCategories());

      context.BulkSaveChanges();
    }
  }
}
