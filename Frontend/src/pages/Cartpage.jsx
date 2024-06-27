
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
          {cartItems.length>0 ? <div>
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
          <main className="left w-full   ml-0 md:ml-10 h-[35vh] md:h-[60vh] overflow-auto mt-2 md:mt-4 space-y-3 md:space-y-2">
            {cartItems?.map((i) => (
              <div
                key={i.productId}
                className="product bg-zinc-50/95 flex   rounded-md shadow-sm border-2 justify-center items-center"
              >
                <div className="img-div w-fit md:w-[15%]">
                  <img
                    className="h-12 w-10 p-1 md:h-24 md:w-20  md:p-3 md:ml-6"
                    src={`http://localhost:3000/${i.photo}`}
                    alt=""
                  />
                </div>

                <div className="detail-div w-[55%] bg-zinc-50/95 ml-2">
                  <p className="text-xs md:text-sm  md:font-semibold  p-1">
                    {i.name}
                  </p>
                  <p className="font-bold text-xs p-1">₹{Math.round(i.price)}</p>
                </div>

                <div className="quantity-div w-fit md:w-[15%] text-center">
                  <button onClick={() => decrementHandler(i)} className="bg-gray-200 px-[3px] py-[1px] md:px-[6px] md:py-[2px] text-sm font-bold  rounded-sm">
                    -
                  </button>
                  <span className=" p-1 mx-1 md:mx-2 font-semibold text-xs">
                    {i.quantity}
                  </span>
                  <button onClick={() => incrementHandler(i)}className="bg-gray-200 px-[3px] py-[1px] md:px-[6px] md:py-[2px] font-bold  rounded-sm">
                    +
                  </button>
                </div>

                <button onClick={() => removeHandler(i.productId)} className="delete w-[15%] hover:text-red-700">
                  <MdDelete className="text-xl md:text-2xl ml-6" />
                </button>
              </div>
            ))}
          </main>
          </div> :<div className="mt-44 ml-20">sorry Cart is Empty</div>}
        </div>

        <aside className="right w-full md:mt-5 md:ml-10  md:w-[35%] h-[500px]  rounded-lg">
          <div className="details p-2 md:p-6 mt-[50px] md:mt-[80px] ml-16">
            <h1 className=" flex gap-2 items-center font-extralight mb-2 md:mb-5">
              <img
                src="../../pictures/discount.png"
                alt="Payments"
                width={"30px"}
              />
              PAYMENT DETAILS
            </h1>
            <div className="font-thin text-md flex flex-col gap-2 md:gap-3 text-zinc-500">
              <p>Subtotal : ₹{Math.round(subtotal)}</p>
              <p>Shipping Charges : ₹{shippingCharges}</p>
              <p>Tax : ₹{tax}</p>
              <p>
                Discount : <span className="text-red-500">₹{discount}</span>
              </p>
              <p className="text-md font-black text-green-400/65">
                Total : ₹{Math.round(total)}
              </p>
            </div>

            <div className="mt-3 md:mt-10 w-full">
              <input
                type="text"
                placeholder={` Coupon code`}
                className="border w-[80%] border-black py-1 px-1 md:py-2 md:px-2"
              />
            </div>
            <div className="mt-7">
              {" "}
              <Link
                to="/checkout"
                className="w-[80%] px-[30px] md:px-[47px] py-3   bg-[#0071BC] hover:bg-[#2787c7]  text-white text-md space font-semibold"
              >
                Add Delivery Details
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}