import { Router } from "express";
import {
  registerPartner,
  addRestaurant,
  loginPartner,
  deleteAccount,
  updateProfilePicture,
  updatePartnerName,
  updatePartnerEmail,
  getPartnerOrder,
} from "../controller/partner.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/registeruser").post(registerPartner);
router.route("/addrestaurant").post(addRestaurant);
router.route("/loginuser").post(loginPartner);
router.route("/deleteaccount").delete(deleteAccount);
router.route("/updateprofilepicture").post(
  upload.fields([
    {
      name: "profilePicture",
      maxCount: 1,
    },
  ]),
  updateProfilePicture
);
router.route("/partner/updatename").put(updatePartnerName);
router.route("/partner/updateemail").put(updatePartnerEmail);
router.route("/getpartnerorder").post(getPartnerOrder);

export default router;
