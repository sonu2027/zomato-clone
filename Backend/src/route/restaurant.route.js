import { Router } from "express";
import { sendEmail } from "../controller/partner.controller.js";
import { registerRestaurant } from "../controller/restaurant.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/registerrestaurant").post(
  upload.fields([
    {
      name: "restaurant_menu",
      maxCount: 1,
    },
    {
      name: "restaurant_food_image",
      maxCount: 1,
    },
    {
      name: "restaurant_image",
      maxCount: 1,
    },
  ]),
  registerRestaurant
);

router.route("/sendemailotp").post(upload.fields([]), sendEmail);

export default router;
