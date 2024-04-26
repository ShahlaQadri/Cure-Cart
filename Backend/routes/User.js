import express from  'express';
import { changePassword, deleteUser, getAllUsers, logOut, login, myProfie, register, updateProfile} from "../controllers/User.js"
import { IsAuthenticated, adminOnly } from "../middlewares/isAuthenticated.js";
const router = express.Router();


// user routes
router.post("/new", register);
router.post("/login",login )
router.get("/allusers",adminOnly,getAllUsers)
router.get("/myprofile", IsAuthenticated,myProfie);
router.get("/logout", IsAuthenticated, logOut);
router.delete("/:id",adminOnly,deleteUser)
router.post("/changepassword",IsAuthenticated,changePassword)
router.post("/updateprofile",IsAuthenticated,updateProfile)


export default  router;
