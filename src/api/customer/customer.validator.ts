import { body, query, ValidationChain } from "express-validator";

export const getCustomerFeesByBooksValidator: ValidationChain[] = [
  query("customer_id").notEmpty().isNumeric(),
  query("book_id")
    .notEmpty()
    .isString()
    .custom((value) => {
      const uuids = value.split(",");
      for (const uuid of uuids) {
        if (
          !uuid.match(
            /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
          )
        ) {
          throw new Error("Invalid UUID");
        }
      }
      return true;
    }),
  query("current_date").optional()
  .isDate()  
];
