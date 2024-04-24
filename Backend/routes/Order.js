import express from "express";
import { IsAuthenticated, adminOnly } from "../middlewares/isAuthenticated.js";
import { newOrder } from "../controllers/Order.js";
const router = express.Router();

// user routes
router.get("/new", newOrder);


export default router;
