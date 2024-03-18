import React from "react";

function Herosection() {
  return (
    <div className="slider rounded-3xl flex flex-col-reverse md:flex-row bg-[#A8DF8E] overflow-hidden">
      <div className="left flex flex-col justify-center items-center md:items-baseline px-12 py-12 space-y-5 md:ml-[120px]">
        <h1 className="text-2xl font-medium md:text-5xl mx-5">Beat the Diabetes</h1>
        <p className="3/4 mx-4 text-center md:text-center md:text-2xl">
          Get up to 18% OFF on Diabetes Care{" "}
        </p>
        <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5">
          Shop Now
        </button>
      </div>
      <div className="right">
        <img
          className="w-[32rem] md:w-[36rem] md:mx-8"
          src="pictures/doc.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Herosection;
