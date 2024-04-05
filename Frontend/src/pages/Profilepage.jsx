import React from 'react'
import Profile from '../Components/Profile'
import { AiFillEdit } from "react-icons/ai";


export default function Profilepage() {
  return (
    <div className='m-10 flex gap-10'>
      <Profile/>


      <div className="main w-[70%] rounded-lg">
        <div className="icons flex mb-4 bg-gray-100 rounded-lg justify-center items-center gap-10">
            <p>Payment Methods</p>
            <p>Medicine Orders</p>
            <p>My Rewards</p>
        </div>

        <div className="information rounded-lg flex bg-gray-100">
            <div className="login p-5 w-[50%]">
            <p className='text-md text-gray-600'>LOGIN INFORMATION</p>
            <div className="email mt-4 ml-4">
                <p className='text-green-600 text-sm'>EMAIL</p>
                <p>sofisalman9906@gmail.com</p>
            </div>
            <div className="number mt-4 ml-4">
                <p className='text-green-600 text-sm'>MOBILE NUMBER</p>
                <p>+91-7006622199</p>
            </div>
            </div>
 
            <div className="info p-5 w-[50%]">
            <p className='text-md text-gray-600'>PERSONAL INFORMATION</p>
            <div className="fullname mt-4 ml-4">
                <p className='text-green-600 text-sm'>FULL NAME</p>
                <p>Salman Arif</p>
            </div>
            <div className="gender mt-4 ml-4">
                <p className='text-green-600 text-sm'>GENDER</p>
                <p>Male</p>
            </div>

            <div className="button mt-4 flex">
                <div className='flex justify-center items-center bg-green-500 text-white text-xl pl-2'><AiFillEdit /></div>
                <button className='bg-green-500 px-4 py-1 text-white'>EDIT PROFILE</button>
            </div>
        </div>
        </div>


      </div>





    </div>
  )
}
