import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyDoctorAccessToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.json({
      message: "doctor access token missing",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken)
    req.doctor = decodedToken.docId;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({
        message: "Invalid or expired doctor access token",
        error: error.messages,
      });
  }
};

export const verifyDoctorRefreshToken = (req, res, next) => {
  const token = req.cookies?.refreshTokenDoctor;

  if (!token)
    return res.json({ message: "invalid refresh token doctor or missing" });

  try {
    const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    res.doctor = decodedToken.docId;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired refresh token",
      error: error.message,
    });
  }
};
