import { OrderDetail } from './entities/order-detail.entity';
import { Order } from './entities/order.entity';
import { PaymentOption } from './entities/payment.entity';

import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
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

  async createOrder(orderDto: CreateOrderDto) {
    const order = await this.orderRepository.save(orderDto);
    const { id: orderId } = order;
    const { products } = orderDto;
    products.forEach(({ id, quantity }) => {
      const orderDetail: CreateOrderDetailDto = {
        order: orderId,
        product: id,
        quantity,
      };
      this.orderDtailRepository.save(orderDetail);
    });
    return order;
  }
}
