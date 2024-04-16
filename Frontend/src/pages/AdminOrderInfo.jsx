import React from 'react'
import Adminprofile from '../Components/dashbord/Adminprofile'
import Manageform from '../Components/Manageform';




export default function AdminManageproducts() {
return (
  <div className="profilePage flex flex-col my-4  h-[100vh] px-5 py-10 bg-zinc-100">
    <div className="mx-auto flex gap-10 w-full ">
      <div className="w-[20%] h-[90vh] bg-white rounded-lg ">
        <Adminprofile />
      </div>


      <div className="main flex w-[80%] gap-6">
      <div className="w-[60%] bg-white">
        <h2 className="text-2xl font-bold py-6 text-center text-zinc-500">ORDER ITEMS</h2>
        <div className="flex items-center mb-4">
          <img src="pictures/div1.png" alt="Product" className="w-12 h-16 mx-8" />
          <div className='px-4 flex gap-10'>
            <p className="font-bold">HK Vitals</p>
            <p className='font-bold'>$200</p>
          </div>
        </div>
      </div>
      <div className="w-[40%] bg-white">
        <h2 className="text-2xl font-bold py-6 text-center text-zinc-500">ORDER INFO</h2>
        <h2 className="text-xl font-bold my-2 pl-4">User Info</h2>
        <ul className='pl-4'>
          <li>
            <span className="">Name:</span> John Doe
          </li>
          <li>
            <span className="">Address:</span> 123 Main St, City, Country
          </li>
        </ul>
        <h2 className="text-xl font-bold my-2 pl-4">Amount Info</h2>
        <ul className='pl-4'>
          <li>Subtotal: $200</li>
          <li>Shipping Charges: $10</li>
          <li>Tax: $20</li>
          <li>Discount: -$30</li>
          <li>Total: $200</li>
        </ul>
        <h2 className="text-xl font-bold my-2 pl-4">Status Info</h2>
        <ul className='flex pl-4'>
          <li>Status: </li>
          <li className='text-red-600'> Processing</li>
        </ul>
        <div className='px-4'>
        <button className="bg-blue-500 text-white py-2 rounded mt-4 w-full">Process Status</button>
        </div>
      </div>
    </div>
      </div>
      </div>
      
      );
    }
