import { Router } from "express";
import { registerPartner, addRestaurant, loginPartner } from "../controller/partner.controller.js";

const router = Router();

router.route("/registeruser").post(registerPartner);
router.route("/addrestaurant").post(addRestaurant);
router.route("/loginuser").post(loginPartner);

export default router;
