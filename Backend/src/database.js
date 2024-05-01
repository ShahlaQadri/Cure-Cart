import mongoose from "mongoose";
export const connectDb = (mongoURI) => {
  mongoose
    .connect(mongoURI, {
      dbName: "curecart",
    })
    .then(() => {
      console.log("database connected");
    });
};


