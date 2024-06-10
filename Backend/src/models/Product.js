import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },

  description: { type: String, required: true },

  category: { type: String, required: true },

  photo: { type: String, required: true },

  price: { type: Number, required: true },

  stock: { type: Number, required: true },
  
  discount: { type: Number,default:0 },
  
},{timestamps:true});

const Product = mongoose.model("Product", productSchema);
export default Product;
