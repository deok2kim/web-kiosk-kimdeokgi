import { ProductOption } from '../product-option/entities/product-option.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { Order } from './entities/order.entity';
import { PaymentOption } from './entities/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PaymentOption,
      Order,
      OrderDetail,
      ProductOption,
    ]),
  ],
  exports: [TypeOrmModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
