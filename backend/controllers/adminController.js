import { doctorModel } from "../models/doctorModel.js";
import bcrypt from "bcryptjs";
import bcyrpt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken"
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { appointmentModel } from "../models/appointmentModel.js";
import { userModel } from "../models/userModel.js";
dotenv.config();


export const adminLogin  =(req,res) =>{
const {email,password} = req.body;
if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
   const token = jwt.sign({isAdmin:true},process.env.JWT_SECRET,{expiresIn:"2h"});
    return res.status(200).json({ token, message: "Admin authenticated" });
  }
  return res.status(401).json({ message: "Invalid admin credentials" })
}

export const addDoctor = async (req, res) => {
  
  const {
    name,
    email,
    password,
    speciality,
    degree,
    experience,
    about,
    fees,
    available,
  } = req.body;
  const imageFile = req.file;
  try {
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees 
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid Email",
      });
    }

    // Validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password with at least 8 characters",
      });
    }

  
    const hashedPass = await bcyrpt.hash(password, 10);

    const img =await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imgUrl = img.secure_url;

    const newDoctor = await doctorModel.create({
      name,
      email,
      password: hashedPass,
      speciality,
      image:imgUrl,
      degree,
      experience,
      about,
      fees,
      available,
      date:Date.now(),
    });
    return res.json({
      message: "Doctor created successfully",
      doctor: newDoctor,
    });
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: "Error creating doctor", error: error.message });
  }
};

export const allDoctors = async(req,res) => {
      
  try {
    const doctor = await doctorModel.find({}).select('-password')
    res.json({message:"all doctors fetched successfully for admin",doctor})
  } catch (error) {
    res.json({
      message:"error fetching all doctors for admin",
      error:error.message
    })
  }
}

//api to get all the appointments for admin

export const appointmentsAdmin =async (req,res) =>{
  try {
    const appointments= await appointmentModel.find({})
    res.json({message:"all appointments fetched for admin",appointments})
  } catch (error) {
    res.json({
      message:"error fetching appointments for admin",
      error:error.message
    })
  }
}

//cancel appointments 

export const appointmentCancel = async(req,res) =>{
  
    try {
  const {appointmentId} = req.body;
    const appointment  = await appointmentModel.findById(appointmentId);

    if(appointment.cancelled)return res.json({message:"appointment already cancelled"})

      await appointmentModel.findByIdAndUpdate(appointmentId,{
        cancelled:true
      })


      const {docId,slotDate,slotTime} = appointment;
      const docData = await doctorModel.findById(docId)
      let slots_booked = docData.slots_booked;

      if(slots_booked[slotDate]){
        slots_booked[slotDate] = slots_booked[slotDate].filter(
          (slot) => slot !== slotTime
        )
      }

      await doctorModel.findByIdAndUpdate(docId,{slots_booked});

      res.json("appointment cancelled by admin");
  } catch (error) {
    res.json({
      message:"appointment cancelled failed by the admin",
      error:error.message
    })
  }
}

export const adminDashBoard =async (req,res)=>{
  try {
    const doc = await doctorModel.find({});
    const user = await userModel.find({});
    const appointment = await appointmentModel.find({});

    const dashData = {
      doctors :doc.length,
      patients: user.length,
      appointments:appointment.length,
      latestAppointments:appointment.reverse().slice(0,5)
    }

    res.json({
      message:"dash data fetched successful",
      dashboard:dashData,
      user
    })
  } catch (error) {
    res.json({
      message:"error fetchinf dashdata",
      error:error.message
    })
  }
}

export const changeAvailabilityAdmin = async (req, res) => {
  try {
    const {docId} = req.body;
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