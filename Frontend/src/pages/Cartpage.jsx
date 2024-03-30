import React from 'react'
import { MdDelete } from "react-icons/md";

export default function Cartpage() {
  return (
    <div className='flex mx-10 rounded-lg'>
      <div className="left w-[70%]">
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


        <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
                <img className='h-32 w-24 p-3 ml-6' src="pictures/div1.png" alt="" />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
                <p className='text-xl p-1'>HK Vitals 100 Tablets</p>
                <p className='font-bold p-1'>$49.00</p>
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




        
        <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
                <img className='h-32 w-24 p-3 ml-6' src="pictures/div2.png" alt="" />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
                <p className='text-xl p-1'>Cetaphil Facewash 50 ML</p>
                <p className='font-bold p-1'>$52.00</p>
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


      


      <div className="right w-[30%]">
        <div className="details p-6 mt-12">
        <div className=''>
            <p>Subtotal : $34567</p>
            <p>Shipping Charges : $0</p>
            <p>Tax : $87</p>
            <p>Discount : $10</p>
            <p className='font-bold'>Total : $35464</p>
        </div>

        <div className='my-5 w-full'>
            <input type="text"  placeholder={` Coupon code`} className='border border-black' />
        </div>
        <div>
            <button className='bg-blue-200 px-14 w-fit '>CHECKOUT</button>
        </div>
        </div>


      </div>
    </div>
  )
}
