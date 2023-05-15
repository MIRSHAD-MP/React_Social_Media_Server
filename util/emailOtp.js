// REQUIRING MODULES
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()

let transporter = nodemailer.createTransport({  
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,  
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// EXPORT THE MODULE
export default transporter