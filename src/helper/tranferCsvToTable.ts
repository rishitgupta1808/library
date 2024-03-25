import fs from "fs";
import csv from "csv-parser";
import { NextFunction, Request, Response } from "express";
import { CustomerService } from "../api/customer/customer.service";
import { BookService } from "../api/books/books.service";
import { AuthorService } from "../api/author/author.serice";
import { converttStringDateintoJsDate } from "../utils/dateConversion";

const CustomerServiceInstance = new CustomerService();
const BookServiceInstance = new BookService();
const AuthorServiceInstance = new AuthorService();

export const tansferDataFromCSVToTable = async (
  req: Request,
  res: Response,
) => {
  let results: any = [];

  let i = 0;

  await fs
    .createReadStream("./src/data/customer_data.csv")
    .pipe(csv())
    .on("data", async (data) => {
      console.log(i, data);
      results.push(data);
      i++;
    })
    .on("end", async () => {
      console.log(results);
      for (const iterator of results) {
        let data = iterator;
        console.log(iterator);
        const customer = await CustomerServiceInstance.addCustomerService({
          customer_name: data.customer_name,
          customer_id: +data.customer_id,
        });
        const booksData = JSON.parse(data.books);
        for (const book_data of booksData) {
          const author = await AuthorServiceInstance.addAuthorService({
            author_name: book_data.author_name,
          });
          const book = await BookServiceInstance.addBookService({
            book_id: book_data.book_id,
            book_name: book_data.book_name,
            author: author,
          });
          const customer_book =
            await CustomerServiceInstance.issueBookToCustomer({
              customer: customer,
              book: book,
              lent_date: new Date(
                converttStringDateintoJsDate(book_data.lend_date),
              ),
              days_to_return: book_data.days_to_return,
            });
        }
      }

      res.status(200).send("done");
      console.log("Data Transfer Complete");
    });
};
