import mongoose from "mongoose"

const prseciptionOrderSchema = new mongoose.Schema(
  {
    presciption: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    shippingInfo: {
      type:Object,
      name: { type: String, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      landmark: { type: String, required: true },
      phone: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    status: {
      type: String,
      emun: ["Processing", "Shipped", "Delivered"],
      default: "Processing",
    },
  },
  {
    timestamps: true,
  }
);

const PrescriptionOrder = mongoose.model(
  "PrescriptionOrder",
  prseciptionOrderSchema
);
export default PrescriptionOrder;