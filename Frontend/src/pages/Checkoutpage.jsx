
import { Link, useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Checkoutpage() {
  const navigate = useNavigate()
  const {cartItems } = useSelector((state)=>state.cartReducer)
  useEffect(() => {
    if(cartItems.length<=0) return navigate("/cart")
  }, [cartItems])
  
  return (
    <div className=" w-[90%] mx-auto ">
      <div className="relative">
        <Link
          to="/cart"
          className="absolute top-3 left-6 md:left-10 bg-zinc-50 hover:bg-[#2787c7]  rounded-full shadow-lg p-2 md:p-4"
        >
          <TiArrowBack className="text-xl md:text-3xl" />
        </Link>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 mb-20 ">
        <div className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Cure Cart"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="curecart@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-semibold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="123 Street, City"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zipcode"
                className="block text-gray-700 font-semibold mb-2"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                placeholder="12345"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="landmark"
                className="block text-gray-700 font-semibold mb-2"
              >
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                placeholder="Landmark"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Mobile"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mobile Number
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="0123456789"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <div className="mt-8 flex mx-auto w-[full]">
            <Link
              to="/payment"
              className="flex mx-auto mb-6 w-[1/2] bg-[#2278b1] hover:bg-[#2787c7] text-white font-semibold py-2 px-10 rounded-lg focus:outline-none "
            >
              Save and Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
