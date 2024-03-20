import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

export default function Ccfooter() {
  return (
    <div className="outer bg-[#163300] flex flex-col items-center justify-center mx-0 h-[270px] rounded-3xl">
      <div className="inner bg-white h-[225px] w-[90%] rounded-3xl pb-10">
        <div className="items flex items-center justify-evenly space-x-16 mt-10 mb-8">
          <ul className="space-y-2">
            <li className="pb-3 text-lg font-bold">Company</li>
            <li className="text-sm leading-4">What's New</li>
            <li className="text-sm leading-4">About Us</li>
            <li className="text-sm leading-4">Contact Us</li>
          </ul>

          <ul className="space-y-2">
            <li className="pb-3 font-bold text-lg ">Community</li>
            <li className="text-sm leading-4">CureCart for Business</li>
            <li className="text-sm leading-4">Explore Templates</li>
            <li className="text-sm leading-4">Charities</li>
          </ul>

          <ul className="space-y-2">
            <li className="pb-3 font-bold text-lg ">Support</li>
            <li className="text-sm leading-4">Getting Started</li>
            <li className="text-sm leading-4">FAQs</li>
            <li className="text-sm leading-4">Report a Violation</li>
          </ul>

          <ul className="space-y-2">
            <li className="pb-3 font-bold text-lg ">Trust & Legal</li>
            <li className="text-sm leading-4">Terms and Conditions</li>
            <li className="text-sm leading-4">Cookie Notice</li>
            <li className="text-sm leading-4">Trust Center</li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-between px-[8rem] text-zinc-500">
          <span className=" text-2xl font-extrabold ">Curecart</span>
          <div className="flex gap-3 mr-14  ">
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
