import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ErrorHandler from "../middlewares/Error.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let success = false;
    let user = await User.findOne({ email: email });
    if (user) {
      return next(new ErrorHandler("Email Already Registerd", 400));
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    success = true;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    success = true;
    res
      .status(201)
      .cookie("token", token,)
      .json({ success, token, msg: `welcome  ${user.name}` });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email: email });

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token)
      .json({ success: true, token, msg: `welcome back ${user.name}` });
  } catch (error) {
    next(error);
  }
};
export const myProfie = async (req, res, next) => {
  try {
    const userId = req.user._id;
    console.log(req.cookies)
    console.log(userId);

    const user = await User.findById(userId).select(["-password"]);
    res.status(200).json({
      success: "true",
      user,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select(["-password"]);
    res.status(200).json({
      success: "true",
      users,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) return next(new ErrorHandler("user not found", 404));
    await user.deleteOne();
    res.status(200).json({ success: true, msg: " User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
export const logOut = async (req, res) => {
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
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword, confPassword } = req.body;
    const id = req.user._id;

    if (!id) {
      return next(
        new ErrorHandler("Please Login First to Change Password ", 401)
      );
    }
    if (newPassword !== confPassword) {
      return next(new ErrorHandler("Confirm Password Does not Match ", 400));
    }

    if (oldPassword === newPassword)
      throw new ErrorHandler(
        "New Password And Old Password Can't be same ",
        400
      );

    const user = await User.findById(id);
    if (!user) throw new ErrorHandler("User Not Found ", 401);
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) throw new ErrorHandler("Old Password is Wrong ", 401);
    // console.log(passwordMatch)
    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();
    return res
      .status(200)
      .json({ success: true, msg: "Password Changed Successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const id = req.user._id;

    if (!id) {
      return next(
        new ErrorHandler("Please Login First to Change Password ", 401)
      );
    }

    // const user = await User.findById(id);
    // if(!user)throw new ErrorHandler("User Not Found ", 401);

    // if(name) user.name=name;
    // if(email) user.email=email;
    // await user.save();
    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          email,
        },
      },
      {
        new: true,
      }
    );
    return res
      .status(200)
      .json({ success: true, msg: "Profile Updated Successfully" });
  } catch (error) {
    next(error);
  }
};
