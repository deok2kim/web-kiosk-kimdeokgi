import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { createPaymentOptionDto } from './dto/create-payment-option.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/payment-option')
  findAllPaymentOption() {
    return this.orderService.findAllPaymentOption();
  }

  @Post('/payment-option')
  createPaymentOption(@Body() option: createPaymentOptionDto) {
    return this.orderService.createPaymentOption(option);
  }
}
