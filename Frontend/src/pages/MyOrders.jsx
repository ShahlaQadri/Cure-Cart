import React from 'react'

import Profile from "../Components/Profile";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import PaginationTable from '../Components/PaginationTable';

function MyOrders() {
  return (
    <div className="profilePage flex flex-col">
      <div className="relative w-full ">
        <Link
          to="/"
          className="absolute top-3 left-20 bg-gray-50 rounded-full shadow-lg p-4"
        >
          <TiArrowBack className="text-3xl" />
        </Link>
      </div>
      <div className="m-10 flex gap-10 w-[80%]  mx-auto">
        <Profile />
        <div className="main w-[70%] h-[90vh] bg-[#f3fdff] rounded-lg">
          <h1 className="mt-5 ml-20 text-3xl  text-zinc-700">MY ORDERS</h1>
          <PaginationTable/>
        </div>
      </div>
    </div>
  );
}

export default MyOrders