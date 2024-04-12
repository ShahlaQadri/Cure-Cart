import express from  'express';
import {getAllUsers, logOut, login, myProfie, register} from "../controllers/User.js"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js";
const router = express.Router();


// user routes
router.post("/new", register);
router.post("/login",login )
router.get("/allusers",getAllUsers)
router.get("/myprofile", IsAuthenticated,myProfie);
router.get("/logout", IsAuthenticated, logOut);


export default  router;
