import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Customer_Book } from './customer_book';

@Entity({ schema: 'public', name: 'customer' })
export class Customer{

    // constructor(customer_id: number, customer_name: string) {
    //     this.customer_id = customer_id;
    //     this.customer_name = customer_name;
    // }

    @PrimaryColumn({type : "int" })
    customer_id : number;

    @Column({type : "varchar", unique : true})
    customer_name : string;

    @OneToMany(()=>Customer_Book,  custbok  =>custbok.customer)
    customer_book ?: Customer_Book[];

} 