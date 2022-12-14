import { CreateOrderDto } from './dto/create-order.dto';
import { CreatePaymentOptionDto } from './dto/create-payment-option.dto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/payment-option')
  findAllPaymentOption() {
    return this.orderService.findAllPaymentOption();
  }

  @Post('/payment-option')
  createPaymentOption(@Body() option: CreatePaymentOptionDto) {
    return this.orderService.createPaymentOption(option);
  }

  @Get(':id')
  findOneOrder(@Param('id') id: number) {
    return this.orderService.findOneOrder(id);
  }

  @Get()
  findAllOrder() {
    return this.orderService.findAllOrder();
  }

  @Post()
  createOrder(@Body() order: CreateOrderDto) {
    return this.orderService.createOrder(order);
  }
}
