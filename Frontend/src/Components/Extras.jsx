import React from 'react'
import { GiAbstract100 } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineAssignmentReturn } from "react-icons/md";

export default function Extras() {
  return (
    <div className='flex gap-[10rem] justify-center items-center p-4 shadow-lg rounded-lg bg-gray-50 my-4 mx-10'>
      <div className="one">
        <div className='py-4'>
      <GiAbstract100 className='text-5xl'/></div>
        <p className='font-bold text-xl pb-2'>100% original products</p>
        <p>We maintain strict quality</p>
        <p>controls on all our partner</p>
        <p>retailers, so that you always</p>
        <p>get standard quality products.</p>
      </div>
      <div className="two mb-12">
        <div className='py-4'>
      <RiSecurePaymentLine className='text-5xl' /></div>
        <p className='font-bold text-xl pb-2 '>Secure Payment</p>
        <p>100% secure and trusted</p>
        <p>payment protection.</p>
      </div>
      <div className="three">
      <div className='py-4'>
      <MdOutlineAssignmentReturn className='text-5xl'/></div>
        <p className='font-bold text-xl pb-2'>Easy Return</p>
        <p>We have a new and dynamic</p>
        <p>return window policy for</p>
        <p>medicines and healthcare</p>
        <p>items.</p>
      </div>
    </div>
  )
}
