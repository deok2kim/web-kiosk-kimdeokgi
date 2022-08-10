import { ProductOption } from '../product-option/entities/product-option.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { Order } from './entities/order.entity';
import { PaymentOption } from './entities/payment.entity';

import { CreateOrderDto } from './dto/create-order.dto';
import { CreatePaymentOptionDto } from './dto/create-payment-option.dto';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(PaymentOption)
    private paymentOptionRepository: Repository<PaymentOption>,

    @InjectRepository(Order)
    private orderRepository: Repository<Order>,

    @InjectRepository(OrderDetail)
    private orderDtailRepository: Repository<OrderDetail>,

    @InjectRepository(ProductOption)
    private productOptionRepository: Repository<ProductOption>,
  ) {}

  findAllPaymentOption(): Promise<PaymentOption[]> {
    return this.paymentOptionRepository.find();
  }

  createPaymentOption(option: CreatePaymentOptionDto) {
    return this.paymentOptionRepository.save(option);
  }

  async findAllOrder(): Promise<Order[]> {
    return await this.orderRepository.find({
      relations: ['payment', 'orders'],
    });
  }

  async findOneOrder(id: number): Promise<Order> {
    return await this.orderRepository.findOne({
      where: {
        id,
      },
      relations: ['payment', 'orders', 'orders.productOptions'],
    });
  }

  async createOrder(orderDto: CreateOrderDto) {
    const order = await this.orderRepository.save(orderDto);
    const { id: orderId } = order;
    const { products } = orderDto;
    products.forEach(async ({ id, quantity, options }) => {
      const optionNames = options.map((option) => ({ name: option }));
      const productOptions = await this.productOptionRepository.find({
        where: optionNames,
      });
      const orderDetail = {
        order: orderId,
        product: id,
        quantity,
        productOptions: productOptions,
      };
      await this.orderDtailRepository.save(orderDetail);
    });

    return { id: orderId };
  }
}
