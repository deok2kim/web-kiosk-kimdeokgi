import { IsArray, IsNumber } from 'class-validator';

interface product {
  id: number;
  quantity: number;
}

export class CreateOrderDto {
  @IsNumber()
  readonly payment: number;

  @IsArray()
  readonly products: product[];
}
