import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div>
      <div className="flex mx-10 bg-gray-50 rounded-3xl">
        <div className="relative">
          <Link
            to="/"
            className="absolute top-3 left-10  hover:bg-zinc-100  rounded-full shadow-lg p-4"
          >
            <TiArrowBack className="text-3xl" />
          </Link>
        </div>
        <div className="image flex justify-center items-center m-10 h-[60vh] w-[40%]">
          <img className="p-[6rem] w-[80%]" src="../../pictures/div2.png" alt="" />
        </div>

        <div className="description m-10 p-10 w-[60%]">
          <div className="space-y-2 border-b border-gray-600 pb-6">
            <p className="text-3xl leading-none">Vicks Vaporub 25 ml</p>
            <p className="text-gray-400  font-semibold text-md ">
              Procter & Gamble Hygiene & Healthcare Ltd.
            </p>
            <div className="flex space-x-2 mt-20  text-xs">
              <p
                className="px-4 py-2 text-green-400 font-semibold
               bg-[#E3F6EE] rounded-full"
              >
                Health Conditions
              </p>
              <p className="px-4 py-2 font-semibold text-green-400   bg-[#E3F6EE] rounded-full">
                Cold and Fever
              </p>
            </div>
          </div>

          <div className="flex gap-[10rem] mt-6 ">
            <div className="items-center">
              <p className="text-gray-400 text-sm">
                MRP <strike>$24.00</strike>
              </p>
              <div className="flex gap-4">
                <p className="text-xl font-bold">$22.80</p>
                <p className="text-lg text-gray-500">$3.40/ML</p>
              </div>
              {/* <p className='text-sm text-pink-600'>Save 5%</p> */}
            </div>
            <div className=""></div>
          </div>

          <div className="mt-0 flex items-center w-[500px] justify-between">
            <p className="rounded-full mb-3 bg-[#E3F6EE] text-xs text-green-400  w-fit px-4 py-1">
              5% off applied
            </p>
            <button className="rounded-lg px-10 py-2 -mt-10 bg-[#0071BC] text-white text-md space">
              Add To Cart
            </button>
          </div>
          <p className="text-sm text-gray-600">*MRP Inclusive of all taxes</p>

          <div className="three flex items-center rounded-xl bg-[#EAF7FF] w-fit px-6 mt-6">
            <div className="icon">
              <img
                src="../../pictures/authenticity.png"
                alt="orginal"
                width={"30px"}
              />
            </div>
            <div className="flex flex-col mr-4 p-4 border-r border-black text-gray-600">
              <p className="text-sm">100% genuine</p>
              <p className="text-sm">medicines</p>
            </div>

            <div className="secure">
              <img
                src="../../pictures/credit-card (1).png"
                alt="Payments"
                width={"30px"}
              />
            </div>
            <div className="flex flex-col mr-4 p-4 border-r border-black text-gray-600">
              <p className="text-sm">Safe & secure</p>
              <p className="text-sm">payments</p>
            </div>

            <div className="return">
              <img
                src="../../pictures/return.png"
                alt="Return"
                width={"30px"}
              />
            </div>
            <div className="flex flex-col mr-4 p-4 text-gray-600">
              <p className="text-sm">15 days easy</p>
              <p className="text-sm">returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details  mx-10 bg-gray-50 rounded-3xl m-4 p-4">
        <div className="about pb-4">
          <div className="flex gap-4">
            {" "}
            <img
              src="../../pictures/information-button.png"
              alt="orginal"
              width={"30px"}
            />
            <h1 className="font-bold text-xl">About Vicks Vaporub 25 ML</h1>
          </div>
          <p className="text-gray-500 text-md ml-12">
            Camphor Topical, Eucalyptus Oil Topical, and Menthol Topical are
            active components in Vicks Vaporub Ointment. Pain, Warts, Cold
            Sores, Hemorrhoids, Osteoarthritis, Gum Diseases, Plaques, Bleeding
            Gums, Delayed Onset Muscle Soreness, and more disorders are treated
            with Vicks Vaporub Ointment.{" "}
          </p>
        </div>

        <div className="uses pb-4">
          <div className="flex gap-4">
            {" "}
            <img
              src="../../pictures/medicine.png"
              alt="orginal"
              width={"30px"}
            />
            <h1 className="font-bold text-xl">Uses of Vicks Vaporub 25 ML</h1>
          </div>
          <p className="text-gray-500 text-md ml-12">
            Vicks Vapourab is used in treatment of Pain Warts Cold sores
            Hemorrhoids Osteoarthritis Gum diseases Plaques Bleeding gums
            Delayed onset muscle soreness
          </p>
        </div>

        <div className="directions ">
          <div className="flex gap-4">
            {" "}
            <img
              src="../../pictures/job-description.png"
              alt="orginal"
              width={"30px"}
            />
            <h1 className="font-bold text-xl">
              Directions for Use of Vicks Vaporub 25 ML
            </h1>
          </div>

          <p className="text-gray-500 text-md ml-12">
            Follow the instructions written on the packaging. To treat a cough,
            rub Vicks VapoRub on your chest—never under your nostrils. To treat
            muscle aches, rub Vicks VapoRub directly over the muscle. Vicks
            VapoRub should never be used internally or in a manner not directed.
            Do not use it on broken skin or burns.
          </p>

          <div className="expiry flex pt-4  gap-4">
            <img
              src="../../pictures/deadline.png"
              alt="Expire"
              width={"30px"}
            />
            <p className="font-bold text-xl ">
              Expires :
              <span className="font-bold text-xl pl-1 text-red-400">
                Oct-26
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
