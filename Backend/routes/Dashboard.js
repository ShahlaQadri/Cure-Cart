import express from "express";

import { IsAuthenticated, adminOnly } from "../middlewares/Auth.js";
import { getDashboardStats } from "../controllers/Dashboard.js";
const router = express.Router();

// dashboard routes
router.get("/stats", getDashboardStats);


export default router;
