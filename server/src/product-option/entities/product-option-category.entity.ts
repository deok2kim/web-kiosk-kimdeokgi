import { ProductOption } from './product-option.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'product_option_category' })
@Unique(['name'])
export class ProductOptionCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '상품 옵션 분류' })
  name: string;

  @OneToMany(() => ProductOption, (productOption) => productOption.category)
  productOption: ProductOption[];
}
