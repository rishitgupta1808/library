import { NextFunction, Request, Response } from "express";
import { CustomerService } from "./customer.service";
import { CustomerFeesByBookIdPayload } from "./customer.interface";
import { validationResult } from "express-validator";

export class CustomerController extends CustomerService {
  getCustomerFeesByBooksController = async (
    req: Request<unknown, unknown, unknown, CustomerFeesByBookIdPayload>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { customer_id, book_id, current_date } = req.query;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({success : false, errors: errors.array() });
      }

      const roles = await this.calculateFessByBookIds({
        customer_id,
        book_id,
        current_date,
      });

      return res.status(200).json({ success: true, data: roles });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error in getting roles",
        err: error.message,
      });
    }
  };
}
