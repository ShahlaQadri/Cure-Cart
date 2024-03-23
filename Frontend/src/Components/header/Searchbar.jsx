import React from "react";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import  { Link, useParams } from "react-router-dom"

function Searchbar() {
  return (
    <div className="navbar-elements flex justify-between px-2 md:flex md:space-x-8 md:justify-between md:items-center md:w-full md:px-5">
      {/* logo */}
      <div className="logo px-1 md:px-8 md:mr-10">
        <span className="text-sm font-semibold md:font-bold ">C U R E</span>
        <br />
        <span className="text-sm font-semibold md:font-bold ">C A R T</span>
      </div>

      {/* search bar */}
      <div className="search-bar">
        <div className="">
          <input
            type="text"
            placeholder={`Search products...`}
            className="border border-zinc-200 outline-none :focus w-[8rem] md:w-[32rem] py-2 rounded-full bg-[#FFFFFF] px-6"
          />
        </div>
      </div>

      {/* icons */}
      <div className="icons flex space-x-1 md:space-x-3">
        <div className="wishlist cursor-pointer rounded-full w-8 h-8  flex items-center justify-center md:w-10 md:h-10 bg-white  border hover:bg-slate-200">
          <CiHeart className="text-2xl" />
        </div>
        <div className="cart cursor-pointer rounded-full w-8 h-8 flex items-center justify-center md:w-10 md:h-10 bg-white border hover:bg-slate-200">
          <GiShoppingCart className="text-2xl" />
        </div>
<<<<<<< HEAD
        <div className="profile cursor-pointer rounded-full w-6 h-6 md:w-10 md:h-10 bg-white flex items-center justify-center  border hover:bg-slate-200">
          <Link to="/login">
            <CiUser className="text-2xl  " />
          </Link>
=======
        <div className="profile cursor-pointer rounded-full w-8 h-8 flex items-center justify-center  md:w-10 md:h-10 bg-white  border hover:bg-slate-200">
          <CiUser className="text-2xl  " />
>>>>>>> 805086077c0974626ca755f2861cb3b7f1571e9b
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
