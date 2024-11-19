import nodemailer from "nodemailer";
import { Partner } from "../model/partner.model.js";
import { Restaurant } from "../model/restaurant.model.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utility/cloudinary.utility.js";
import { Order } from "../model/order.model.js";

const sendEmail = async (req, res) => {
  console.log("req.body", req.body);

  const { email, otp } = req.body;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "sonu.mondal.2027@gmail.com",
      pass: "scwn zrvt owih onbw",
    },
  });

  console.log("transporter: ", transporter);

  // Setup email data
  let mailOptions = {
    from: "sonu.mondal.2027@gmail.com",
    to: email,
    subject: "Email Verification Code",
    text: `Your verification code is: ${otp}`,
  };

  console.log("mailOptions: ", mailOptions);

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    res.status(201).json({ emailstatus: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ emailstatus: "Error sending email!" });
  }
};

const registerPartner = async (req, res) => {
  console.log("req.body: ", req.body);
  const { owner_full_name, owner_email } = req.body;

  try {
    const response = await Partner.create({
      owner_full_name,
      owner_email,
    });

    console.log("response: ", response);

    return res.status(200).json({ response });
  } catch (error) {
    console.log("Something went wrong while creating account: ", error);
    return res.status(500).json({ response });
  }
};

const addRestaurant = async (req, res) => {
  try {
    console.log("I am in addRestaurant");
    console.log("req.body: ", req.body);
    const { resId, ownerId } = req.body;
    const response = await Partner.updateOne(
      { _id: ownerId },
      { $push: { restaurantId: resId } }
    );
    res
      .status(200)
      .json({ response, message: "restaurant added successfully" });
  } catch (error) {
    console.log("Error while adding restaurant: ", error);
    return res
      .status(500)
      .json({ errors: error, message: "Error while adding restaurant" });
  }
};

const loginPartner = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const response = await Partner.findOne({
      owner_email: req.body.owner_email,
    });
    console.log("rrsponse: ", response);
    if (response) {
      return res.status(200).json({ response });
    } else {
      throw error;
    }
  } catch (error) {
    console.log("user not found");
    return res.status(500).json({ error: error, message: "usernot found" });
  }
};

const deleteAccount = async (req, res) => {
  console.log("req.body: ", req.body);
  const partner = await Partner.findById(req.body.id);
  console.log("partner: ", partner);

  try {
    if (partner.owner_profile_picture_public_id) {
      const cloudinaryDeleteRes = await deleteFromCloudinary(
        partner.owner_profile_picture_public_id
      );
      console.log("cloudinaryDeleteRes: ", cloudinaryDeleteRes);
    }
    const restaurantRes = await Promise.all(
      partner.restaurantId.map((id) => Restaurant.deleteMany({ _id: id }))
    );
    const partnerRes = await Partner.deleteOne({ _id: req.body.id });

    return res.status(200).json({ restaurantRes, partnerRes });
  } catch (error) {
    console.log("Error while deleting account: ", error);
    return res
      .status(500)
      .json({ error: error, message: "error while deleting account" });
  }
};

const updateProfilePicture = async (req, res) => {
  console.log("req.body: ", req.body);
  console.log("req.files: ", req.files);

  const {profilePicture}=req.files

  try {
    const cloudinaryUploadRes = await uploadOnCloudinary(
      profilePicture[0].buffer,
      `${Date.now()}_${profilePicture[0].originalname}`
    );
    console.log("cloudinaryUploadRes: ", cloudinaryUploadRes);
    const res1 = await Partner.updateOne(
      { _id: req.body.id },
      {
        owner_profile_picture_URL: cloudinaryUploadRes.url,
        owner_profile_picture_public_id: cloudinaryUploadRes.public_id,
      }
    );
    console.log("rseponse: ", res1);

    const res2 = await Partner.findById(req.body.id);

    return res.status(200).json({ res1, res2 });
  } catch (error) {
    console.log("error while updating profile picture");
    return res
      .status(500)
      .json({ error: error, message: "Error while updating profile picture" });
  }
};

const updatePartnerName = async (req, res) => {
  console.log("req.body: ", req.body);
  const { partnerId, newName } = req.body;

  try {
    const resposne = await Partner.updateOne(
      { _id: partnerId },
      { owner_full_name: newName }
    );
    console.log("Response: ", resposne);
    const partner = await Partner.findById(partnerId);
    console.log("partner: ", partner);
    if (partner && resposne) {
      return res.status(200).json({ partner, resposne });
    } else {
      throw error;
    }
  } catch (error) {
    console.log("Error while updating name: ", error);
    return res
      .status(500)
      .json({ error, message: "Error while updating name" });
  }
};

const updatePartnerEmail = async (req, res) => {
  console.log("req.body: ", req.body);
  const { partnerId, newEmail } = req.body;

  try {
    const resposne = await Partner.updateOne(
      { _id: partnerId },
      { owner_email: newEmail }
    );
    console.log("Response: ", resposne);
    const partner = await Partner.findById(partnerId);
    console.log("partner: ", partner);
    if (partner && resposne) {
      return res.status(200).json({ partner, resposne });
    } else {
      throw error;
    }
  } catch (error) {
    console.log("Error while updating email: ", error);
    return res
      .status(500)
      .json({ error, message: "Error while updating email" });
  }
};

const getPartnerOrder = async (req, res) => {
  const { restaurantId } = req.body;
  console.log("restaurant ids for partner order is: ", restaurantId);
  try {
    const response1 = await Order.find();
    console.log("res1 is: ", response1);
    const response2 = [];
    restaurantId.map((e) => {
      response1.map((elem) => {
        if (elem.restaurantId == e) {
          response2.push(elem);
        }
      });
    });

    console.log("response of partner order is: ", response2);
    res.status(200).json(response2);
  } catch (error) {}
};

export {
  sendEmail,
  registerPartner,
  addRestaurant,
  loginPartner,
  deleteAccount,
  updateProfilePicture,
  updatePartnerName,
  updatePartnerEmail,
  getPartnerOrder,
};
