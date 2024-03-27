// import {User} from "../models/User.js"
// export const newUser = async(req,res,next)=>{

//   try {
//     const { name, email, password } = req.body;
//     let success = false;
//     let user = await User.findOne({ email: email });
//     if (user) {
//       return res
//         .status(400)
//         .json({ success, msg: "Email is already registered" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 12);
//     user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     success = true;
//     const token = jwt.sign({ _id: user._id }, "hello");
//     success = true;
//     res.json({ success, token, msg: `welcome  ${user.name}` }).status(200);
//   } catch (error) {
//     console.log(error);
//   }
// }