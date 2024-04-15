import jwt from  "jsonwebtoken";
import ErrorHandler from "./error.js";
import User from "../models/User.js";

export const IsAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) { return next(new ErrorHandler("Login First", 401)) }

    const data = jwt.verify(token, "hello");
    req.user = data;
    next();
  } catch (error) {
   next(error)
  }
};


export const adminOnly = async (req,res,next)=>{
  try {
    const { id } = req.query;
    console.log(id);
    if (!id) {
      return next(new ErrorHandler("Login First", 401));
    }
    const user = await User.findById(id);

    if (!user) {
      return next(new ErrorHandler("Not Valid User", 401));
    }
    if (user.role !== "admin") {
      return next(new ErrorHandler("You Aren't Admin", 401));
    }
    next();
    
  } catch (error) {
    next(error)
  }
}


