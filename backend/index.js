import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/mongoDB.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import { connectCloudinary } from "./config/cloudinary.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

dotenv.config();
const app = express();
connectDB()
connectCloudinary()
app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(cookieParser())

//API ENDPOINTS
app.use("/api/admin",adminRouter)
app.use("/api/user",userRouter)
app.use("/api/doctor",doctorRouter)


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT)