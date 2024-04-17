import React from "react";
import Adminprofile from "../Components/dashbord/AdminSideBar";
import Manageform from "../Components/Manageform";

export default function AdminManageproducts() {
  return (
    <div className="profilePage flex flex-col my-4  h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="w-[20%] h-[90vh] bg-white  ">
          <Adminprofile />
        </div>

        <div className="main w-[80%] rounded-lg flex flex-row gap-4 bg-zinc-50/95 px-4 py-4 ">
          <div className="picture mx-auto w-[30%] bg-white h-[83vh] shadow-lg rounded   mb-4">
            <div className="bg-white py-2 relative">
              <div className="px-4 py-2  flex justify-end">
                <div className="rounded-full mb-3 flex items-end bg-[#E3F6EE] text-sm text-green-400  w-fit px-4 py-1">
                  20 Available
                </div>
              </div>
              <div className="id ml-6 my-2 mb-10 rounded-full  flex items-end bg-zinc-200 text-xs text-zinc-700  w-fit px-4 py-1  ">
                ID: 101jdjsjhdjhdjsah
              </div>

              <div className="flex justify-center mt-20 items-center ">
                <img
                  src="../../pictures/div2.png"
                  alt="Product Name"
                  className="h-64 object-cover"
                />
              </div>
              <div className="text-center mt-10 px-4 py-4 space-y-2">
                <h3 className="text-md font-bold text-zinc-500   ">
                  HK Vitals
                </h3>
                <p className="font-bold text-3xl">$99.99</p>
              </div>
            </div>
          </div>

          <div className="manage w-[70%] ">
            <Manageform />
          </div>
        </div>
      </div>
    </div>
  );
}
