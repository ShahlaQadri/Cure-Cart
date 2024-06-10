import { rm } from "fs";
import ErrorHandler from "../middlewares/Error.js";
import PrescriptionOrder from "../models/PresciptionOrders.js";

export const orderViaPresciption = async (req, res, next) => {
  try {
    const { shippingInfo } = req.body;
    let ShippingInfo = JSON.parse(shippingInfo);
    console.log(ShippingInfo.name);
    const photo = req.file;
    const user = req.user._id;
    if (!photo) return next(new ErrorHandler("No image provided", 400));
    if (!shippingInfo) {
      rm(photo.path, () => {
        console.log("deleted");
      });
      return next(new ErrorHandler("Enter All Fields", 400));
    }

    const order = await PrescriptionOrder.create({
      shippingInfo: JSON.parse(shippingInfo),
      presciption: photo?.path,
      user,
    });
    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPresciptionOrders = async (req, res, next) => {
  try {
    const allOrders = await PrescriptionOrder.find({}).populate(
      "user",
      "_id name email"
    );

    res.status(201).json({
      success: true,
      allOrders,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyPresciptionOrders = async (req, res, next) => {
  try {
    const id = req.user._id;
    const orders = await PrescriptionOrder.findOne({ user: id });
    if (!orders) return next(new ErrorHandler("No Presciptions Orders", 404));

    res.status(201).json({
      success: true,
      orders,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyPastPresciption = async (req, res, next) => {
  try {
    const id = req.user._id;
    const presciptions = await PrescriptionOrder.find({ user: id }).select(
      "presciption"
    );
    if (!presciptions) {
      return next(new ErrorHandler("No Past Presciptions", 404));
    }

    res.status(201).json({
      success: true,
      presciptions,
    });
  } catch (error) {
    next(error);
  }
};

export const getPresciptionOrderDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orderDetails = await PrescriptionOrder.findById(id).populate(
      "user",
      "name email"
    );
    if (!orderDetails) return next(new ErrorHandler("Order  not found", 404));

    res.status(201).json({
      success: true,
      orderDetails,
    });
  } catch (error) {
    next(error);
  }
};

export const processStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    let order = await PrescriptionOrder.findById(id);
    if (!order) return next(new ErrorHandler("No Order found", 401));
    console.log(order.status);
    if (order.status === "Delivered")
      return next(new ErrorHandler("This Order is already Delivered", 403));
    if (order.status === "Processing") order.status = "Shipped";
    else if (order.status === "Shipped") order.shipped = "Delivered";
    else order.status = "Delivered";
    await order.save();

    return res
      .status(200)
      .json({
        success: true,
        msg: `Order Processed Successfullly -${order.status} `,
      });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
};
