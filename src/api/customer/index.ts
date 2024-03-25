import express from "express";
import { CustomerController } from "./costumer.controller";
import { getCustomerFeesByBooksValidator } from "./customer.validator";
const router = express.Router();

const CustomerConttrollerIns = new CustomerController();

router.get("/fees", getCustomerFeesByBooksValidator ,CustomerConttrollerIns.getCustomerFeesByBooksController);

module.exports = router;
