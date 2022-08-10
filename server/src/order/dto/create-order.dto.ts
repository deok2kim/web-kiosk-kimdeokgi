import { IsArray, IsNumber } from 'class-validator';

interface Product {
  id: number;
  quantity: number;
  options: string[];
}

export class CreateOrderDto {
  @IsNumber()
  readonly payment: number;

  @IsArray()
  readonly products: Product[];

  @IsNumber()
  readonly totalAmount: number;
}
