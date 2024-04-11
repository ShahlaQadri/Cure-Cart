import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ErrorHandler from "../middlewares/error.js";


export const register = async (req, res,next) => {
    try {
      const { name, email, password } = req.body;
      let success = false;
      let user = await User.findOne({ email: email });
      if (user) { return next(new ErrorHandler("Email Already Registerd",400)) }

      const hashedPassword = await bcrypt.hash(password, 12);
      user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      success = true;
      const token = jwt.sign({ _id: user._id }, "hello");
      success = true;
      res
        .status(201)
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 15 * 24 * 60 * 60 * 1000,
        })
        .json({ success, token, msg: `welcome  ${user.name}` });
    } catch (error) {
      next(error)
    }
  };

export const  login = async (req, res,next) => {
  try {
    const { email, password } = req.body;
    let success = false;
    let user = await User.findOne({ email: email });

    if (!user) { return next(new ErrorHandler("Invalid Email or Password",401)) }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { return next(new ErrorHandler("Invalid Email or Password",401)) }

    const token = jwt.sign({ _id: user._id }, "hello");
    success = true;
    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure:true,
        maxAge: 15*24*60*60*1000,
      })
      .json({ success, token, msg: `welcome back ${user.name}` });
  } catch (error) {
    next(error)
  }
};
export const myProfie =async (req, res,next) => {
       try {
         const userId = req.user._id;
         console.log(userId);

         const user = await User.findById(userId).select(["-password"]);
         res.status(200).json({
           success: "true",
           user,
         });
       } catch (error) {
         next(error)
       }
 };

export const getAllUsers  =async (req,res,next)=>{
  try {
    
  
    const users = await User.find({}).select(["-password"]);
     res.status(200).json({
       success: "true",
       users,
     });
    }
      catch (error) {
         next(error)
       }
      


}

export const logOut  =async (req,res)=>{
  try {
    if (!req.cookies.token) {
      return res
        .status(400)
        .json({ success: "false", msg: "You are already logged out" });
    } else {
      res
        .cookie("token", "", {
          maxAge: 0,
          httpOnly: true,
        })
        .json({
          success: true,
          msg: "Logged Out Successfully",
        });
    }
  } 
    catch (error) {
         next(error)
       }

  
}

