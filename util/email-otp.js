// REQUIRING MODULES
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",

  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// EXPORT THE MODULE
export default transporter