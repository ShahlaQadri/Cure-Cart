import express from "express";
import cors from "cors";
import { connectDb } from "./database.js";
import cookieParser from "cookie-parser";
import nodeCache from "node-cache";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/Error.js";
import Stripe from "stripe"

// importing routes
import userRoutes from "./routes/User.js";
import productRoutes from "./routes/Product.js";
import orderRoutes from "./routes/Order.js";
import PresciptionOrderRoutes from "./routes/PresciptionOrder.js";
import dashboardRoutes from "./routes/Dashboard.js";
import paymentRoutes from "./routes/Payments.js";
config({ path: ".env" });
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONG0_URI ;
const stripeKey = process.env.STRIPE_KEY ;
// console.log(stripeKEY)

connectDb(mongoURI);
export const stripe =new Stripe(stripeKey)
export const myCache = new nodeCache();

const app = express();

// middlewares
app.use(cors({ 
  origin: '*',
  credentials: true, 
}));
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    parameterLimit:10000,
    limit:"2mb"
  })
);

// using routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/presciption-Order", PresciptionOrderRoutes);
app.use("/api/v1/payment", paymentRoutes);

//Error Handler
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
