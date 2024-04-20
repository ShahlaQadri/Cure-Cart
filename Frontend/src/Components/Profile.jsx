import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsBagHeartFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";


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
    <div className="aside realative h-[90vh]  rounded-lg border-2 px-3 pl-7  overflow-hidden    shadow-r-xl text-zinc-700 font-extralight">
      <div className="profile  mb-4 w-full h-32 left-0 border-b border-gray-300  items-center flex p-1">
        <div className="icon text-5xl   bg-white w-20 h-20 text-slate-900 flex items-center justify-center ">
          <img
            src="../../pictures/dashboard user.jpg"
            alt=""
            className="h-20 w-20  rounded-full -zindex-1 "
          />
        </div>
        <div className="ml-2 ">
          <p className="font-bold text-md ">Salman Arif</p>
          <p className="text-gray-500 text-xs font-semibold">sofisalman9906@gmail.com</p>
          <p className="text-gray-500 text-xs font-semibold">+917006622199</p>
        </div>
      </div>
      <div className="options relative h-[70vh] rounded-lg">
        <ul className="font-lighter">
          <li
            style={{
              backgroundColor: location.pathname.includes("/myprofile")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/myprofile")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400    "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <BiSolidUser className="text-[17px]" />
            </div>
            <Link to="/myprofile" className="">
              Account Information
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/myorders")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/myorders")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1  my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center">
              <BsBagCheckFill className="text-[17px]" />
            </div>
            <Link to="/myorders" className="">
              My Orders
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/mywishlist")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/mywishlist")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1  my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center">
              <BsBagHeartFill className="text-[17px]" />
            </div>
            <Link to="/myorders" className="">
              My Wishlist
            </Link>
          </li>
        </ul>
        <ul>
          <li className="flex absolute bottom-0 w-full items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400    ">
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <IoLogOut className="text-[18px]" />
            </div>
            <Link to="/myprofile" className="">
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
