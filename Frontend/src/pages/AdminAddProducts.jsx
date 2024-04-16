import React from 'react'
import Adminprofile from '../Components/dashbord/Adminprofile'
import Addproductsform from '../Components/Addproductsform';




export default function AdminAddProducts() {
  return (
    <div className="profilePage flex bg-zinc-100 flex-col px-5  py-10 ">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="w-[20%] bg-white rounded-xl h-[90vh]">
          <Adminprofile />
        </div>

        <div className="main w-[80%] bg-white h-[90vh] rounded-lg flex flex-row gap-4 ">
          <Addproductsform />
        </div>
      </div>
    </div>
  );
}
    