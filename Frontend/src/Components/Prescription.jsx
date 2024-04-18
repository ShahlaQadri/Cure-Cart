import React from "react";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcMissedCall } from "react-icons/fc";

export default function Prescription() {
  return (
    <div className="grid grid-cols-1 gap-10 py-4 mx-4 md:grid md:grid-cols-2 md:gap-14 md:py-2 md:mx-20">
      <div className="prescription bg-[#FFEB68] h-[180px] md:h-[300px] w-[50] flex flex-col items-center justify-center rounded-2xl">
        <div className="img-con h-[130px] pt-2 md:h-[180px] w-[90%] bg-white rounded-xl md:mb-6 border-dashed border-2 border-zinc-500 pl-8 md:pt-4">
          <h1 className="w-3/4 font-bold text-xl mb-2 md:mx-4 md:mt-4 md:mb-2 md:text-2xl">
            Upload prescription to place order
          </h1>
          <p className="md:mx-4 text-xs font-semibold text-zinc-500 my-2">
            Upload only .jpg .png or .pdf files <br />
            Size limit is 15 MB
          </p>
        </div>

        <div className="  items-center w-full px-10 gap-2 flex">
          <Link
            to="/upload-presciption"
            className="bg-black rounded-full mt-2 w-5 h-5 p-4 md:w-8 md:h-8 md:p-5 flex items-center justify-center text-sm  "
          >
            <span>
              <BsFileEarmarkArrowUpFill className="text-white" />
            </span>
          </Link>

          <Link
            to="/upload-presciption"
            className="button bg-black text-white px-3 py-2 mt-2 md:px-5 md:py-3 rounded-full text-xs"
          >
            Order Via Prescription
          </Link>
        </div>
      </div>

      <div className="prescription bg-[#A0E1E1] h-[180px] md:h-[300px] w-[50] flex flex-col items-center justify-center rounded-2xl">
        <div className="flex">
          <div className="mt-24 md:mt-0">
          <img
            className="h-[120px] md:h-[200px]"
            src="../../pictures/callus.webp"
            alt=""
          />
          </div>
          <div className="font-bold text-sm mt-24 md:mt-7  text-center  p-4 md:text-2xl ">
            <p className="">Call us and order medicines</p>
            <p className="text-green-600">7006622199</p>
            <p>Working hours 9am to 9pm</p>
          </div>
        </div>
        <div className=" ml-10 mt-4 items-center w-full px-10 gap-2 flex">
          <Link
            to="/upload-presciption"
            className="bg-white rounded-full mb-24  md:mb-0 w-5 h-5 p-4 md:w-8 md:h-8 md:p-5 flex items-center justify-center text-xl  "
          >
            <span>
              <FcMissedCall />
            </span>
          </Link>

          <Link
            to="/upload-presciption"
            className="button bg-white text-black px-3 py-1 mb-24 md:mb-0 md:px-10 md:py-[9px] rounded-full text-sm"
          >
            Call Us For Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
