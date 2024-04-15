import type Product from "./Product";

export default interface OrderItem {
  id: number;
  productId: number;
  product: Product | null;
  price: number;
  quantity: number;
  discount: number;
  orderId: number;
}