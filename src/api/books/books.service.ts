import { In, getRepository } from "typeorm";
import { Customer } from "../../entity/customer";
import { Book } from "../../entity/book";
import { Customer_Book } from "../../entity/customer_book";

export class BookService extends Book {
  addBookService = async (paload: Book) => {
    return await getRepository(Book).save(paload);
  };

  public getBooksByCustomerId = async (payload: {
    customer_id: number;
    book_id?: string[];
  }) => {
    console.log(payload.book_id);
    return await getRepository(Customer_Book).find({
      relations: {
        customer: true,
        book: {
            bookType : true
        },
      },
      where: {
        customer: {
          customer_id: payload.customer_id,
        },
        ...(payload.book_id &&
          payload.book_id.length > 0 && {
            book: {
              book_id: In(payload.book_id),
            },
          }),
      },
    });
  };
}
