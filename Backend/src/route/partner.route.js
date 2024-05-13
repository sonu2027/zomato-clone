import { Router } from "express";
import { registerPartner } from "../controller/partner.controller.js";

const router = Router();

router.route("/registeruser").post(registerPartner);

export default router;
