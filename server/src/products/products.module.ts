import { ProductCategory } from './entities/productCategory.entity';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCategory])],
  exports: [TypeOrmModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
