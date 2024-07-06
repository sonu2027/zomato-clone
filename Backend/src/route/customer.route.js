import { Router } from "express";
import {
  updateCustomerDetails,
  loginCustomer,
  registerCustomer,
} from "../controller/customer.controller.js";

const router = Router();

router.route("/register").post(registerCustomer);
router.route("/login").post(loginCustomer);
router.route("/updatecustomerdetails").put(updateCustomerDetails);

export default router;
