import React from 'react'
import Adminprofile from "../Components/Adminprofile";





export default function Admincustomers() {
  return (
    <div className="profilePage flex flex-col">
       <h1 className='text-gray-500 ml-[8rem] p-3 font-semibold'>DASHBOARD</h1>
      <div className="mx-auto flex gap-10 w-[80%] mb-10">
     <Adminprofile/>
     <div className="main w-[70%] h-[90vh] bg-[#f3fdff] rounded-lg">
          <h1 className="mt-5 ml-10 text-2xl  text-zinc-700">Customers</h1>
          
        </div>
    </div>
    </div>
  )
}
