import React from 'react'
import { BiSolidUser } from "react-icons/bi";
import { TbNotes } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function Adminprofile() {
  return (
    <div className="aside w-[30%] overflow-hidden bg-[#f3fdff] rounded-lg text-zinc-700 font-extralight">
      <div className="options  rounded-lg ">
        <ul className="font-lighter">
          <li className="flex items-center gap-2 p-4 border-b border-gray-300">
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center hover:text-green-900">
            <MdSpaceDashboard />
            </div>
            <a href="#" className="hover:underline">
              Dashboard
            </a>
          </li>

          <li className="flex gap-2 items-center p-4 border-b border-gray-300">
            <div className="icon text-xl rounded-full w-8 h-8  flex items-center justify-center">
            <MdOutlineProductionQuantityLimits />
            </div>
            <a href="#" className="hover:underline">
              Product
            </a>
          </li>

          <li className="flex gap-2 p-4 items-center border-b border-gray-300">
            <div className="icon text-2xl rounded-full w-8 h-8  flex items-center justify-center">
            <BiSolidUser />
            </div>
            <a href="#" className="hover:underline">
              Customer
            </a>
          </li>

         
          <li className="flex gap-2 p-4 items-center">
            <div className="icon text-xl rounded-full w-8 h-8 flex items-center justify-center">
              <TbNotes />
            </div>
            <a href="#" className="hover:underline">
              Transaction
            </a>
          </li>
        </ul>
      </div>
      </div>
    
  )
}
