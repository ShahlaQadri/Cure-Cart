import React from "react";
import { BsHandbagFill } from "react-icons/bs";

export default function Productcard() {
  return (
    <div className="bg-zinc-100 p-4 rounded-xl flex flex-col items-center justify-center shadow-xl">
      <img src="pictures/div1.png" alt="" className="px-10 py-5 w-44 h-52" />
      <p className="text-center font-semibold">HK Vitals</p>
      <p className="text-center text-zinc-700 text-sm">Multimineral Tablets</p>
      <div className="flex px-5 mt-5 justify-between items-center w-full">
        <span>$600</span>
        <button className="  rounded-lg p-1 mt-2">
          <BsHandbagFill className="text-xl" />
        </button>
      </div>
    </div>
  );
}
