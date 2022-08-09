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

// export type ProductTemperature = "HOT" | "ICED" | null;

// export type ProductSize = "Large" | "XLarge" | null;

export interface Option {
  temperature: string | null;
  size: string | null;
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
