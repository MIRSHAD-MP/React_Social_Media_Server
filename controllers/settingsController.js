// REQUIRING MODULES
import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

//GET PROFILE DETAILS
export const fetchUserDetails = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;
  const user = await User.findOne({ _id: userId });
  res.status(200).json({ status: "success", user });
});

//EDIT PROFILE
export const editProfile = asyncHandler(async (req, res) => {
  console.log(req.body);
  console.log(req.user);
});

//NEW PASSWORD
export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, password } = req.body;
  const { _id: userId } = req.user;

  const user = await User.findOne({ _id: userId });
  if (!user || !(await bcrypt.compare(currentPassword, user.password))) {
    res
      .status(400)
      .json({ status: "error", message: "Incorrect current password" });
    throw new Error("Incorrect current password");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newPassword = await User.findOneAndUpdate({ password: hashedPassword });
  res
    .status(200)
    .json({ status: "success", message: "Password Change Successful" });
});
