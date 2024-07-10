import { Router } from "express";
import {
  updateCustomerDetails,
  loginCustomer,
  registerCustomer,
  createOrder,
  getCustomerOrder,
  markOrderCompleted,
} from "../controller/customer.controller.js";

const router = Router();

router.route("/register").post(registerCustomer);
router.route("/login").post(loginCustomer);
router.route("/updatecustomerdetails").put(updateCustomerDetails);
router.route("/createorder").post(createOrder);
router.route("/getcustomerorder").post(getCustomerOrder);
router.route("/markordercompleted").put(markOrderCompleted);

export default router;
