import type { PaymentType } from "./PaymentType";

export default interface Payment {
  id: number;
  paymentType: PaymentType;
  orderId: number;
  amount: number;
  cardNumber: string | null;
  cvv: string | null;
  expiration: string | null;
}