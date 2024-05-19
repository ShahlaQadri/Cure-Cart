import React from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
function Payment() {
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
          <h2 className="text-3xl font-semibold mb-10">Card Details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4">
              <label
                for="card"
                className="block text-gray-700 font-semibold mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card"
                name="card"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                for="expiry"
                className="block text-gray-700 font-semibold mb-2"
              >
                Expiration Date
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                for="cvv"
                className="block text-gray-700 font-semibold mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-[#2278b1] hover:bg-[#2787c7] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
