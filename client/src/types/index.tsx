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

export type ProductTemperature = "HOT" | "ICED";
export type ProductSize = "Large" | "XLarge";
export interface Option {
  temperature: ProductTemperature;
  size: ProductSize;
}
