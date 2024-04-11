import express from "express";
import  cors from"cors";
import { connectDb } from "./database.js";
import userRoutes from './routes/User.js';
import cookieParser from "cookie-parser";
import {errorMiddleware } from "./middlewares/error.js";

const app = express();
connectDb();

// middlewares
app.use(cors());
app.use(cookieParser())
app.use(express.json());



// using routes
app.use("/api/v1/users", userRoutes);
app.get("/",(req,res)=>{
    res.send('hello mai salman hu')
})


//Error Handler
app.use(errorMiddleware)

app.listen(3000);