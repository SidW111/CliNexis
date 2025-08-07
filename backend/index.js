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

const allowedOrigins = [
  "https://clinexis-admin.onrender.com",
  "http://localhost:5173",
  "https://clinexis-fe.onrender.com"
]

app.use(cors({
  origin: function(origin,callback) {
    if(!origin || origin.includes(allowedOrigins)){
      callback(null,true)
    }else{
      callback(new Error("not allowed by the cors"))
    }
  },
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
