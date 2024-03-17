import React from "react";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

function Searchbar() {
  return (
    <div className="navbar-elements md:flex md:space-x-8 md:justify-between md:items-center md:w-full px-5">
      {/* logo */}
      <div className="logo px-1 md:px-8 md:mr-10">
        <span className="font-bold ">C U R E</span>
        <br />
        <span className="font-bold ">C A R T</span>
      </div>

      {/* search bar */}
      <div className="search-bar hidden sm:block md:visible">
        <div className="">
          <input
            type="text"
            placeholder={`Search products...`}
            className="border border-zinc-200 outline-none :focus w-[10rem] md:w-[32rem] py-2 rounded-full bg-[#FFFFFF] px-6"
          />
        </div>
      </div>

      {/* icons */}
      <div className="icons hidden md:flex md:space-x-3">
        <div className="wishlist cursor-pointer rounded-full w-6 h-6 md:w-10 md:h-10 bg-white flex items-center justify-center border hover:bg-slate-200">
          <CiHeart className="text-2xl" />
        </div>
        <div className="cart cursor-pointer rounded-full md:w-10 md:h-10 bg-white flex items-center justify-center border hover:bg-slate-200">
          <GiShoppingCart className="text-2xl" />
        </div>
        <div className="profile cursor-pointer rounded-full w-6 h-6 md:w-10 md:h-10 bg-white flex items-center justify-center  border hover:bg-slate-200">
          <CiUser className="text-2xl  " />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
