import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    plan: {
      type: String,
      enum: ["FREE", "VIP1", "VIP2", "VIP3"],
      default: "FREE",
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);