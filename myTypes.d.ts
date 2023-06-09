export interface CartItem {
  coffeeId: string;
  quantity: number;
  grind: string;
  variant_id: string;
  name: string;
  price: number;
  inStock: number;
  insufficientStock?: boolean;
  outOfStock?: boolean;
  unavailable?: boolean;
}

export interface FulfillmentDetails {
  method: 'pickup' | 'shipping';
  pickupLocation?: string;
  shippingName: string;
  shippingAddressLine1: string;
  shippingAddressLine2?: string;
  shippingCity: string;
  shippingState: string;
  shippingPostal_code: string;
  shippingCost: number;
}

export interface CustomerDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface OrderDetails {
  customerDetails: CustomerDetails;
  fulfillmentDetails: FulfillmentDetails;
  cart: CartItem[];
  total: number;
  id: string | null;
}

export interface SanityOrder {
  name: string;
  email: string;
  phone: string;
  number: string;
  total: string;
  orderItems: string;
  stripe_id: string;
  deliveryMethod: string;
  pickupLocation: string;
  shippingName: string;
  shippingAddressLine1: string;
  shippingAddressLine2: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  customerComments: string;
  // shippingCost: number
  env;
}
