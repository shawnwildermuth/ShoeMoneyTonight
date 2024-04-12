using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using ShoeMoney.Data.Entities;

namespace ShoeMoney.Data;

public  class ShoeContext : DbContext
{
  public ShoeContext(DbContextOptions<ShoeContext> options) : base(options)
  {
  }

  public DbSet<Order> Orders => Set<Order>();
  public DbSet<Category> OrderItems => Set<Category>();
  public DbSet<Product> Products => Set<Product>();
  public DbSet<Category> Categories => Set<Category>();

  protected override void OnModelCreating(ModelBuilder bldr)
  {
    base.OnModelCreating(bldr);

    bldr.Entity<Product>()
      .Property(p => p.Price).HasColumnType("decimal(6,2)");

    bldr.Entity<OrderItem>()
      .Property(i => i.Price).HasColumnType("decimal(6,2)");

    bldr.Entity<OrderItem>()
      .Property(i => i.Quantity).HasColumnType("decimal(6,2)");


  }


}
