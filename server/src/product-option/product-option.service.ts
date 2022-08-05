import { Injectable } from '@nestjs/common';

import { ProductOptionCategory } from './entities/product-option-category.entity';
import { ProductOption } from './entities/product-option.entity';

import { CreateProductOptionCategoryDto } from './dto/create-product-option-category.dto';
import { CreateProductOptionDto } from './dto/create-product-option.dto';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductOptionService {
  constructor(
    @InjectRepository(ProductOption)
    private productOptionRepository: Repository<ProductOption>,

    @InjectRepository(ProductOptionCategory)
    private productOptionCategoryRepository: Repository<ProductOptionCategory>,
  ) {}

  findAllCategory(): Promise<ProductOptionCategory[]> {
    return this.productOptionCategoryRepository.find({
      relations: {
        productOption: true,
      },
    });
  }

  createCategory(category: CreateProductOptionCategoryDto) {
    return this.productOptionCategoryRepository.save(category);
  }

  findAll() {
    return this.productOptionRepository.find();
  }

  create(option: CreateProductOptionDto) {
    return this.productOptionRepository.save(option);
  }
}
