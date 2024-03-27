const jwt = require("jsonwebtoken");

const IsAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    console.log("token  : " + token);
    if (!token) {
      return res.status(401).send({ msg: "You are not  authenticated" });
    }

    const data = jwt.verify(token, "hello");
    console.log(data)
    req.user = data;
    next();
  } catch (error) {
    return res.status(500).json({ msg: "Your auth-token is wrong" });
  }
};

module.exports = IsAuthenticated;
