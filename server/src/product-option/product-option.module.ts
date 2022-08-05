import { ProductOptionCategory } from './entities/product-option-category.entity';
import { ProductOption } from './entities/product-option.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductOptionService } from './product-option.service';
import { ProductOptionController } from './product-option.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOption, ProductOptionCategory])],
  exports: [TypeOrmModule],
  controllers: [ProductOptionController],
  providers: [ProductOptionService],
})
export class ProductOptionModule {}
