import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book';

@Entity({ schema: 'public', name: 'author' })
export class Author{

    // constructor(data : {author_name: string}) {
    //     this.author_name = data.author_name;
    // }

    @PrimaryGeneratedColumn({type : "int" })
    id ?: number;

    @Column({type : "varchar", unique : true})
    author_name : string;

    @OneToMany(()=>Book, book => book.author)
    book ?: Book[]

} 