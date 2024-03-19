import React from "react";
import { BsHandbagFill } from "react-icons/bs";

export default function Productcard() {
  return (
    <div className="  h-[360px] overflow-hidden  rounded-3xl flex flex-col items-center justify-center shadow-xl">
      <div className="img-container  flex items-center justify-center w-full h-[68%] bg-[#F1F5F9]">
        <img src="pictures/div1.png" alt="" className="w-28  h-40" />
      </div>

      <div className="h-[16%] md:h-[37%] md:flex md:flex-col  md:w-full  rounded-3xl md:overflow-hidden bg-white md:-mt-4 md:items-center md:justify-center">
        <p className=" md:text-center md:font-semibold md:mt-4">HK Vitals</p>
        <p className="hidden sm:block md:visible md:text-center md:text-zinc-700 md:text-sm">
          Multimineral Tablets...
        </p>
        <div className=" flex w-[50%] px-2 mt-1 md:px-5 md:mt-5 md:mb-5 justify-between items-center md:w-full">
          <span className="text-sm">$600</span>
          <button className=" w-5 h-7 mt-1 md:w-10 md:h-9 flex rounded-lg p-1 md:mt-2">
            <BsHandbagFill className="text-sm md:text-xl " />
          </button>
        </div>
      </div>
    </div>
  );
}
