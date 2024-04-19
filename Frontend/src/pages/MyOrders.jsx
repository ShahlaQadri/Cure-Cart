import React from 'react'

import Profile from "../Components/Profile";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import Orderstable from '../Components/Orderstable';

function MyOrders() {
  return (
    <div className="profilePage flex flex-col w-[100%]">
      {/* <div className="relative w-full ">
        <Link
          to="/"
          className="absolute top-3 left-10 bg-gray-50 rounded-full shadow-lg p-4"
        >
          <TiArrowBack className="text-3xl" />
        </Link>
      </div> */}
      <div className="m-10 flex gap-10 w-[85%]  mx-auto">
        <Profile />
        <div className="main w-[70%] h-[90vh]  rounded-lg">
          <h1 className="mt-5 mx-4 text-3xl  text-zinc-700">MY ORDERS</h1>
          <Orderstable/>
        </div>
      </div>
    </div>
  );
}

export default MyOrders