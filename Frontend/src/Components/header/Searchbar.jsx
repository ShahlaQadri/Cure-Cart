import React from "react";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

function Searchbar() {
  return (
    <div className="navbar-elements flex space-x-8 justify-between items-center w-full px-5">
      {/* logo */}
      <div className="logo flex-col  items-center px-8 mr-10">
        <span className="font-bold ">C U R E</span>
        <br />
        <span className="font-bold ">C A R T</span>
      </div>

      {/* search bar */}
      <div className="search-bar relative flex ">
        <div className="relative flex-1 px-10">
          <input
            type="text"
            placeholder={`Search products...`}
            className=" border border-zinc-200 outline-none :focus w-[32rem] py-2 rounded-full bg-[#FFFFFF] px-6"
          />
        </div>
      </div>

      {/* icons */}
      <div className="icons flex space-x-3">
        <div className="wishlist cursor-pointer rounded-full w-10 h-10 bg-white flex items-center justify-center border hover:bg-slate-200">
          <CiHeart className="text-2xl" />
        </div>
        <div className="cart cursor-pointer rounded-full w-10 h-10 bg-white flex items-center justify-center border hover:bg-slate-200">
          <GiShoppingCart className="text-2xl" />
        </div>
        <div className="profile cursor-pointer rounded-full w-10 h-10 bg-white flex items-center justify-center  border hover:bg-slate-200">
          <CiUser className="text-2xl  " />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
