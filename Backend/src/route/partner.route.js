import { Router } from "express";
import { registerUser } from "../controller/partner.controller.js";

const router = Router();

router.route("/registeruser").post(registerUser);

export default router;
