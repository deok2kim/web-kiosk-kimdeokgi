import { IsDecimal, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsDecimal()
  readonly price: number;

  @IsString()
  readonly thumbnail_img: string;

  @IsNumber()
  readonly category: number;
}
