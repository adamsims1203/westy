export interface CartItem {
  coffeeId: string;
  quantity: number;
  grind: string;
  variant_id: string;
  coffeeName: string;
  price: number;
}

export interface Cart {
  contents: CartItem[];
  total: number;
  shipping: boolean; // fixed price shipping
}