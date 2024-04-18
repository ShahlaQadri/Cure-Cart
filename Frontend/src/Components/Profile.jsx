import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { TbNotes } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";

import { Link, useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [first, setfirst] = useState("");
  const logOut = () => {
    console.log("hello");
    setfirst(null);
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {}, [first]);
  return (
    <div className="aside w-[30%] overflow-hidden bg-[#f3fdff] rounded-lg text-zinc-700 font-extralight">
      <div className="profile border-b border-gray-300 mb-4 rounded-lg   flex p-1">
        <div className="icon text-5xl  rounded-full  bg-white w-24 h-24 text-slate-900 flex items-center justify-center m-4">
          <img
            src="../../pictures/dashboard user.jpg"
            alt=""
            className="h-28 w-28  rounded-full -zindex-1 "
          />
        </div>
        <div className="ml-2 mt-5">
          <p className="font-bold text-xl py-2">Salman Arif</p>
          <p className="text-gray-600 text-xs">sofisalman9906@gmail.com</p>
          <p className="text-gray-600 text-xs">+91-7006622199</p>
        </div>
      </div>
      <div className="options  rounded-lg ">
        <ul className="font-lighter">
          <li className="flex items-center gap-2 p-4 border-b border-gray-300">
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center hover:text-green-900">
              <BiSolidUser className="text-slate-950" />
            </div>
            <Link to="/myprofile" className="hover:underline ">
              Account Information
            </Link>
          </li>

          <li className="flex gap-2 items-center p-4 border-b border-gray-300">
            <div className="icon text-xl rounded-full w-8 h-8  flex items-center justify-center">
              <AiFillHeart />
            </div>
            <Link to="/cart" className="hover:underline">
              My Wishlist
            </Link>
          </li>

          <li className="flex gap-2 p-4 items-center border-b border-gray-300">
            <div className="icon text-2xl rounded-full w-8 h-8  flex items-center justify-center">
              <TbDiscountCheckFilled />
            </div>
            <Link to="/myorders" className="hover:underline">
              My Orders
            </Link>
          </li>

          <li className="flex gap-2 p-4  items-center border-b  border-gray-300">
            <div className="icon text-2xl rounded-full w-8 h-8  flex items-center justify-center">
              <TbTruckDelivery />
            </div>
            <a href="#" className="hover:underline">
              Delivery Addresses
            </a>
          </li>

          <li className="flex gap-2 p-4 items-center">
            <div className="icon text-xl rounded-full w-8 h-8 flex items-center justify-center">
              <TbNotes />
            </div>
            <a href="#" className="hover:underline">
              My Subscriptions
            </a>
          </li>
          <li className="flex gap-2 p-4  bg-red-500 text-white items-center ">
            <div className="icon  rounded-full w-8 h-8 flex items-center justify-center text-2xl">
              <IoLogOut />
            </div>
            <button onClick={logOut} className="hover:underline ">
              Log 0ut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
