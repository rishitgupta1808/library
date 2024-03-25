import { getRepository } from "typeorm";
import { Customer } from "../../entity/customer";
import { Customer_Book } from "../../entity/customer_book";
import { CustomerFeesByBookIdPayload } from "./customer.interface";
import { BookService } from "../books/books.service";
import { calculatePriceToBePaid } from "./customer.utility";
import { BOOK_PRICE_PER_DAY } from "../../constants/bookPrice";
import { dbManager } from "../../config/db";
import { CustomerBookMockData } from "../../data/customer_book_mock_data";

export class CustomerService extends BookService {
  addCustomerService = async (paload: Customer) => {
    return await getRepository(Customer).save(paload);
  };

  issueBookToCustomer = async (paload: Customer_Book) => {
    return await getRepository(Customer_Book).save(paload);
  };

  calculateFessByBookIds = async (payload: CustomerFeesByBookIdPayload) => {
    try {
      const { customer_id, book_id, current_date } = payload;
      const books = (await dbManager.isConnected()) //check is  db connected or not
        ? await this.getBooksByCustomerId({
            customer_id,
            book_id: book_id.split(","),
          })
        : CustomerBookMockData(customer_id, book_id.split(",")); //if db is not connected call Mock API for sample data for test cases

      let totalPriceToBePaid = 0; //total fees of all the books
      let lateReturnBooks = []; //book ids of late submission

      // iterate over each book to calculate total price
      for (const book of books) {
       
        let priceResult = calculatePriceToBePaid(
          //function to calculate the price of each books
          book.book.bookType.price,
          book.days_to_return,
          new Date(book.lent_date),
          current_date,
          book.book.bookType.min_day,
          book.book.bookType.min_charges,
          book.book.bookType.charges_in_min_day
        );
        
        totalPriceToBePaid += priceResult.price;
        
        if (priceResult.isLate)
          lateReturnBooks.push(
             book.book.book_name,
          );
      }

      return {
        price: totalPriceToBePaid,
        ...(lateReturnBooks.length > 0 && {
          message: `These books "${lateReturnBooks.join('","')}" due dates are expired. Please contact Admin for late fees `,
        }),
      };
    } catch (error) {
      throw error;
    }
  };
}
