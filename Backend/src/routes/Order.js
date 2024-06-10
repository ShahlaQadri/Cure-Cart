import express from "express";
import { IsAuthenticated, adminOnly } from "../middlewares/Auth.js";
import {
  allOrders,
  deleteOrder,
  getOrderDetails,
  myOrders,
  newOrder,
  processOrder,
} from "../controllers/Order.js";

const router = express.Router();

// order routes
router.post("/new", IsAuthenticated, newOrder);
router.get("/myorders", IsAuthenticated, myOrders);
router.get("/allorders", adminOnly, allOrders);
router
  .route("/:id")
  .get(getOrderDetails)
  .put(adminOnly, processOrder)
  .delete(adminOnly, deleteOrder);

export default router;
