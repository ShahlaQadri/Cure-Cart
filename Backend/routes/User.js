const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const IsAuthenticated = require("../middlewares/isAuthenticated.js");

// route for new user
router.post("/new", async (req, res) => {
  try {
    const {name, email, password } = req.body;
    let success = false;
    let user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({ success, msg: "Email is already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    success = true;
    const token = jwt.sign({ _id: user._id }, "hello");
    success = true;
    res.json({ success, token, msg: `welcome  ${user.name}` }).status(200);
  } catch (error) {
    console.log(error);
  }
});

// route for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let success = false;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ success, msg: "Enter valid credintials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success, msg: "Enter valid credintials" });
    }
    const token = jwt.sign({ _id: user._id }, "hello");
    success = true;
    res.json({ success, token, msg: `welcome back ${user.name}` });
  } catch (error) {
    console.log("Error in login");
    res.status(500).send("Error In Login");
  }
});
// route for login
router.get("/myuser",(req,res)=>{
    res.send("this is my user route")
})


// get user data
router.post("/mydetails", IsAuthenticated, async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId)
    
    const user = await User.findById(userId).select(["-password"]);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("user nahi milla");
  }
});
module.exports = router;
