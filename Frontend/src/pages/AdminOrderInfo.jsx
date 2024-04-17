import React from "react";
import Adminprofile from "../Components/dashbord/AdminSideBar";
import Manageform from "../Components/Manageform";

export default function AdminManageOrder() {
  return (
    <div className="profilePage flex flex-col my-4  w-full h-[90vh] bg-zinc-50/95">
      <div className=" flex gap-10 w-full ">
        <div className="w-[20%] h-[90vh] bg-white rounded-lg ">
          <Adminprofile />
        </div>

        <div className="main flex  mx-auto w-[55%] gap-2 bg-zinc-50/95 px-4 py-4 ">
          <div className="w-[55%] bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold py-6 mt-5 text-center text-zinc-500">
              ORDER ITEMS
            </h2>
            <div className="flex items-center mb-4 px-10">
              <img
                src="../../pictures/div2.png"
                alt="Product"
                className="w-12 h-16 "
              />
              <div className="px-1 ml-10 flex  text-zinc-600">
                <p className="font-bold ">HK Vitals</p>
                <p className="font-bold ml-16">
                  <span className="text-sm">$200</span> X{" "}
                  <span className="text-sm"> 3</span>
                </p>
                <span className="mx-2">=</span>
                <p className="font-bold">$600</p>
              </div>
            </div>
            <div className="flex items-center mb-4 px-10">
              <img
                src="../../pictures/div2.png"
                alt="Product"
                className="w-12 h-16 "
              />
              <div className="px-1 ml-10 flex  text-zinc-600">
                <p className="font-bold ">HK Vitals</p>
                <p className="font-bold ml-16">
                  <span className="text-sm">$200</span> X{" "}
                  <span className="text-sm"> 3</span>
                </p>
                <span className="mx-2">=</span>
                <p className="font-bold">$600</p>
              </div>
            </div>
          </div>
          <div className="w-[45%] bg-white shadow-lg rounded-lg px-2">
            <h2 className="text-2xl font-bold py-6 text-center text-zinc-500">
              ORDER INFO
            </h2>
            <h2 className="text-xl font-bold mt-5 pl-4">User Info</h2>
            <ul className="pl-4 ml-3 text-zinc-500">
              <li>
                <span className=" ">Name:</span> John Doe
              </li>
              <li>
                <span className="">Address:</span> 123 Main St, City, Country
              </li>
            </ul>
            <h2 className="text-xl font-bold  pl-4  mt-5">Amount Info</h2>
            <ul className="pl-4 text-zinc-600 ml-3">
              <li>Subtotal: $200</li>
              <li>Shipping Charges: $10</li>
              <li>Tax: $20</li>
              <li>Discount: -$30</li>
              <li>Total: $200</li>
            </ul>
            <h2 className="text-xl  mt-5 pl-4" style={{ fontWeight: "900px" }}>
              Status Info
            </h2>
            <ul className="flex pl-4 ml-3 space-x-2">
              <li>Status :</li>
              <li className="text-red-600"> Processing</li>
            </ul>
            <div className="px-4 mt-5">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-4 w-full">
                Process Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
