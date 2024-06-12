import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },

  

  category: { type: String, required: true },

  photo: { type: String, required: true },

  price: { type: Number, required: true },

  stock: { type: Number, required: true },
  
  discount: { type: Number,default:0 },
  about:{
    type: String, required: true 
  },
  used_for:{
    type: String, required: true 
  },
  uses:{
    type: String, required: true 
  },
  directions:{type: String, required: true },
  expiry_date:{
    type: String, required: true 
  }
  
},{timestamps:true});

const Product = mongoose.model("Product", productSchema);
export default Product;
