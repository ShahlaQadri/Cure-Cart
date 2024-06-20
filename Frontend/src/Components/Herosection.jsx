import React from "react";

function Herosection() {
  return (
    <div className="slider rounded-3xl flex flex-col-reverse md:flex-row text-[#3E5C75] bg-[#B0E5F2] overflow-hidden">
      <div className="left flex flex-col justify-center items-center md:items-baseline px-2 py-4 md:px-12 md:py-12 space-y-2 md:space-y-5 md:ml-[120px]">
         <p className="3/4 mx-4 text-center md:text-center md:text-xl ">
          We work to take care of your health and body{" "}
        </p>
        <h1 className="text-2xl font-medium md:text-5xl">
          True Healthcare
        </h1>
        <h1 className="text-2xl font-medium md:text-5xl">
          For your Family
        </h1>
        {/* <p className="3/4 mx-4 text-center md:text-center md:text-2xl">
          Get up to 18% OFF on Diabetes Care{" "}
        </p> */}
        <button className="text-white bg-[#0071BC] px-4 py-1 my-3 md:px-10 md:py-2 md:my-6 font-bold mx-5">
          Shop Now
        </button>
      </div>
      <div className="right">
        <img
          className="w-[16rem] md:w-[36rem] mx-10 md:mx-8"
          src="pictures/doctornew.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Herosection;
