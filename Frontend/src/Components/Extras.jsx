import React from "react";
import { GiAbstract100 } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineAssignmentReturn } from "react-icons/md";

export default function Extras() {
  return (
    <div className="flex gap-[10rem] justify-center bg items-center p-4 shadow-lg rounded-lg bg-gray-50 my-4 mx-10">
      <div className="one flex items-center flex-col justify-center">
        <div className="py-4">
          <GiAbstract100 className="text-5xl" />
        </div>
        <div className="w-[240px] flex items-center flex-col ">
          <h2 className="font-bold text-xl pb-2">100% original products</h2>
          <p className="text-xs w-[200px]">
            We maintain strict quality controls on all our partner retailers, so
            that you always get standard quality products.
          </p>
        </div>
      </div>
      <div className="two  flex items-center flex-col justify-center">
        <div className="py-4">
          <RiSecurePaymentLine className="text-5xl" />
        </div>
        <div className="w-[240px] flex items-center flex-col ">
          <h2 className="font-bold text-xl pb-2">Secure Payment</h2>
          <p className="text-xs w-[200px]">
            100% secure and trusted payment protection.
          </p>
        </div>
      </div>

      <div className="three flex items-center flex-col justify-center">
        <div className="py-4">
          <MdOutlineAssignmentReturn className="text-5xl" />
        </div>
        <div className="w-[240px] flex items-center flex-col ">
          <h2 className="font-bold text-xl pb-2">Easy Return</h2>
          <p className="text-xs w-[200px]">
            We have a new and dynamic return window policy for medicines and
            healthcare items.
          </p>
        </div>
      </div>
    </div>
  );
}
