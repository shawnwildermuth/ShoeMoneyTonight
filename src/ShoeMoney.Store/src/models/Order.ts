import type { Address } from "./Address";
import type { OrderItem } from "./OrderItem";
import type { OrderStatus } from "./OrderStatus";
import type { OrderType } from "./OrderType";
import type { Payment } from "./Payment";

export interface Order {
  id: number;
  orderDate: string;
  notes: string | null;
  orderType: OrderType;
  companyName: string | null;
  contact: string;
  email: string | null;
  phoneNumber: string | null;
  orderStatus: OrderStatus;
  shippingAddress: Address | null;
  payment: Payment | null;
  items: OrderItem[];
}