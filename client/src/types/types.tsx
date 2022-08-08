export interface Category {
  id: number;
  name: string;
}

export interface Menu extends Category {
  product: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  thumbnail_img: string;
}
