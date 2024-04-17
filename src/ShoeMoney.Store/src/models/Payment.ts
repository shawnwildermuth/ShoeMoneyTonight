import { string, object, type inferFormattedError } from "zod";
import type { PaymentType } from "./PaymentType";

export interface Payment {
  id: number;
  paymentType: PaymentType;
  orderId: number;
  amount: number;
  cardNumber: string | null;
  cvv: string | null;
  expiration: string | null;
}

export const PaymentSchema = object({
  cardNumber: string().min(16),
  cvv: string().max(4),
  expiration: string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/),
  cardHolder: string().min(1, "Required"),
  postalCode: string().min(1, "Required")
});

export type PaymentErrors = inferFormattedError<typeof PaymentSchema>;