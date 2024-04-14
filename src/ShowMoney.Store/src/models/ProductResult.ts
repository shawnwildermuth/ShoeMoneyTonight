import type Product from "./Product";

export default interface ProductResult {
  totalPages: number;
  currentPage: number;
  results: Array<Product>
}