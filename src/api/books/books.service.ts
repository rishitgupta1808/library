import { getRepository } from "typeorm";
import { Customer } from "../../entity/customer";
import { Book } from "../../entity/book";

export class BookService extends Book {

    addBookService = async(paload : Book) =>{
        return await getRepository(Book).save(paload)
    }
}