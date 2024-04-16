import React from 'react'
import Adminprofile from '../Components/dashbord/Adminprofile'
import Manageform from '../Components/Manageform';




export default function Manageproducts() {
return (
  <div className="profilePage flex flex-col my-4 py-6">
    <div className="mx-auto flex gap-10 w-full ">
      <div className="w-[20%] h-[90vh]">
        <Adminprofile />
      </div>

      <div className="main w-[80%] h-[90vh] rounded-lg flex flex-row gap-4 my-4">

        <div className="picture w-[40%] p-4">
        <div className="bg-white py-2">
        <div className="px-4 py-2 text-green-600 text-right">
          10 available
        </div>
        <div className="id ml-6 my-2 ">
          ID: 101
        </div>
        
        <div className="flex justify-center items-center">
          <img src="pictures/div1.png" alt="Product Name" className="h-64 object-cover" />
        </div>
        <div className="text-center px-4 py-4 space-y-2">
          <h3 className="text-xl font-bold">HK Vitals</h3>
          <p className="font-bold text-3xl">$99.99</p>
        </div>
        
      </div>
    </div>

    <div className="manage w-[60%] p-4">
            <Manageform />
            
        </div>
        </div>
        
      </div>
      </div>
      );
    }