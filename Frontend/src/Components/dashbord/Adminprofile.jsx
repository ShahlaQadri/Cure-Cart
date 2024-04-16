import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { RiCoupon3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Adminprofile() {
  return (
    <div className="aside  h-[90vh] p-10  overflow-hidden    shadow-r-xl text-zinc-700 font-extralight">
      <div className="options  rounded-lg ">
        <ul className="font-lighter">
          <li className="text-zinc-400 leading-10 tracking-wider text-sm">
            DASHBOARD
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/dashboard")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/dashboard")
                ? "#2f85ed"
                : "black",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-extrabold hover:bg-blue-100 hover:text-blue-400    "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <MdSpaceDashboard className="text-[16px]" />
            </div>
            <Link to="/admin/products" className="">
              Dashboard
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/products")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/products")
                ? "#2f85ed"
                : "black",
            }}
            className="flex items-center gap-1 px-4 py-1  my-1 rounded-lg text-[14px] font-extrabold hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center">
              <BsBagCheckFill className="text-[16px]" />
            </div>
            <Link to="/admin/products" className="">
              Product
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/customers")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/customers")
                ? "#2f85ed"
                : "black",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-extrabold hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <FaUsers className="text-[16px]" />
            </div>
            <Link to="/admin/customers" className="">
              Customer
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/transactions")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/transactions")
                ? "#2f85ed"
                : "black",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-extrabold hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <FaNoteSticky className="text-[16px]" />
            </div>
            <Link to="/admin/transactions" className="">
              Transaction
            </Link>
          </li>
        </ul>

        <ul className="font-lighter">
          <li className="text-zinc-400 leading-10 tracking-wider text-sm">
            APPS
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/coupon")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/coupon")
                ? "#2f85ed"
                : "black",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-extrabold hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <RiCoupon3Fill className="text-[16px]" />
            </div>
            <Link to="/admin/coupon" className="">
              Coupon
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
