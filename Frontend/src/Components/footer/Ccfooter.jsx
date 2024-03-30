import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

export default function Ccfooter() {
  return (
    <div className="outer bg-[#EAF7FF] flex flex-col  items-center justify-center mx-0 h-[200px] md:h-[270px] rounded-3xl">
      <div className="inner bg-white h-[160px] w-[70%] md:h-[225px] md:w-[90%] rounded-3xl pb-10">
        <div className="items flex items-center justify-evenly space-x-16 mt-4 mb-6 md:mt-5  md:mb-8">
          <ul className="space-y-1 md:space-y-2">
            <li className="md:pb-3 text-sm md:text-lg font-bold">Company</li>
            <li className="text-[10px] md:text-sm leading-4">What's New</li>
            <li className="text-[10px] md:text-sm leading-4">About Us</li>
            <li className="text-[10px] md:text-sm leading-4">Contact Us</li>
          </ul>

          <ul className="hidden sm:block md:visible md:space-y-2">
            <li className="md:pb-3 text-sm font-bold md:text-lg ">Community</li>
            <li className="text-[10px] md:text-sm leading-4">
              CureCart for Business
            </li>
            <li className="text-[10px] md:text-sm leading-4">
              Explore Templates
            </li>
            <li className="text-[10px] md:text-sm leading-4">Charities</li>
          </ul>

          <ul className="space-y-1 md:space-y-2">
            <li className="text-sm md:pb-3 font-bold md:text-lg ">Support</li>
            <li className="text-[10px] md:text-sm leading-4">
              Getting Started
            </li>
            <li className="text-[10px] md:text-sm leading-4">FAQs</li>
            <li className="text-[10px] md:text-sm leading-4">
              Report a Violation
            </li>
          </ul>

          <ul className="hidden sm:block md:visible md:space-y-2">
            <li className="md:pb-3 text-sm font-bold md:text-lg ">
              Trust & Legal
            </li>
            <li className="text-[10px] md:text-sm leading-4">
              Terms and Conditions
            </li>
            <li className="text-[10px] md:text-sm leading-4">Cookie Notice</li>
            <li className="text-[10px] md:text-sm leading-4">Trust Center</li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-between px-[1rem] md:px-[8rem] text-zinc-500  ">
          <span className=" text-xl md:text-2xl font-bold md:font-extrabold ">
            Curecart
          </span>
          <div className="flex gap-3 md:mr-14  ">
            <BsInstagram />
            <BsFacebook /> <BsTwitterX />
          </div>
        </div>
      </div>

      {/* <div className="logo bg-[#9FE870] h-[160px] w-[80%] mt-3 rounded-3xl  flex items-center justify-center py-3">
        <p className="text-[#163300] font-extrabold text-[7rem] ">CureCart</p>
      </div> */}
    </div>
  );
}
