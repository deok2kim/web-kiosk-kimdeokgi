import { Order } from './order.entity';
import { Product } from './../../products/entities/product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'order_detail' })
export class OrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', comment: '수량' })
  quantity: number;

  @ManyToOne(() => Product, (product) => product.id, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  product: number;

  @ManyToOne(() => Order, (order) => order.id, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  order: number;
}
