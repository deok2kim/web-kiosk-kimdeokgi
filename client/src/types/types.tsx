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
