import React from 'react'
import Adminprofile from '../Components/dashbord/Adminprofile'
import Admintrantable from '../Components/dashbord/Admintrantable'


export default function Admincustomers() {
return (
  <div className="profilePage flex flex-col h-[90vh]">
    <div className="mx-auto flex gap-10 w-full ">
      <div className="w-[20%] h-[90vh] shadow-l ">
        <Adminprofile />
      </div>

      <div className="main w-[80%] h-[90vh] rounded-lg">
        <h1 className="mt-5 ml-10 text-3xl  text-zinc-500 mb-4">Orders</h1>
        <Admintrantable />
      </div>
    </div>
  </div>
);
}