import { ProductCategory } from './productCategory.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'product' })
@Unique(['id'])
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '상품명' })
  name: string;

  @Column({ type: 'decimal', comment: '가격' })
  price: number;

  @Column({ type: 'varchar', length: 200, comment: '이미지' })
  thumbnail_img: string;

  @ManyToOne(() => ProductCategory, (category) => category.id, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  category: number;
}
