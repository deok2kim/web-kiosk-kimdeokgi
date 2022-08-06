import { ProductOption } from './../../product-option/entities/product-option.entity';
import { Product } from './../../products/entities/product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  ManyToMany,
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

  @ManyToMany(() => ProductOption, (option) => option.id)
  @JoinTable()
  productOption: ProductOption[];
}
