import express from "express";
import { upload } from "../middlewares/multer.js";
import { adminAuth } from "../middlewares/adminAuth.js";
import {
  addDoctor,
  adminDashBoard,
  adminLogin,
  allDoctors,
  appointmentCancel,
  appointmentsAdmin,
  changeAvailabilityAdmin,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.post("/add-doctor", upload.single("image"), adminAuth, addDoctor);

//api to get all doctors for admin
adminRouter.get("/all-doctors", adminAuth, allDoctors);

//api to get all appointments for admin
adminRouter.get("/allappointment", adminAuth, appointmentsAdmin);

adminRouter.post("/available", adminAuth, changeAvailabilityAdmin);
//api to cancel appointment for admin

adminRouter.post("/cancel", adminAuth, appointmentCancel);

adminRouter.get("/dashboard", adminAuth, adminDashBoard);
export default adminRouter;
