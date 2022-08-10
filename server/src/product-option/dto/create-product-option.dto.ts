import { IsNumber, IsString } from 'class-validator';

export class CreateProductOptionDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly extraCharge: number;

  @IsNumber()
  readonly category: number;
}
