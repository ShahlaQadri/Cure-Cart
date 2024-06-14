import express from "express";
import { IsAuthenticated,  } from "../middlewares/Auth.js";

import { createPaymentIntent } from "../controllers/Payments.js";

const router = express.Router();

// payment routes
router.post("/create",IsAuthenticated, createPaymentIntent);




export default router;
