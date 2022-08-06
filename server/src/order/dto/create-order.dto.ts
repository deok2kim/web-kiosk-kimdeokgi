import { IsArray, IsNumber } from 'class-validator';

interface product {
  id: number;
  quantity: number;
  optionIds: number[];
}

export class CreateOrderDto {
  @IsNumber()
  readonly paymentId: number;

  @IsArray()
  readonly products: product[];
}
