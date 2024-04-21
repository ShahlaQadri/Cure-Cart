import React from "react";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Productcard({ img, name, desc }) {
  return (
    <div className=" relative h-[230px] flex-shrink-0 w-[160px] md:w-[250px] bg-[#F1F5F9] md:h-[340px] overflow-hidden rounded-3xl flex flex-col items-center justify-center shadow-sm hover:shadow-md">
      {/* <span className=" absolute top-6 left-0 inline-flex items-center rounded-r-full  bg-[#E3F6EE]  px-5 py-1 text-xs font-semibold text-green-400  ring-1 ring-inset ring-green-400">
        5% off 
      </span> */}
      <div className="img-container  flex items-center justify-center w-full h-[68%] bg-[#e7f4f7]">
        <Link to="/product">
          <img src={img} alt="" className="h-24 md:h-36" />
        </Link>
      </div>

      <div className="h-[36%] w-full md:h-[37%] md:flex md:flex-col  md:w-full  rounded-3xl md:overflow-hidden bg-white md:-mt-4 md:items-center md:justify-center">
        <p className="text-center text-xs font-semibold md:text-md md:font-semibold mt-4 leading-none">
          {name}
        </p>
        <p className="hidden sm:block md:visible md:text-center md:text-zinc-700 md:text-sm">
          it is best product
        </p>
        <div className="flex text-center px-2 mt-2 md:px-5 md:mt-5 md:mb-5 justify-between items-center w-full ">
          <span className="line-through text-[8px] md:text-[10px] text-red-700">$600</span>
          <span className="text-[10px] md:text-[14px] md:mr-20 text-black leading-tighter mr-16 ">
            $560
          </span>

          <div className="h-6 w-6  md:h-10 md:w-10 rounded-full bg-[#effbfe] flex items-center justify-center">
            <button className=" text-3xl font-lighter hover:rotate-12  md:mr-0">
              <BsHandbag className="text-sm md:text-xl " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
