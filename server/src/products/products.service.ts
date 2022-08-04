import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductCategoryDto } from './dto/create-productCategory.dto';

import { Product } from './entities/product.entity';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,

    @InjectRepository(ProductCategory)
    private productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async create(product: CreateProductDto): Promise<void> {
    await this.productsRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async createCategory(
    productCategory: CreateProductCategoryDto,
  ): Promise<void> {
    await this.productCategoryRepository.save(productCategory);
  }

  async findAllCategory(): Promise<ProductCategory[]> {
    return this.productCategoryRepository.find({
      relations: {
        product: true,
      },
    });
  }
}
