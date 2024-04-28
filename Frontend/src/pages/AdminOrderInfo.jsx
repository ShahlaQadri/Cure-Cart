import React from "react";
import Adminprofile from "../Components/dashbord/AdminSideBar";
import Manageform from "../Components/Manageform";

export default function AdminManageOrder() {
  return (
    <div className="profilePage flex flex-col   h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="w-[20%] h-[90vh]  bg-white  ">
          <Adminprofile />
        </div>

        <div className="main w-[80%] rounded-lg justify-center flex flex-row gap-4 bg-zinc-50/95 px-4 py-4 ">
          <div className="w-[45%] h-[75vh] bg-white shadow-lg rounded">
            <h2 className="text-2xl  py-6 mt-5 text-center text-zinc-500">
              ORDER ITEMS
            </h2>

            <div className="flex items-center  justify-evenly mb-4 px-10">
              <img
                src="../../pictures/div2.png"
                alt="Product"
                className="w-12 h-16 "
              />
              <div className="px-1 ml-10 flex  text-sm font-semibold text-zinc-700">
                <p className="name ">HK Vitals</p>
                <p className=" ml-16">
                  <span className="price">$200</span> X{" "}
                  <span className="quantity"> 3</span>
                </p>
                <span className="mx-2">=</span>
                <p className="total">$600</p>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[75vh] bg-white shadow-lg rounded px-2">
            <h2 className="text-2xl mt-6 py-6 text-center text-zinc-500">
              ORDER INFO
            </h2>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-5">
              User Info
            </h2>
            <ul className="pl-4 ml-3 text-sm text-zinc-500">
              <li>
                <span className=" ">Name:</span> John Doe
              </li>
              <li>
                <span className="">Address:</span> 123 Main St, City, Country
              </li>
            </ul>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-5">
              Amount Info
            </h2>
            <ul className="pl-4 text-sm text-zinc-600 ml-3">
              <li>Subtotal: $200</li>
              <li>Shipping Charges: $10</li>
              <li>Tax: $20</li>
              <li>Discount: -$30</li>
              <li>Total: $200</li>
            </ul>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-5">
              Status Info
            </h2>
            <ul className="flex pl-4 ml-3 text-sm space-x-2">
              <li>Status :</li>
              <li className="text-red-600"> Processing</li>
            </ul>
            <div className="px-4 mt-10">
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
