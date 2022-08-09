import { IsDecimal, IsNumber, IsString } from 'class-validator';

export class CreateProductOptionDto {
  @IsString()
  readonly name: string;

  @IsDecimal()
  readonly extraCharge: number;

  @IsNumber()
  readonly category: number;
}
