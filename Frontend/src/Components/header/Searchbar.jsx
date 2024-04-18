import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";


import { Link, useNavigate, useParams } from "react-router-dom";

function Searchbar() {
  const navigate = useNavigate();
  const [first, setfirst] = useState("");
  
  useEffect(() => {}, [first]);

  return (
    <div className="navbar-elements flex justify-between px-2 md:flex md:space-x-8 md:justify-between md:items-center md:w-full md:px-5">
      {/* logo */}
      <div className="logo px-2 md:px-8 md:mr-10 ">
        <Link to="/">
          <img
            src="../../../pictures/smalllogo.png"
            width={"150px"}
            alt="LOGO"
            style={{ mixBlendMode: "multiply" }}
          />
        </Link>
      </div>

      {/* search bar */}
      <div className="search-bar">
        <div className="">
          <input
            type="text"
            placeholder={`Search products...`}
            className="border border-zinc-200 outline-none mr-4 w-[8rem] md:w-[32rem] py-1 md:py-2 rounded-full bg-[#FFFFFF] px-6"
          />
        </div>
      </div>

      {/* icons */}
      <div className="icons flex space-x-1 md:space-x-3">
        <div className="wishlist cursor-pointer rounded-full w-8 h-8  flex items-center justify-center md:w-10 md:h-10 bg-white  border hover:bg-slate-200">
          <Link to="/admin/dashboard">
            <CiHeart className="text-xl" />
          </Link>
        </div>
        <div className="cart cursor-pointer rounded-full w-8 h-8 flex items-center justify-center md:w-10 md:h-10 bg-white border hover:bg-slate-200">
          <Link to="/cart">
            <SlHandbag className="text-l" />
          </Link>
        </div>
        <div className="profile cursor-pointer rounded-full w-8 h-8 flex items-center justify-center  md:w-10 md:h-10 bg-white  border hover:bg-slate-200">
          {!localStorage.getItem("token") ? (
            <Link to="/login">
              <CiUser className="text-xl  " />
            </Link>
          ) : (
            <div
              // onClick={logOut}
              className="h-10 w-10 rounded-full flex items-center justify-center"
            >
              <Link to="/myprofile">
                {/* <ImExit className="text-xl  " /> */}
                <img
                  src="../../../pictures/dashboard user.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
