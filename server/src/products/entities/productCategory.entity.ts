import { Product } from './product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'product_category' })
@Unique(['name'])
export class ProductCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, comment: 'μν λΆλ₯' })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
