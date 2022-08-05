import { IsString } from 'class-validator';

export class CreateProductOptionCategoryDto {
  @IsString()
  readonly name: string;
}
