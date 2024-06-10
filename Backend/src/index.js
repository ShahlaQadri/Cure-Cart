import express from "express";
import cors from "cors";
import { connectDb } from "./database.js";
import cookieParser from "cookie-parser";
import nodeCache from "node-cache";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/Error.js";

// importing routes
import userRoutes from "./routes/User.js";
import productRoutes from "./routes/Product.js";
import orderRoutes from "./routes/Order.js";
import PresciptionOrderRoutes from "./routes/PresciptionOrder.js";
import dashboardRoutes from "./routes/Dashboard.js";
config({ path: ".env" });
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONG0_URI ;

connectDb(mongoURI);
export const myCache = new nodeCache();

const app = express();

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// using routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/presciption-Order", PresciptionOrderRoutes);

//Error Handler
app.use("/uploads", express.static("./uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
