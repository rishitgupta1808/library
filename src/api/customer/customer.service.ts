import { getRepository } from "typeorm";
import { Customer } from "../../entity/customer";
import { Customer_Book } from "../../entity/customer_book";

export class CustomerService extends Customer {

    addCustomerService = async(paload : Customer) =>{
        return await getRepository(Customer).save(paload)
    }

    issueBookToCustomer  = async(paload : Customer_Book) =>{
        return await getRepository(Customer_Book).save(paload)
    }
}