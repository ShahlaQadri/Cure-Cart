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
          to="/productspage"
          className="medicines px-[16px] py-[5px]  text-black rounded-full bg-white border  hover:bg-zinc-200 hover:shadow-lg"
        >
          Medicines
        </Link>
        <Link
          to="productspage"
          className="medicines  px-[16px] py-[5px] text- black rounded-full bg-white border  hover:bg-zinc-200"
        >
          Skin Care
        </Link>
        <Link
          to="productspage"
          className="medicines px-[16px] py-[5px]  text-black rounded-full bg-white border  hover:bg-zinc-200"
        >
          Baby Food
        </Link>
      </div>
    </div>
  );
}
