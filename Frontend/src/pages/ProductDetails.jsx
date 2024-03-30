import React from 'react'
import { GiMedicines } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import { MdAssignmentReturned } from "react-icons/md";
import { IoReturnUpBackSharp } from "react-icons/io5";

export default function ProductDetails() {
  return (
    <div>
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
        <div className='space-y-2 border-b border-gray-600 pb-6'>
          <p className='text-3xl'>Vicks Vaporub 25 ml</p>
          <p className='text-gray-400 font-semibold text-xl'>Procter & Gamble Hygiene & Healthcare Ltd.</p>
          <div className='flex space-x-2'>
          <p className='px-2 py-1 text-gray-600 bg-gray-300 rounded-full'>Health Conditions</p>
          <p className='px-2 py-1 text-gray-600 bg-gray-300 rounded-full'>Cold and Fever</p>
          </div>
        </div>

        <div className='flex gap-[10rem] mt-2'>
          <div className='items-center'>
          <p className='text-gray-400 text-sm'>MRP <strike>$24.00</strike></p>
          <div className='flex gap-4'>
          <p className='text-xl font-bold'>$22.80</p>
          <p className='text-lg text-gray-500'>$3.40/ML</p>
          </div>
          {/* <p className='text-sm text-pink-600'>Save 5%</p> */}
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

    <div className="details  mx-10 bg-gray-50 rounded-3xl m-4 p-4">
      <div className="about pb-4">
        <p className='font-bold text-xl'>About Vicks Vaporub 25 ML</p>
        <p className='text-gray-500 text-md'>Camphor Topical, Eucalyptus Oil Topical, and Menthol Topical are active components in Vicks Vaporub Ointment. Pain, Warts, Cold Sores, Hemorrhoids, Osteoarthritis, Gum Diseases, Plaques, Bleeding Gums, Delayed Onset Muscle Soreness, and more disorders are treated with Vicks Vaporub Ointment. </p>
      </div>

      <div className="uses pb-4">
        <p className='font-bold text-xl'>Uses of Vicks Vaporub 25 ML</p>
        <p className='text-gray-500 text-md'>Vicks Vapourab is used in treatment of Pain Warts Cold sores Hemorrhoids Osteoarthritis Gum diseases Plaques Bleeding gums Delayed onset muscle soreness</p>
      </div>

      <div className="directions">
        <p className='font-bold text-xl'>Directions for Use of Vicks Vaporub 25 ML</p>
        <p className='text-gray-500 text-md'>Follow the instructions written on the packaging. To treat a cough, rub Vicks VapoRub on your chest—never under your nostrils. To treat muscle aches, rub Vicks VapoRub directly over the muscle. Vicks VapoRub should never be used internally or in a manner not directed. Do not use it on broken skin or burns.</p>

        <div className="expiry flex pt-4 ">
          <p className='font-bold text-xl'>Expires on: </p>
          <p className='font-bold text-xl pl-1'>Oct-26</p>
        </div>
      </div>

    </div>

    </div>

    
    
  )
}
