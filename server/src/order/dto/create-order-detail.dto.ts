import { IsNumber } from 'class-validator';

export class CreateOrderDetailDto {
  @IsNumber()
  readonly order: number;

  @IsNumber()
  readonly product: number;

  @IsNumber()
  readonly quantity: number;
}
