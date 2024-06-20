import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    shippingInfo: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      landmark: { type: String, required: true },
      phone: { type: Number, required: true },
      pincode: { type: Number, required: true },
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: [
      { name:String,
        price:Number,
        photo:String,
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number ,required:true},
      }
    ],
    subtotal: {
      type: Number,
      required: true,
    },
    shippingCharge: {
      type: Number,
      
    },
    tax: {
      type: Number,
      
    },
    discount: {
      type: Number,
      
    },
    total: {
      type: Number,
      required: true,
    },
    status:{
        type:String,
        emun:['Processing',"Shipped","Delivered"],
        default:"Processing"
    },

  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
