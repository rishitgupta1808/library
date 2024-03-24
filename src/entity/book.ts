import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Customer_Book } from './customer_book';
import { Author } from './author';

@Entity({ schema: 'public', name: 'book' })
export class Book{

    // constructor(data : {book_id: string, book_name: string, author : Author}) {
    //     this.book_id = data.book_id;
    //     this.book_name = data.book_name;
    //     this.author = data.author;
    // }


    @PrimaryColumn({type : "uuid" })
    book_id : string;

    @Column({type : "varchar", unique : true})
    book_name : string;

    @OneToMany(()=>Customer_Book,  custbok  =>custbok.book)
    customer_book ?: Customer_Book[];

    @ManyToOne(()=>Author, author=> author.book)
    author : Author;

} 