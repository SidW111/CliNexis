import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const adminAuth = (req, res,next) => {
  const atoken = req.headers.authorization?.split(" ")[1];

  if (!atoken) return res.json({ message: "no admin token found" });

  try {
    const decodedToken = jwt.verify(atoken, process.env.JWT_SECRET);
    if (!decodedToken.isAdmin)
      return res.json({ message: "not authorized admin" });
    req.admin = true
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Invalid or expired token", error: error.message });
  }
};
