// src/NotFoundPage.js
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center pt-16 min-h-screen bg-zinc-100/95  px-6">
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">OOOPS! PAGE NOT FOUND.</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-0">
          This page doesn’t exist or was removed!
          <br /> We suggest you return back to home page.
        </p>
      </div>

      
      <div className="flex justify-center items-center mb-8 mix-blend-normal ">
        <img src="../../pictures/not found.png" alt="404 Illustration" className="w-full max-w-[600px] " />
      </div>

       
        <Link to={"/"} className="text-sm flex gap-2 text-[#0071BC] items-center md:text-base font-semibold  hover:text-gray-600 transition"><FaHome/> Go Back To Home</Link>
       
     
    </div>
  );
};

export default NotFoundPage;
