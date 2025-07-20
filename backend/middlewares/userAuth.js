import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyAccessToken = (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken.userId;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired refresh token",
      error:error.message
    });
  }
};

export const verifyUserRefreshToken =(req,res,next) =>{
  const token  = req.cookies.refreshtoken;
  if(!token)return res.json({message:"refresh token missing"})

  try {
    const decodedToken = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
    req.user = decodedToken.userId;
    next()
  } catch (error) {
    res.json({
      message:"invalid or expired refresh token",
      error:error.message
    })
  }
}