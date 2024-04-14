import type Product from "./Product";

export default interface ProductResult {
  totalPages: Number;
  results: Array<Product>
}