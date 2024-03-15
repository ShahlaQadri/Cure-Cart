import React from "react";

export default function Navbar() {
  return (
    <div className="main-container  flex items-center gap-5 mx-10 ">
      <div className="  flex justify-center w-42 pt-2 pr-5 border-r-2 border-zinc-500 font-serif text-white">
        <span className="text-black text-xl py-2 px-3 font-bold">
          CATEGORIES
        </span>
      </div>
      <div className="navbar  flex gap-5 items-center border-top-2 border-blue-700 ">
        {/* categories */}
        <a
          href="#"
          className="medicines px-[10px] py-[5px]  text-black rounded-full bg-white border shadow-lg hover:bg-zinc-200"
        >
          Medicines
        </a>
        <a
          href="#"
          className="medicines  px-[10px] py-[5px] text- black rounded-full bg-white border shadow-lg hover:bg-zinc-200"
        >
          Skin Care
        </a>
        <a
          href="#"
          className="medicines px-[10px] py-[5px]  text-black rounded-full bg-white border shadow-lg hover:bg-zinc-200"
        >
          Medicines
        </a>
      </div>
    </div>
  );
}
