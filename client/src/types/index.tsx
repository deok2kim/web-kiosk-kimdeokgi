export interface Category {
  id: number;
  name: CategoryTitle;
}

export interface Menu extends Category {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  thumbnail_img: string;
}

export type CategoryTitle = "커피" | "라떼" | "차" | "쥬스" | "빙수";

export interface Cart {
  id: number;
  product: Product;
  option: Option;
  quantity: number;
}

export interface Option {
  temperature: string | null;
  size: string | null;
  extraCharge: number;
}

export interface ProductOptionCategory {
  id: number;
  name: string;
  productOptions: ProductOption[];
}

export interface ProductOption {
  id: number;
  name: string;
  extraCharge: string;
}

export interface PaymentOption {
  id: number;
  name: string;
}

export interface Order {
  payment: number;
  totalAmount: string;
  products: OrderProduct[];
}

export interface OrderProduct {
  id: number;
  quantity: number;
  options: (string | null)[];
}

export interface OrderResponse {
  id: number;
  // payment: number;
  // totalAmount: string;
  // created_at: string;
  // products: OrderProduct[];
}

// export interface OrderProductOption {
//   name: string | null;
// }

export interface OrderProductResponse {
  id: number;
  quantity: number;
  productOptions: ProductOption[];
  product: Product;
}
export interface ReceiptResponse {
  id: number;
  created_at: string;
  totalAmount: string;
  payment: PaymentOption;
  orders: OrderProductResponse[];
}
