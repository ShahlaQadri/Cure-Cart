const mongoose = require("mongoose");
const connectDb = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/curecart").then(()=>{
    console.log('database connected')
  });
};

module.exports = connectDb;
