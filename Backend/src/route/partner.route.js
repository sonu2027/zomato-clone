import { Router } from "express";
import { registerPartner, addRestaurant } from "../controller/partner.controller.js";

const router = Router();

router.route("/registeruser").post(registerPartner);
router.route("/addrestaurant").post(addRestaurant);

export default router;
