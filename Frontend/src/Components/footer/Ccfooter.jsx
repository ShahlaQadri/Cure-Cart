import React from "react";

export default function Ccfooter() {
  return (
    <div className="outer bg-[#163300] flex flex-col items-center justify-center mx-0 h-[590px] rounded-3xl">
      <div className="inner bg-white h-[300px] w-[80%] rounded-3xl">
        <div className="items flex items-center justify-evenly space-x-16 my-10">
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
      </div>

      <div className="logo bg-[#9FE870] h-[160px] w-[80%] mt-3 rounded-3xl  flex items-center justify-center py-3">
        <p className="text-[#163300] font-extrabold text-[7rem] ">CureCart</p>
      </div>
    </div>
  );
}
