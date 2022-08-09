import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductOptionCategory } from './product-option-category.entity';
import { BaseEntity } from 'typeorm';
@Entity({ name: 'product_option' })
export class ProductOption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '옵션명' })
  name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: '추가 요금',
  })
  extraCharge: number;

  @ManyToOne(
    () => ProductOptionCategory,
    (optionCategory) => optionCategory.id,
    {
      nullable: false,
      onDelete: 'RESTRICT',
    },
  )
  category: number;
}
