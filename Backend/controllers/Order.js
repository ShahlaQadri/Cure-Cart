import { myCache } from "../index.js";
import ErrorHandler from "../middlewares/Error.js";
import Order from "../models/Order.js";
import { invalidateCache, reduceStock } from "../utils/features.js";

export const newOrder = async (req, res, next) => {
  try {
    const {
      shippingInfo,
      orderItems,
      subtotal,
      total,
      discount,
      tax,
      shippingCharges,
      user,
    } = req.body;

    if (!shippingInfo || !orderItems || !user || !subtotal || !total) {
      return next(new ErrorHandler("Enter all Fields", 401));
    }
    const order = await Order.create({
      shippingInfo,
      orderItems,
      subtotal,
      total,
      discount: discount ? discount : 0,
      tax: tax ? tax : 0,
      shippingCharges: shippingCharges ? shippingCharges : 0,
      user,
    });
    reduceStock(orderItems);
    await invalidateCache({
      product: true,
      order: true,
      admin: true,
      userId: user,
    });
    res
      .status(201)
      .json({ message: " Order placed  Successfully", success: true, order });
  } catch (error) {
    next(error);
  }
};

export const myOrders = async (req, res, next) => {
  try {
    let orders;
    const id = req.user._id;
    if (myCache.has(`myorders-${id}`)) {
      orders = JSON.parse(myCache.get(`myorders-${id}`));
    } else {
      orders = await Order.find({ user: id });
      myCache.set(`myorders-${id}`, JSON.stringify(orders));
    }

    return res.status(200).json({ success: true, orders });
  } catch (error) {
    next(error);
  }
};

export const allOrders = async (req, res, next) => {
  try {
    const { id } = req.query;
    let orders;
    if (myCache.has(`all-orders`)) {
      orders = JSON.parse(myCache.get(`all-orders`));
    } else {
      orders = await Order.find({}).populate("user", "name");
      console.log(id);
      myCache.set(`all-orders`, JSON.stringify(orders));
    }

    return res.status(200).json({ success: true, orders });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
};

export const getOrderDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    let order;

    if (myCache.has(`order-${id}`)) {
      order = JSON.parse(myCache.get(`order-${id}`));
    } else {
      order = await Order.findById(id);
      if (!order) return next(new ErrorHandler("No Order found", 401));

      myCache.set(`order-${id}`, JSON.stringify(order));
    }

    return res.status(200).json({ success: true, order });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
};

export const processOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    let order;
    order = await Order.findById(id);
    if (!order) return next(new ErrorHandler("No Order found", 401));

    if (order.status === "Processing") order.status = "shipped";
    else if (order.status === "Shipped") order.shipped = "Delivered";
    else order.status = "Delivered";
    await order.save();
    await invalidateCache({
      product: false,
      order: true,
      admin: true,
      userId: order.user,
      orderId: order._id,
    });

    return res
      .status(200)
      .json({ success: true, msg: "Order Processed Successfullly", order });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    let order;
    order = await Order.findById(id);
    if (!order) return next(new ErrorHandler("No Order found", 401));
    await order.deleteOne();

    await invalidateCache({
      product: false,
      order: true,
      admin: true,
      userId: order.user,
      orderId: order._id,
    });

    return res
      .status(200)
      .json({ success: true, msg: "Order Deleted Successfully", order });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
};
