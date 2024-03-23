import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="main-container hidden md:flex md:items-center md:gap-5 md:mx-10 ">
      <div className="  md:flex md:justify-center md:w-42 md:pt-2 md:pr-5 border-r-2 border-zinc-500 font-serif text-white">
        <span className="text-black text-xl py-2 px-3 font-bold">
          CATEGORIES
        </span>
      </div>
      <div className="navbar  flex gap-5 items-center border-top-2 border-blue-700 ">
        {/* categories */}
        <Link
          to="/"
          className="medicines px-[10px] py-[5px]  text-black rounded-full bg-white border shadow-lg hover:bg-zinc-200"
        >
          Medicines
        </Link>
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
