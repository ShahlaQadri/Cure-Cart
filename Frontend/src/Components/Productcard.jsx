import React from "react";
import { BsHandbagFill } from "react-icons/bs";

export default function Productcard() {
  return (
    <div className="h-[215px]  md:h-[360px] md:overflow-hidden  rounded-xl flex flex-col items-center justify-center shadow-xl">
      <div className="img-container flex items-center justify-center w-[70%] h-[60%] md:w-full md:h-[68%] bg-slate-200">
        <img src="pictures/div1.png" alt="" className="w-20 h-32 md:w-28 md:h-40" />
      </div>

      <div className="h-[16%] md:h-[37%] md:flex md:flex-col  md:w-full  rounded-2xl md:overflow-hidden bg-white md:-mt-4 md:items-center md:justify-center">
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