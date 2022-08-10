import { ProductOption } from './../../product-option/entities/product-option.entity';
import { Order } from './order.entity';
import { Product } from './../../products/entities/product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'order_detail' })
export class OrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', comment: '수량' })
  quantity: number;

  @ManyToOne(() => Product, (product) => product.id, {
    eager: true,
    nullable: false,
  })
  // @JoinColumn({ name: 'name' })
  product: number;

  @ManyToOne(() => Order, (order) => order.id, {
    nullable: false,
  })
  order: number;

  @ManyToMany(() => ProductOption, (productOptions) => productOptions.id, {
    cascade: true,
  })
  @JoinTable()
  productOptions: ProductOption[];
}
