import express from "express";
import  cors from"cors";
import { connectDb } from "./database.js";
import cookieParser from "cookie-parser";
import {errorMiddleware } from "./middlewares/error.js";


// importing routes
import userRoutes from './routes/User.js';
import productRoutes from "./routes/Product.js";
const app = express();
connectDb();

// middlewares
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))



// using routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/product", productRoutes);



//Error Handler
app.use("/uploads",express.static("./uploads"));
app.use(errorMiddleware)

app.listen(3000);