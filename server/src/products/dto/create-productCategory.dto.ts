import { IsString } from 'class-validator';

export class CreateProductCategoryDto {
  @IsString()
  readonly name: string;
}
