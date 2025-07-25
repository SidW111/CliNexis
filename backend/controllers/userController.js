import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { userModel } from "../models/userModel.js";
import { doctorModel } from "../models/doctorModel.js";
import { appointmentModel } from "../models/appointmentModel.js";

dotenv.config();

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("hii from register");
  // Validate user input
  if (!name || !email || !password) {
    return res.json({ message: "Missing Details" });
  }
  if (!validator.isEmail(email)) {
    return res.json({ message: "Enter a valid email" });
  }
  validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
  });

  try {
    const existingUser = await userModel.findOne({
      email,
    });

    if (existingUser) {
      return res.status(409).json({ message: "email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      res.status(211).json({ message: "user registered successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: "registration failed",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "missing email or password" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user does not exist " });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("refreshtoken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      path: "api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        image:user.image
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

export const newAccessToken = (req, res) => {

  try {
    const newAccessToken = jwt.sign(
      { userId: req.user },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    return res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).json({
      message: "failed to generate new access token",
      error: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    console.log(req.user)
    const user = await userModel.findById(req.user).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    return res.status(200).json({
      message: "user fetched successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user profile",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.user;
    const { dob, gender } = req.body;
    const imageFile = req.file;

    if ( !imageFile && !gender && !dob) {
      return res.status(400).json({
        message: "No fields provided to update",
      });
    }

    const updateData = {};
    if (dob) updateData.dob = dob;
    if (gender) updateData.gender = gender;
    if (imageFile) {
      const imgFile = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      updateData.image = imgFile.secure_url;
    }

    const updateUser = await userModel
      .findByIdAndUpdate(userId, updateData, { new: true, runValidators: true })
      .select("-password -name -email");

    res.json({
      message: "profile updated successfully",
      updateUser,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "profile update unsuccessfull",
      error: error.message,
    });
  }
};

//appointmentBooking api

export const bookAppointment = async (req, res) => {
  try {
    const userId = req.user;
    const { docId, slotDate, slotTime } = req.body;

    const docData = await doctorModel.findById(docId);
    if (!docData) return res.json({ message: "doctor not found" });
    if (!docData.available)
      return res.json({ message: "doctor not available" });

    const slots_booked = { ...docData.slots_booked };
    if (slots_booked[slotDate]?.includes(slotTime)) {
      return res.json({ message: "slot not available" });
    }
    if (!slots_booked[slotDate]) slots_booked[slotDate] = [];
    slots_booked[slotDate].push(slotTime);

    const userData = await userModel.findById(userId);
    if (!userData) return res.json({ message: "user not found" });

    const {
      slotsbooked: _,
      password: __,
      ...sanitizedDocData
    } = docData.toObject();

    const appointmentData = {
      userId,
      docId,
      userData,
      docData: sanitizedDocData,
      amount: docData.fees,
      slotDate,
      slotTime,
      Date: Date.now(),
    };

    const newAppointment = await appointmentModel.create(appointmentData);

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({
      message: "appointment booked successfully",
      appoointment: newAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "problem booking appointment",
      error: error.message,
    });
  }
};

// api to get user appointments
export const getAppointments = async (req, res) => {
  try {
    const userId = req.user;
    console.log(userId)
    const appointments = await appointmentModel.find({userId}).populate("docId", "-password");
    if(!appointments){res.json({message:"problem fetching appointments"})}
    return res.status(200).json({
      message: "appointments fetched suuccessfully",
      appointments,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to fetch appointments",
      error: error.message,
    });
  }
};

export const cancelAppointment = async (req, res) => {
  try {
    const userId = req.user;
    const { appointmentId } = req.body;
    if (!appointmentId)
      return res.status(403).json({ message: "appointment ID is required" });

    const appointment = await appointmentModel.findById(appointmentId);
    if (!appointment)
      return res.status(400).json({ message: "appointment not found" });

    if (appointment.userId.toString() !== userId)
      return res.status(403).json({ message: "unAuthorized" });

    if (appointment.cancelled)
      return res.json({ message: "appointment already cancelled" });

    appointment.cancelled = true;
    await appointment.save();

    const doc = await doctorModel.findById(appointment.docId);
    let slots_booked = doc.slots_booked;
    let slotDate = appointment.slotDate;
    let slotTime = appointment.slotTime
    if (slots_booked[slotDate]) {
      doc.slots_booked[slotDate] = doc.slots_booked[slotDate].filter(
        (slot) => slot !== slotTime
      );
    }

    await doctorModel.findByIdAndUpdate(appointment.docId, { slots_booked });

    return res.json({ message: "Appointment Cancelled successfully",appointment });
  } catch (error) {
    res.json({
      error: error.message,
      message: "appointment cancel failed",
    });
  }
};
