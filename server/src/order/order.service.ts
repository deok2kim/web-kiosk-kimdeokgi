import { PaymentOption } from './entities/payment.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { createPaymentOptionDto } from './dto/create-payment-option.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(PaymentOption)
    private paymentOptionRepository: Repository<PaymentOption>,
  ) {}

  findAllPaymentOption(): Promise<PaymentOption[]> {
    return this.paymentOptionRepository.find();
  }

  createPaymentOption(option: createPaymentOptionDto) {
    return this.paymentOptionRepository.save(option);
  }
}
