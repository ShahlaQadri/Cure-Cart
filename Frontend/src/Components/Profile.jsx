import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBagHeartFill, BsBagCheckFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userNotExist } from "../redux/reducers/userReducer";
import { useUserLogoutMutation } from "../redux/api/userAPI.js";
import { MdSpaceDashboard } from "react-icons/md";
import toast from "react-hot-toast";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [logoutUser] = useUserLogoutMutation();
  const logOut = () => {
    try {
      dispatch(userNotExist());
      logoutUser();
      toast.success("Sign Out Successfully");
      navigate("/");
    } catch (error) {
      toast.error("Sign Out Failed");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger button for mobile view */}
      <button
        className=" block md:hidden p-2 left-1 text-gray-700 bg-gray-200 rounded-full"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu  size={24} />
      </button>

      {/* Profile component for both desktop and mobile view */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block absolute md:relative top-12 md:right-0 w-64 md:w-auto bg-white shadow-lg md:shadow-none rounded-lg md:rounded-none`}
      >
        <div className="aside relative rounded-lg md:rounded-none border-2 md:border-none px-3 pl-7 overflow-hidden shadow-r-xl md:shadow-none text-zinc-700 font-extralight">
          <div className="profile mb-4 w-full h-32 left-0 border-b border-gray-300 items-center flex p-1">
            <div className="icon text-5xl bg-white w-20 h-20 text-slate-900 flex items-center justify-center">
              <img
              src="../../pictures/dashboard user.jpg"
                alt=""
                className="h-20 w-20 rounded-full"
              />
            </div>
            <div className="ml-2">
              <p className="font-bold text-md">{user?.name}</p>
              <p className="text-gray-500 text-xs font-semibold">{user?.email}</p>
              <p className="text-gray-500 text-xs font-semibold">+91-{user?.phone}</p>
            </div>
          </div>
          <div className="options relative h-[60vh] md:h-[70vh] rounded-lg md:rounded-none">
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
                className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400"
              >
                <div className="icon text-2xl rounded-full w-8 h-8 flex items-center justify-center">
                  <BiSolidUser className="text-[17px]" />
                </div>
                <Link to="/myprofile">Account Information</Link>
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
                className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400"
              >
                <div className="icon text-2xl rounded-full w-8 h-8 flex items-center justify-center">
                  <BsBagCheckFill className="text-[17px]" />
                </div>
                <Link to="/myorders">My Orders</Link>
              </li>

              <li
                style={{
                  backgroundColor: location.pathname.includes("/mypresciptionorders")
                    ? "#DBEAFE"
                    : "white",
                  color: location.pathname.includes("/mypresciptionorders")
                    ? "#2f85ed"
                    : "#63636b",
                }}
                className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400"
              >
                <div className="icon text-2xl rounded-full w-8 h-8 flex items-center justify-center">
                  <BsBagCheckFill className="text-[17px]" />
                </div>
                <Link to="/mypresciptionorders">My Prescription Orders</Link>
              </li>

              {user?.role === "admin" ? (
                <li
                  style={{
                    backgroundColor: location.pathname.includes("/admin/dashboard")
                      ? "#DBEAFE"
                      : "white",
                    color: location.pathname.includes("/admin/dashboard")
                      ? "#2f85ed"
                      : "#63636b",
                  }}
                  className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400"
                >
                  <div className="icon text-2xl rounded-full w-8 h-8 flex items-center justify-center">
                    <MdSpaceDashboard className="text-[17px]" />
                  </div>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
              ) : (
                <li
                  style={{
                    backgroundColor: location.pathname.includes("/mywishlist")
                      ? "#DBEAFE"
                      : "white",
                    color: location.pathname.includes("/mywishlist")
                      ? "#2f85ed"
                      : "#63636b",
                  }}
                  className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400"
                >
                  <div className="icon text-2xl rounded-full w-8 h-8 flex items-center justify-center">
                    <BsBagHeartFill className="text-[17px]" />
                  </div>
                  <Link to="/mywishlist">My Wishlist</Link>
                </li>
              )}
            </ul>
            <ul>
              <li className="flex absolute bottom-0 w-full items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400">
                <div className="icon text-2xl rounded-full w-8 h-8 flex items-center justify-center">
                  <IoLogOut className="text-[18px]" />
                </div>
                <button onClick={logOut}>LogOut</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
