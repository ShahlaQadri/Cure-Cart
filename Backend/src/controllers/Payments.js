import {stripe} from '../index.js'
export const createPaymentIntent = async (req, res, next) => {
   try {
    const { amount } = req.body;
  
    if (!amount) return next(new ErrorHandler("Please enter amount", 400));
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "inr",
    });
  
    return res.status(201).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
   } catch (error) {
    throw(error)
   }
  };