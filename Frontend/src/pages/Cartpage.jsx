import React from 'react'
import { MdDelete } from "react-icons/md";

export default function Cartpage() {
  return (
    <div className='flex mx-10 rounded-lg'>
      <div className="left w-[80%]">
        <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
                <img className='h-32 w-24 p-3 ml-6' src="pictures/div4.png" alt="" />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
                <p className='text-xl p-1'>Vicks Vaporub 25 ML</p>
                <p className='font-bold p-1'>$24.00</p>
            </div>

            <div className='quantity-div w-[15%] text-center'>
                <button className='bg-gray-200 px-1 m-1'>-</button>
                <button className='bg-white p-1'>1</button>
                <button className='bg-gray-200 px-1 m-1'>+</button>
            </div>

            <div className="delete w-[15%]">
            <MdDelete className='text-2xl ml-6' />
            </div>

        </div>
      </div>


      


      <div className="right w-[20%]">
        <div className="details p-6">
        <div className=''>
            <p>Subtotal</p>
            <p>Shipping Charges</p>
            <p>Tax</p>
            <p>Discount</p>
            <p>Total</p>
        </div>

        <div className='my-4 w-full'>
            <input type="text" />
        </div>
        <div>
            <button className='bg-blue-200 px-2 w-full '>CHECKOUT</button>
        </div>
        </div>


      </div>
    </div>
  )
}
