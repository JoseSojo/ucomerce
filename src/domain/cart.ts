export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    stock: number;
  }
  
  export interface CartSummary {
    subtotal: number;
    tax: number;
    total: number;
    itemCount: number;
  }