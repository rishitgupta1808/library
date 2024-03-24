import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer';
import { Book } from './book';

@Entity({ schema: 'public', name: 'customer_book' })
export class Customer_Book{

    // constructor(data : {customer: Customer, book: Book, lent_date : Date, days_to_return : number}) {
    //     this.customer = data.customer;
    //     this.book = data.book;
    //     this.lent_date = data.lent_date;
    //     this.days_to_return = data.days_to_return;
    // }

    @PrimaryGeneratedColumn()
    id ?: number;

    @ManyToOne(()=>Customer, customer => customer.customer_book)
    customer : Customer;

    @ManyToOne(()=>Book, book => book.customer_book)
    book : Book;

    @Column({type : "date"})
    lent_date : Date;

    @Column({type : "int"})
    days_to_return : number;
} 