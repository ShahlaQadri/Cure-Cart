
import { MdDelete } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, calculateTotalPrice, removeCartItem } from "../redux/reducers/cartReducer";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function Cartpage() {
  // const arr=[1,2,3,4,5,6,7]
   const {cartItems, subtotal,tax,total,shippingCharges,discount } = useSelector((state)=>state.cartReducer)
  
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const incrementHandler = (cartItem) => {
    if (cartItem.quantity >= cartItem.stock) return toast.error(`Only ${cartItem.stock} Items In Stock`);

    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
  };
  const decrementHandler = (cartItem) => {
    if (cartItem.quantity <= 1) return;

    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
  };
  const removeHandler = (productId) => {
    console.log("deleted",productId)
    dispatch(removeCartItem(productId));
  };

  useEffect(() => {
    dispatch(calculateTotalPrice())
  }, [cartItems])


  
  if(cartItems.length===0) return  (
    <div className="flex flex-col items-center pt-32 min-h-screen bg-gray-50/95 rounded-2xl p-4">
      {/* Content Container */}
      <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Nothing in Here!</h1>
          <p className="text-gray-600 mb-4">Your cart is currently empty.</p>
          <button onClick={()=>{navigate("/")}} className="bg-[#2485C5] text-white py-2 px-4 rounded hover:bg-[#2277af]">
            Continue Shopping
          </button>
        </div>

        {/* Illustration */}
        <div className="flex-shrink-0">
          <img 
            src="../../pictures/empty cart.webp" 
            alt="Empty Cart Illustration" 
            className="w-full max-w-xs md:max-w-md mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );



  return (
    <div className="mx-4">
      <div className="relative w-full bg-green-500">
        <Link
          to="/"
          className="absolute top-2 md:top-3 left-2 md:left-20 bg-gray-50 rounded-full shadow-lg p-2 md:p-4"
        >
          <TiArrowBack className="text-xl md:text-3xl" />
        </Link>
      </div>
      <div className="flex flex-col justify-evenly md:flex-row h-fit md:h-[68vh]  mb-20 pb-10  rounded-lg  w-full md:w-[90%] mx-2 md:mx-auto">
        <div className="w-full md:w-[50%] ">
        <div>
            <div className="cart-heading flex items-center gap-2 ml-2  md:ml-20 mt-12 ">
            <h2 className="text-xl md:text-2xl inline-block font-semibold   ">
              {cartItems.length} items in{" "}
            </h2>
            <img
              src="../../pictures/shopping-bag.png"
              alt="Return"
              width={"25px md:30px"}
            />
          </div>
          <main className="left w-full ml-0 md:ml-10 h-[35vh] md:h-[60vh] overflow-auto mt-2 md:mt-4 space-y-3 md:space-y-2">
  {cartItems?.map((item) => (
    <div key={item.productId} className="product bg-zinc-50/95 flex rounded-md shadow-sm border-2 justify-between items-center p-2 md:p-4">
      <div className="img-div w-[15%] md:w-[20%]">
        <img
          className="h-12 w-10 md:h-24 md:w-20 object-cover rounded mix-blend-multiply"
          src={`http://localhost:3000/${item.photo}`}
          alt={item.name}
        />
      </div>

      <div className="detail-div w-[55%] md:w-[60%] ml-4 md:ml-6">
        <p className="text-sm md:text-base font-semibold mb-1">{item.name}</p>
        <p className="font-bold text-sm">₹{Math.round(item.price)}</p>
      </div>

      <div className="quantity-div flex items-center">
        <button onClick={() => decrementHandler(item)} className="bg-gray-200 text-sm font-bold px-2 py-1 rounded">
          -
        </button>
        <span className="px-3 py-1 font-semibold text-sm">{item.quantity}</span>
        <button onClick={() => incrementHandler(item)} className="bg-gray-200 text-sm font-bold px-2 py-1 rounded">
          +
        </button>
      </div>

      <button onClick={() => removeHandler(item.productId)} className="delete ml-4 md:ml-10">
        <MdDelete className="text-xl md:text-2xl text-red-600" />
      </button>
    </div>
  ))}
</main>


          </div> 
        </div>

        <aside className="right w-full md:mt-5  flex justify-center md:ml-10 md:w-[35%] h-auto rounded-lg ">
  <div className="details p-4 md:p-0 mt-5 md:mt-[80px] w-full md:w-[60%] ml-0">
    <h1 className="flex gap-2 items-start border-dashed border-b-2 pb-2 md:pb-4 w-full font-medium text-lg mb-4 md:mb-6 text-gray-800">
      <img
        src="../../pictures/discount.png"
        alt="Payments"
        width="30px"
      />
      Payment Details
    </h1>
    <div className="font-normal text-md flex flex-col gap-[5px] md:gap-3  text-gray-600">
      <p className="flex justify-between">Subtotal: <span className="font-semibold">₹{Math.round(subtotal)}</span></p>
      <p className="flex justify-between">Shipping Charges: <span className="font-semibold">₹{shippingCharges}</span></p>
      <p className="flex justify-between">Tax: <span className="font-semibold">₹{tax}</span></p>
      <p className="flex justify-between">
        Discount: <span className="text-red-500 font-semibold">₹{discount}</span>
      </p>
      <p className="text-lg pt-2 border-dashed border-t-2 font-extrabold flex justify-between text-black md:mt-2">
        Total: <span>₹{Math.round(total)}</span>
      </p>
    </div>

    <div className="mt-4 md:mt-4 w-full">
      <input
        type="text"
        placeholder="Coupon code"
        className="border w-full md:w-[100%] border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mt-6 md:mt-6">
      <button
        onClick={() => navigate("/checkout")}
        className="w-full md:w-[100%] px-4 py-3 bg-[#2485C5] hover:bg-[#1e6797] text-white text-md font-semibold rounded-md transition-colors duration-200"
      >
        Add Delivery Details
      </button>
    </div>
  </div>
</aside>

      </div>
    </div>
  );
}