import express from "express"
import { bookAppointment, cancelAppointment, getAppointments, getProfile, loginUser, newAccessToken, registerUser, updateUser } from "../controllers/userController.js";
import { verifyAccessToken, verifyUserRefreshToken } from "../middlewares/userAuth.js";
import { upload } from "../middlewares/multer.js";
const userRouter = express.Router()

//register & login routes
userRouter.post("/signup",registerUser)
userRouter.post("/signin",loginUser)
userRouter.get("/refresh",verifyUserRefreshToken,newAccessToken)

//get & update userProfilee
userRouter.get("/get-profile",verifyAccessToken,getProfile)
userRouter.post("/update-profile",upload.single("image"),verifyAccessToken,updateUser)

//Book appointment
userRouter.post("/book-appointment",verifyAccessToken,bookAppointment)

//to get all user appointments

userRouter.get("/all-appointments",verifyAccessToken,getAppointments)

//to cancel appointments
userRouter.post("/cancel-appointment",verifyAccessToken,cancelAppointment)

export default userRouter;