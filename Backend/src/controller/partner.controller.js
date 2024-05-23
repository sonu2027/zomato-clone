import nodemailer from "nodemailer";
import { Partner } from "../model/partner.model.js";

const sendEmail = async (req, res) => {
  console.log("req.body", req.body);

  const { full_name, email, otp } = req.body;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "sonu.mondal.2027@gmail.com",
      pass: "olpu rpqo rdcr gjdd",
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

export { sendEmail, registerPartner, addRestaurant, loginPartner };
