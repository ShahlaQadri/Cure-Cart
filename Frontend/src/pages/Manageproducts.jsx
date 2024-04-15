import React from 'react'
import Adminprofile from '../Components/dashbord/Adminprofile'
import Manageform from '../Components/Manageform';




export default function Manageproducts() {
return (
  <div className="profilePage flex flex-col h-[90vh]">
    <div className="mx-auto flex gap-10 w-full ">
      <div className="w-[20%] h-[90vh] shadow-l ">
        <Adminprofile />
      </div>

      <div className="main w-[80%] h-[90vh] rounded-lg flex flex-row mx-10 gap-4 bg-gray-100">

        <div className="picture w-[55%] p-4">
        <div className="bg-white shadow-md py-2">
        <div className="px-4 py-2 text-green-600 text-right">
          10 available
        </div>
        
        <div className="flex justify-center items-center pt-11">
          <img src="pictures/div1.png" alt="Product Name" className="h-80 object-cover" />
        </div>
        <div className="text-center px-4 py-4 space-y-2">
          <h3 className="text-xl font-bold">HK Vitals</h3>
          <p className="text-gray-600">$99.99</p>
        </div>
        
      </div>
    </div>

    <div className="manage w-[45%] p-4">
            <Manageform />
            
        </div>
        </div>
        
      </div>
      </div>
      );
    }