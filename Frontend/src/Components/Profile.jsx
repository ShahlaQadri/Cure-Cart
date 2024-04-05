import React from 'react'
import { BiSolidUser } from "react-icons/bi";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { TbNotes } from "react-icons/tb";

export default function Profile() {
  return (
   
      <div className="aside w-[30%] rounded-lg">
        <div className="profile mb-4 rounded-lg bg-gray-100 flex p-1">
            <div className="icon text-5xl bg-green-200 rounded-full w-16 h-16 text-green-800 flex items-center justify-center m-4"><BiSolidUser /></div>
            <div className='ml-2'>
            <p className='font-bold text-xl py-2'>Salman Arif</p>
            <p className='text-gray-600 text-sm'>sofisalman9906@gmail.com</p>
            <p className='text-gray-600 text-sm'>+91-7006622199</p>
        </div>
        </div>
        <div className="options  rounded-lg bg-gray-100">
            <ul>
                
                <li className='flex gap-4 p-4 border-b border-gray-300'>
                <div className="icon text-2xl bg-green-200 rounded-full w-8 h-8 text-green-800 flex items-center justify-center"><BiSolidUser /></div>
                <a href="#" class="hover:underline">Account Information</a>
                </li>
              
            
                <li className='flex gap-4 p-4 border-b border-gray-300'>
                <div className="icon text-2xl rounded-full w-8 h-8 bg-white flex items-center justify-center"><AiFillHeart /></div>
                <a href="#" class="hover:underline">My Wishlist</a>   
                </li>

                <li className='flex gap-4 p-4 border-b border-gray-300'>
                <div className="icon text-2xl rounded-full w-8 h-8 bg-white flex items-center justify-center"><TbDiscountCheckFilled /></div>
                <a href="#" class="hover:underline">Offers</a>
                </li>

                <li className='flex gap-4 p-4 border-b border-gray-300'>
                <div className="icon text-2xl rounded-full w-8 h-8 bg-white flex items-center justify-center"><TbTruckDelivery /></div>
                <a href="#" class="hover:underline">Delivery Addresses</a>
                </li>

                <li className='flex gap-4 p-4'>
                <div className="icon text-2xl rounded-full w-8 h-8 bg-white flex items-center justify-center"><TbNotes /></div>
                <a href="#" class="hover:underline">My Subscriptions</a>
                </li>

            </ul>
        </div>
      </div>

  )
}
