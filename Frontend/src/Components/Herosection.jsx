// Herosection.js

import { Link } from "react-router-dom";
import { FaOpencart, FaShopify } from "react-icons/fa";

function Herosection() {
  return (
    <div className="relative flex flex-row bg-gradient-to-r from-[#B0E5F2] to-[#0071BC] text-[#3E5C75] rounded-3xl overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>
      
      {/* Left content */}
      <div className="w-full md:w-[60%] md:ml-0 ml-1 flex flex-col justify-center px-4 md:px-12 py-8 md:py-24 space-y-4 md:space-y-8 md:pl-[9rem] z-20">
        {/* Decorative elements */}
        <div className="absolute bg-gif2 top-10 left-10 md:top-14 md:left-20 h-[20px] w-[30px] md:h-[100px] md:w-[150px]"></div>
        <div className="absolute bg-gif2 bottom-20 right-10 md:bottom-20 md:right-[50%] h-[70px] w-[70px] md:h-[150px] md:w-[250px] z-[-1] "></div>
        
        {/* Main headings */}
        <div className="text-white">
          <h1 className="text-3xl md:text-6xl font-extrabold text-shadow-lg z-10">
            True Healthcare
          </h1>
          <h1 className="text-3xl md:text-6xl font-extrabold text-shadow-lg z-10">
            For your Family
          </h1>
          <p className="md:w-[70%] mt-3 text-sm md:text-base font-semibold z-10">
            Empowering your family with top-quality health services and products, right at your fingertips
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/productspage/medicines" className="flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-xs md:text-base py-2 px-4 md:py-3 md:px-6 shadow-lg transform hover:scale-105 transition duration-300">
            <FaShopify className="mr-1" /> <span>Shop Now</span>
          </Link>
          <Link to="/cart" className="flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-2xl font-extrabold py-2 px-2 md:py-3 md:px-3 shadow-lg transform hover:rotate-6 transition duration-300">
            <FaOpencart className="" />
          </Link>
        </div>
      </div>

      {/* Right side image */}
      <div className="hidden md:block w-[40%] md:mr-28">
        <img
          className="w-full h-full object-fill  rounded-lg"
          src="../../pictures/doctor_PNG16021.png"
          alt="Healthcare Professionals"
        />
      </div>
    </div>
  );
}

export default Herosection;
