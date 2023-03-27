// REQUIRING MODULES
import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Otp from "../models/Otp.js";
import transporter from "../util/email-otp.js";

// SIGNUP USER
export const signupUser = asyncHandler(async (req, res) => {
  const { email, name, password, dateOfBirth } = req.body;
  if (!email || !name || !password || !dateOfBirth) {
    res
      .status(400)
      .json({ status: "error", message: "All fields are mandatory!" });
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res
      .status(400)
      .json({ status: "error", message: "User already registerded!" });
    throw new Error("User already registerded!");
  }
  //HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    name,
    password: hashedPassword,
    dateOfBirth,
  });
  if (user) {
    res
      .status(201)
      .json({ status: "success", message: "successfully registered" });
  } else {
    res
      .status(400)
      .json({ status: "error", message: "User data us not valid" });
    throw new Error("User data us not valid");
  }
});

// LOGGIN IN
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ status: "error", message: "All fields are mandatory!" });
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  // COMPARE PASSWORD WITH HASHPASSWORD
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          _id: user.id,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    res
      .status(200)
      .json({ status: "success", message: "Successfully logged in" });
  } else {
    res
      .status(401)
      .json({ status: "error", message: "Email or Password is not valid" });
    throw new Error("Email or Password is not valid");
  }
});

// PASSWORD RESET
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ status: "error", message: "Enter your email" });
    throw new Error("Enter your email");
  }
  const user = await User.findOne({ email });
  if (user) {
    res
      .status(200)
      .json({ status: "success", messge: "Email is valid", userId: user._id });
  } else {
    res.status(400).json({ status: "error", message: "Email is not valid" });
    throw new Error("Email is not valid");
  }
});

// SEND OTP
export const sendOtp = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  const newOtp = `${Math.floor(1000 + Math.random() * 9000)}`;

  const otp = await Otp.create({
    userId: id,
    otp: newOtp,
  });

  const mailOption = {
    to: user.email,
    title: "OTP for forgot password",
    html: newOtp,
  };

  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      res.status(400).json({ status: "error", message: "Some error happened" });
      throw new Error("User data us not valid");
    } else {
      res
        .status(200)
        .json({
          status: "success",
          message: "Verification Email sent successfully",
        });
      console.log("Verification Email sent successfully");
    }
  });
});

// CHECK OTP
export const checkOtp = asyncHandler(async (req, res) => {
  const { otp, userId } = req.body;
  if (!otp) {
    res.status(400).json({ status: "error", message: "Enter your OTP" });
    throw new Error("Enter your OTP");
  }

  const user = await Otp.findOne({ userId: userId });
  if (!user) {
    res.status(400).json({ status: "error", message: "Invalid OTP" });
    throw new Error("OTP is not valid");
  }
  if (user.otp == otp) {
    res.status(200).json({ status: "success", messge: "Invalid OTP", userId});
  } else {
    res.status(400).json({ status: "error", message: "Invalid OTP" });
    throw new Error("OTP is not valid");
  }
});

// NEW PASSWORD
export const newPassword = asyncHandler(async (req, res) => {
  console.log(req.body);
  console.log(req.params);

  const { password } = req.body;
  const { id } = req.params;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newpassword = await User.findByIdAndUpdate(id, {password: hashedPassword});
    res.status(200).json({ status: "success", message: "New Password" });
});
