export default interface Address {
  id: number;
  orderId: number;
  attentionTo: string | null;
  line1: string | null;
  line2: string | null;
  cityTown: string | null;
  stateProvince: string | null;
  postalCode: string | null;
  country: string | null;
  shippingPhoneNumber: string | null;
}