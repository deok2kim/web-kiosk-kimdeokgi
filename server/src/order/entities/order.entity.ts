import { OrderDetail } from './order-detail.entity';
import { PaymentOption } from './payment.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'order' })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => PaymentOption, (payment) => payment.id, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  payment: number;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orders: OrderDetail[];

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: '총 결제 금액',
  })
  totalAmount: number;
}
