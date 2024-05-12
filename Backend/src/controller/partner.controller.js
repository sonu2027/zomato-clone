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

const registerUser = async (req, res) => {
  console.log("req.body: ", req.body);
  const { owner_full_name, owner_email } = req.body;

  const response = await Partner.create({
    owner_full_name,
    owner_email,
  });

  console.log("response: ", response);

  return res.status(201).json({ response });
};

export { sendEmail, registerUser };
