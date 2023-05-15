// REQUIRING MODULES
import mongoose from "mongoose";

// DECLARE THE SCHEMA OF THE MONGO MODEL
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      min: 3,
      max: 10,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    bio: {
      type: String
    },
    phone: {
      type: String
    },
    location: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram : {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

// EXPORT THE MODULE
const User = mongoose.model("User", UserSchema);
export default User;
