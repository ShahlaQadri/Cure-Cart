import React from "react";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";

export default function Prescription() {
  return (
    <div className="grid grid-cols-2 gap-14 py-2 mx-20">
      <div className="prescription bg-[#FFEB68] h-[300px] w-[50] flex flex-col items-center justify-center rounded-2xl">
        <div className="img-con h-[180px] w-[90%] bg-white rounded-xl mb-6 border-dashed border-2 border-zinc-500 pl-8 pt-4">
          <h1 className="w-1/2 font-bold  text-2xl  mx-4 mt-4 mb-2">
            Upload prescription to place order
          </h1>
          <p className="mx-4 text-xs font-semibold text-zinc-500">
            Upload only .jpg .png or .pdf files <br />
            Size limit is 15 MB
          </p>
        </div>

        <div className="  items-center w-full px-10 gap-2 flex">
          <button className="bg-black rounded-full  w-8 h-8 p-5 flex items-center justify-center text-sm  ">
            <span>
              <BsFileEarmarkArrowUpFill className="text-white" />
            </span>
          </button>

          <button className="button bg-black text-white px-5 py-3 rounded-full text-xs">
            Order Via Prescription
          </button>
        </div>
      </div>

      <div className="discount bg-[#A0E1E1] flex flex-col items-center justify-center rounded-2xl">
        <div className="img-con h-[180px] w-[90%] bg-white rounded-xl mb-6 border-dashed border-2 border-zinc-500">
          <p className="w-1/2 font-bold text-2xl mx-4 my-4">
            Upload prescription to place order
          </p>
          <p className="mx-4">Upload only .jpg .png or .pdf files</p>
          <p className="mx-4">Size limit is 15 MB</p>
        </div>

        <div className="button bg-black text-white p-2 rounded-lg text-sm">
          <button className="">Order Via Prescription</button>
        </div>
      </div>
    </div>
  );
}
