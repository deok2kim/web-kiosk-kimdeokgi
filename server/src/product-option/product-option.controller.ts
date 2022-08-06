import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductOptionService } from './product-option.service';
import { CreateProductOptionDto } from './dto/create-product-option.dto';
import { CreateProductOptionCategoryDto } from './dto/create-product-option-category.dto';

@Controller('product-option')
export class ProductOptionController {
  constructor(private readonly productOptionService: ProductOptionService) {}

  @Get('/category')
  findAllCategory() {
    return this.productOptionService.findAllCategory();
  }

  @Post('/category')
  createCategory(@Body() category: CreateProductOptionCategoryDto) {
    return this.productOptionService.createCategory(category);
  }

  @Get()
  findAll() {
    return this.productOptionService.findAll();
  }

  @Post()
  create(@Body() option: CreateProductOptionDto) {
    return this.productOptionService.create(option);
  }
}
