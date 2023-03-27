// REQUIRING MODULES
import mongoose from "mongoose";

// DECLARE THE SCHEMA OF THE MONGO MODEL
const OtpSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default:  Date.now,
      expires: 30,
    },
  }
);

// EXPORT THE MODULE
const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;
