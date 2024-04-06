import React from "react";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Productcard({ img, name, desc }) {
  return (
    <div className="h-[260px] bg-[#F1F5F9] md:h-[340px] overflow-hidden rounded-3xl flex flex-col items-center justify-center shadow-sm hover:shadow-md">
      <div className="img-container  flex items-center justify-center w-full h-[68%] bg-[#e7f4f7]">
        <Link to="/product">
          <img src={img} alt="" className="w-26  h-36" />
        </Link>
      </div>

      <div className="h-[36%] w-full md:h-[37%] md:flex md:flex-col  md:w-full  rounded-3xl md:overflow-hidden bg-white md:-mt-4 md:items-center md:justify-center">
        <p className="text-center md:font-semibold mt-2 md:mt-4 leading-none">
          {name}
        </p>
        <p className="hidden sm:block md:visible md:text-center md:text-zinc-700 md:text-sm">
          {desc}
        </p>
        <div className="flex w-[50%] text-center px-8 mt-1 md:px-5 md:mt-5 md:mb-5 justify-between items-center md:w-full ">
          <article className="flex space-x-2">
            <span className="stroke-black text-xs text-red-700 mr-2">
              $600
              
              <span className="text-sm text-black mr-6 ml-4md:mr-2 leading-tighter">
              560
              </span>
            </span>
          </article>
          <div className="h-10 w-10 rounded-full bg-[#effbfe] flex items-center justify-center">
            <button className=" text-3xl font-lighter hover:rotate-12">
              <BsHandbag className="text-sm md:text-xl " />
              {/* + */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
