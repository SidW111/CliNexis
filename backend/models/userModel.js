import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  dob: { type: String },
  image: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const userModel = mongoose.model("user", userSchema);
