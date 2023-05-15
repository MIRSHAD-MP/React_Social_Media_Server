// REQUIRING MODULES
import express from "express";

const router = express.Router();

//CONTROLLER FUNCTIONS
import {
  signupUser,
  loginUser,
  forgotPassword,
  sendEmailOtp,
  checkOtp,
  newPassword,
} from "../controllers/authController.js";

// USER ROUTES
router.post("/", signupUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/otp/:id", sendEmailOtp);
router.post("/check-otp", checkOtp);
router.put("/new-password/:id", newPassword);

// EXPORT THE MODULE
export default router;
