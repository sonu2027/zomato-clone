import { Router } from "express";
import { sendEmail } from "../controller/partner.controller.js";
import {
  deleteRestaurant,
  registerRestaurant,
  partnerRestaurant,
  deletePartnerRestaurant,
  updateRestaurant,
  addCuisines,
  getCuisines,
  getAllRes,
  getAllCuisines,
} from "../controller/restaurant.controller.js";
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

router.route("/deleterestaurant").delete(deleteRestaurant);

router.route("/sendemailotp").post(sendEmail);

router.route("/partnerrestaurant").post(partnerRestaurant);

router.route("/deletepartnerrestaurant").put(deletePartnerRestaurant);

router.route("/updaterestaurant").put(
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
  updateRestaurant
);

router.route("/addcuisines").post(addCuisines);
router.route("/getcuisines").post(getCuisines);
router.route("/allrestaurant").get(getAllRes);
router.route("/getallcuisines").get(getAllCuisines);

export default router;