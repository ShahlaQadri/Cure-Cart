import React from "react";
import { BsHandbagFill } from "react-icons/bs";

export default function Productcard() {
  return (
    <div className="  h-[360px] overflow-hidden  rounded-xl flex flex-col items-center justify-center shadow-xl">
      <div className="img-container flex items-center justify-center w-full h-[68%] bg-slate-200">
        <img src="pictures/div1.png" alt="" className="w-28  h-40" />
      </div>

      <div className="flex flex-col h-[37%] w-full  rounded-2xl overflow-hidden bg-white -mt-4 items-center justify-center">
        <p className="text-center font-semibold mt-4">HK Vitals</p>
        <p className="text-center text-zinc-700 text-sm">
          Multimineral Tablets...
        </p>
        <div className="flex px-5 mt-5 mb-5 justify-between items-center w-full">
          <span>$600</span>
          <button className="  w-10 h-9 flex rounded-lg p-1 mt-2">
            <BsHandbagFill className="text-xl " />
          </button>
        </div>
      </div>
    </div>
  );
}
