import express from "express"
import { appointmentCancel, appointmentComplete, appointmentsDoctor, changeAvailability, doctorList, doctorLogin, getDoctorProfile, newDoctorAccessToken, updateDoctorProfile } from "../controllers/doctorController.js";
import { verifyDoctorAccessToken, verifyDoctorRefreshToken } from "../middlewares/doctorAuth.js";

const doctorRouter = express.Router();

//to login as doctor
doctorRouter.post("/login",doctorLogin);
doctorRouter.post("/refresh",verifyDoctorRefreshToken,newDoctorAccessToken);

//api to change availability
doctorRouter.post("/change-availability",verifyDoctorAccessToken,changeAvailability)
//api to get all dr list
doctorRouter.get("/get-doctor",doctorList)

//apppoinments of dr
doctorRouter.get("/get-appointments",verifyDoctorAccessToken,appointmentsDoctor);
//api to get dr  profile
doctorRouter.get("/get-profile",verifyDoctorAccessToken,getDoctorProfile);
//api to update dr profile
doctorRouter.post("/update-doctor",verifyDoctorAccessToken,updateDoctorProfile);

//api to cancel appointment 
doctorRouter.post('/cancel-appointment',verifyDoctorAccessToken,appointmentCancel);
//api to mark complete
doctorRouter.post('/complete-appointment',verifyDoctorAccessToken,appointmentComplete)

export default doctorRouter