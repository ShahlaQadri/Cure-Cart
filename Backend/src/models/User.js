import mongoose from  'mongoose';

const userSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  role: {type:String ,
    enum:["user","admin"],default:"user"},
    phone: { type: String },

  gender: {type:String ,
    enum:["male","female","other"],},

  
},{
  timestamps:true
});

const User = mongoose.model("User", userSchema);
export default User;




