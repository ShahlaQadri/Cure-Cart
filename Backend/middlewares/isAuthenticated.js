import jwt from  "jsonwebtoken";
import ErrorHandler from "./error.js";

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



