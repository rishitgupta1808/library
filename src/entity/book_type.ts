// BookType.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
