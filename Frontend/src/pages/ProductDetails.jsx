import React from 'react'
import { GiMedicines } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import { MdAssignmentReturned } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoReturnUpBackSharp } from "react-icons/io5";

export default function ProductDetails() {
  return (
    <div className='flex mx-10 bg-gray-50 rounded-3xl'>
      <div className='relative'>
      <button className='absolute bg-gray-50 shadow-lg p-4' >
      <IoReturnUpBackSharp  className='text-3xl'/>
      </button>
      </div>
      <div className="image flex justify-center items-center m-10 w-[40%]">
        <img className='p-[6rem]' src="pictures/div4.png" alt="" />
      </div>


      <div className="description m-10 p-10 w-[60%]">
        <div className='space-y-3 border-b border-gray-600 pb-7'>
          <p className='text-3xl'>Vicks Vaporub 25 ml</p>
          <div className='flex space-x-2'>
          <p className='px-2 py-1 text-gray-600 bg-gray-300 rounded-full'>Health Conditions</p>
          <p className='px-2 py-1 text-gray-600 bg-gray-300 rounded-full'>Cold and Fever</p>
          </div>
        </div>

        <div className='flex gap-[10rem] mt-2'>
          <div className='flex space-x-5  items-center'>
          <p className='text-xl font-bold'>$22.80</p>
          <p className='text-gray-400 text-sm'>MRP <strike>$24.00</strike></p>
          <p className='text-sm text-pink-600'>Save 5%</p>
          </div>
          <div className=''>
          <button className= 'rounded-lg p-3 bg-blue-400 text-white text-xl space'>ADD TO CART</button>
          </div>
          </div>
         

          <div className='mt-4'>
          <p className='text-sm text-gray-600'>*MRP Inclusive of all taxes</p>
          <p className='rounded-full bg-[#EAF7FF] text-gray-600 w-fit p-1'>5% off applied</p> 
          
          </div>
             
          <div className="three flex items-center bg-[#EAF7FF] w-fit px-6 mt-6">
        <div className="icon">
        <GiMedicines className='text-3xl' /></div>
        <div className='flex flex-col mr-4 p-4 border-r border-black text-gray-600'>
          <p className=''>100%</p>
          <p className=''>genuine</p>
          <p className=''>medicines</p>
          </div>


        <div className="secure">
        <SiFsecure className='text-3xl' /></div>
        <div className='flex flex-col mr-4 p-4 border-r border-black text-gray-600'>
          <p className=''>Safe &</p>
          <p className=''>secure</p>
          <p className=''>payments</p>
          </div>

          
        
        <div className="return">
        <MdAssignmentReturned className='text-3xl' /></div>
        <div className='flex flex-col mr-4 p-4 text-gray-600'>
          <p className=''>15 days</p>
          <p className=''>Easy</p>
          <p className=''>returns</p>
          </div>
          
        
      </div>

      </div> 
    </div>
  )
}
