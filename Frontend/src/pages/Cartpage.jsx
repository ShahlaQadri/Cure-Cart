import React from "react";
import { MdDelete } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Cartpage() {
  return (
    <div className="">
      <div className="relative w-full">
        <Link
          to="/"
          className="absolute top-3 left-20 bg-white rounded-full shadow-lg p-4"
        >
          <TiArrowBack className="text-3xl" />
        </Link>
      </div>
      <div className="flex  h-[68vh] bg-white mb-20  rounded-lg  w-[80%] mx-auto">
        <main className="left w-[65%]  h-full overflow-auto mt-10">
          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div4.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">Vicks Vaporub 25 ML</p>
              <p className="font-bold text-xs p-1">$24.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <span className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </span>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>

          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div1.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">HK Vitals 100 Tablets</p>
              <p className="font-bold text-xs p-1">$49.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <button className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </button>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>

          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div2.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">Cetaphil Facewash 50 ML</p>
              <p className="font-bold text-xs p-1">$52.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <button className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </button>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>
          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div2.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">Cetaphil Facewash 50 ML</p>
              <p className="font-bold text-xs p-1">$52.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <button className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </button>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>
          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div2.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">Cetaphil Facewash 50 ML</p>
              <p className="font-bold text-xs p-1">$52.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <button className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </button>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>
          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div2.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">Cetaphil Facewash 50 ML</p>
              <p className="font-bold text-xs p-1">$52.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <button className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </button>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>
          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div2.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">Cetaphil Facewash 50 ML</p>
              <p className="font-bold text-xs p-1">$52.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <button className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </button>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>
          <div className="product flex justify-center items-center">
            <div className="img-div w-[15%]">
              <img
                className="h-30 w-20 p-3 ml-6"
                src="pictures/div2.png"
                alt=""
              />
            </div>

            <div className="detail-div w-[55%] bg-white ml-2">
              <p className="text-sm p-1">Cetaphil Facewash 50 ML</p>
              <p className="font-bold text-xs p-1">$52.00</p>
            </div>

            <div className="quantity-div w-[15%] text-center">
              <button className="bg-gray-200  px-[6px] py-[2px] text-sm font-bold  rounded-sm">
                -
              </button>
              <button className="bg-white p-1 mx-2 font-semibold text-xs">
                1
              </button>
              <button className="bg-gray-200 px-1  font-bold  rounded-sm">
                +
              </button>
            </div>

            <div className="delete w-[15%]">
              <MdDelete className="text-2xl ml-6" />
            </div>
          </div>
        </main>

        <aside className="right w-[35%] h-[500px]  rounded-lg">
          <div className="details p-6 mt-[80px] ml-16">
            <h1 className=" flex gap-2 items-center font-extralight mb-5">
              {" "}
              <img
                src="../../pictures/discount.png"
                alt="Payments"
                width={"30px"}
              />
              PAYMENT DETAILS
            </h1>
            <div className="font-thin text-md flex flex-col gap-3 text-zinc-500">
              <p>Subtotal : $34567</p>
              <p>Shipping Charges : $0</p>
              <p>Tax : $87</p>
              <p>
                Discount : <span className="text-red-500">$99</span>
              </p>
              <p className="text-md font-black text-green-400">
                Total : $35464
              </p>
            </div>

            <div className="mt-10 w-full">
              <input
                type="text"
                placeholder={` Coupon code`}
                className="border w-[80%] border-black py-2 px-2"
              />
            </div>
            <button className="w-[80%] px-10 py-2 mt-4 bg-[#0071BC] text-white text-md space">
              CHECKOUT
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
