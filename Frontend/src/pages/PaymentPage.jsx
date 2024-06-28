import {Elements, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useNewOrderMutation } from '../redux/api/ordersAPI';
import  {responseToste}  from '../utils/Features';
import { resetCart } from '../redux/reducers/cartReducer';
import { stripe_key } from '../main';

const CheckoutForm =() =>{
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const {
    shippingInfo,
    cartItems,
    subtotal,
    tax,
    discount,
    shippingCharges,
    total,
  } = useSelector((state) => state.cartReducer);

  const [isProcessing, setIsProcessing] = useState(false)

  const [newOrder] = useNewOrderMutation()


  const submitHandler =async (e)=>{
    e.preventDefault()
    console.log('first')
    if (!stripe || !elements) return;
    setIsProcessing(true);
    

    const orderData = {
      shippingInfo,
      orderItems: cartItems,
      subtotal,
      tax,
      discount,
      shippingCharges,
      total,
      user: user?._id,
    };
    
    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });
    console.log(error)
    if (error) {
      setIsProcessing(false);
      return toast.error(error.message || "Something Went Wrong");
    }

    if (paymentIntent.status === "succeeded") {
      console.log('order placed')
      const res = await newOrder(orderData);
      console.log("hay",res)
      dispatch(resetCart());
      responseToste(res, navigate, "/myorders");
    }
    setIsProcessing(false);

  }
  return(<div className=" w-[90%] mx-auto ">
      
      <div className="max-w-3xl mx-auto px-4 py-8 mb-20 ">
        <div className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-3xl font-semibold mb-10">Card Details</h2>
          {/* cardd */}
          <form onSubmit={submitHandler}>
            <PaymentElement/>
            <div className="mt-8">
            <button type='submit' className="bg-[#2278b1] hover:bg-[#2787c7] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
              {isProcessing?"Processing...":"PAY"}
            </button>
          </div>
            </form> 
          
        </div>
      </div>
    </div>
  )
}
const stripePromise = loadStripe(`${stripe_key}`);

function PaymentPage() {
  const location = useLocation();

  const clientSecret= location.state;

  if (!clientSecret) return <Navigate to={"/shipping"} />;
  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  };
  return (
    // <Payment />
    <Elements stripe={stripePromise} options={options} >
    <CheckoutForm />
  </Elements>
  )
}

export default PaymentPage