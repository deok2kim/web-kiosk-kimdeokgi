import { OrderDetail } from './../../order/entities/order-detail.entity';
import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductOptionCategory } from './product-option-category.entity';
import { BaseEntity } from 'typeorm';
@Entity({ name: 'product_option' })
export class ProductOption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '옵션명' })
  name: string;

  @Column({ type: 'decimal', comment: '추가 요금', default: 0 })
  extra_charge: number;

  @ManyToOne(
    () => ProductOptionCategory,
    (optionCategory) => optionCategory.id,
    {
      nullable: false,
      onDelete: 'RESTRICT',
    },
  )
  category: number;

  @ManyToMany(() => OrderDetail, (order) => order.id)
  @JoinTable()
  orders: OrderDetail[];
}
