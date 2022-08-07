import { OrderDetail } from './order-detail.entity';
import { PaymentOption } from './payment.entity';
import {
  BaseEntity,
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
}
