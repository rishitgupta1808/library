// BookType.ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true }) //consider these chanrges when borroowed days is less than min_day Ex: Minimum changes will be considered as Rs 2 if days rented is less than 2 days
  min_charges: number;

  @Column({ type: "int", nullable: true }) //min days to be consider of a book type
  min_day: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true }) //charges consider when book is under min_days Ex : Now for Regular books the first 2 days charges will be Rs 1 per day and 1.5 Rs there after.
  charges_in_min_day: number;
}
