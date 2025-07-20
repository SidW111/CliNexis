import { doctorModel } from "../models/doctorModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { appointmentModel } from "../models/appointmentModel.js";
dotenv.config();

//then change this
export const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doc = await doctorModel.findOne({ email });

    if (!doc) return res.json({ message: "email doesn't exist" });

    const isMatch = await bcrypt.compare(password, doc.password);
  
    if (!isMatch)
      return res.json({ message: "unauthorized doctor" });

    const accessToken = jwt.sign({ docId: doc._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign(
      { docId: doc._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("refreshTokenDoctor", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "doctor login successful",
      accessToken,
      docId: doc._id,
    });
  } catch (error) {
    return res.json({
      message: "error logging in doctor",
      error: error.message,
    });
  }
};

export const newDoctorAccessToken = (req, res) => {
  try {
    const token = jwt.sign({ docId: req.doctor }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    res.json({
      message: "new doctor access token created successfully",
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "new access Token refresh failed for doctor",
      error: error.message,
    });
  }
};


export const changeAvailability = async (req, res) => {
  try {
    const docId = req.doctor;
    console.log(docId)
    const doc = await doctorModel.findById(docId);
    if (!doc) return res.json({ message: "doctor not found" });
    await doctorModel.findByIdAndUpdate(docId, { available: !doc.available });
    res.json({
      message: "availability changed",
    });
  } catch (error) {
    return res.json({
      message: "error changing availability",
      error: error.message,
    });
  }
};

//api to get dr list
export const doctorList = async (req, res) => {
  try {
    const doctor = await doctorModel.find({}).select(["-email", "-password"]);
    res.json({ doctor });
  } catch (error) {
    return res.json({
      message: "doctors list not found",
      error: error.message,
    });
  }
};

//api to get appointments of doctor
export const appointmentsDoctor = async (req, res) => {
  try {
    const { docId } = req.doctor;
    const appointment = await appointmentModel.findById(docId);
    res.json({ message: "appointments fetched", appointment });
  } catch (error) {
    return res.json({
      message: "error fetching appointments",
      error: error.message,
    });
  }
};

//api to get doctor profile

export const getDoctorProfile = async (req, res) => {
  try {
    const docId  = req.doctor;
    const doctor = await doctorModel.findById(docId).select("-password");

    res.json({ message: "doctor fetched successfully",doctor });
  } catch (error) {
    return res.json({
      message: "doctor fetching unsuccessful",
      error: error.message,
    });
  }
};

export const updateDoctorProfile = async (req, res) => {
  try {
    const docId = req.doctor;
    const { degree, fees, available, about, experience } = req.body;

    const doctor = await doctorModel.findByIdAndUpdate(docId, {
      degree,
      fees,
      about,
      available,
      experience,
    },{new:true});

    res.json({ message: "profile updated", doctor });
  } catch (error) {
    return res.json({
      message: "dr profile update unsuccessful",
      error: error.message,
    });
  }
};

export const appointmentComplete = async (req, res) => {
  try {
    const { docId } = req.doctor;
    const appointmentId = req.body;

    const appointment = await appointmentModel.findOne({
      _id: appointmentId,
      docId: docId,
    });

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    appointment.isCompleted = true;
    await appointment.save();

    res.json({
      message: "appointment marked completed",
    });
  } catch (error) {
    res.json({
      message: "error marking complete",
      error: error.message,
    });
  }
};

export const appointmentCancel = async (req, res) => {
try{
  const {appointmentId} = req.body;
  const docId = req.doctor;

  const appointment = await appointmentModel.findOne({
    _id:appointmentId,
    docId:docId
  })

  appointment.cancelled=true;
  await appointment.save();

  const doctor = await doctorModel.findById(docId);
  const { slotTime, slotDate } = appointment;

  if (doctor.slots_booked[slotDate]) {
    doctor.slots_booked[slotDate] = doctor.slots_booked[slotDate].filter(
    (slot) => slot !== slotTime);
    doctor.save();
  }

  res.json({
      success: true,
      message: "Appointment cancelled",
    });
  } catch (error) {
    res.status(500).json({ message: "appointment Cancel failed", error: error.message });
  }
};
