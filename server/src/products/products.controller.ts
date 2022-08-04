import { ProductCategory } from './entities/productCategory.entity';
import { Product } from './entities/product.entity';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductCategoryDto } from './dto/create-productCategory.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post('/category')
  createCategory(@Body() productCategory: CreateProductCategoryDto) {
    console.log('category', productCategory);
    return this.productsService.createCategory(productCategory);
  }

  @Get('/category')
  findAllCategory(): Promise<ProductCategory[]> {
    return this.productsService.findAllCategory();
  }

  @Post()
  create(@Body() product: CreateProductDto) {
    console.log('product', product);
    return this.productsService.create(product);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
