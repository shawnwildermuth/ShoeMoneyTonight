﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoeMoney.Data.Entities;

public class OrderItem
{
  public int Id { get; set; }
  public int ProductId { get; set; }
  public decimal Price { get; set; }
  public decimal Quantity { get; set; }
  public float Discount { get; set; }
}