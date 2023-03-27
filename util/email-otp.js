import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",

  auth: {
    user: "yoho.stream.chat@gmail.com",
    pass: "atbspqhxbghaierp",
  },
});

export default transporter