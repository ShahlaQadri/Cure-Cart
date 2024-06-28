
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {  FcPhone } from "react-icons/fc";

export default function Prescription() {
  return (
    <div className="grid grid-cols-1 gap-10 py-4 mx-4 md:grid md:grid-cols-2 md:gap-14 md:py-2">
      <div className="prescription bg-[#FFEB68] h-[180px] md:h-[300px] w-[50] flex flex-col items-center justify-center rounded-2xl">
        <div className="img-con h-[120px] pt-2 md:h-[180px] w-[90%] bg-white rounded-xl md:mb-6 border-dashed border-2 border-zinc-500 pl-8 md:pt-4">
          <h1 className="w-3/4 font-bold text-xl md:mb-2 md:mx-4 md:mt-4 md:text-2xl">
            Upload prescription to place order
          </h1>
          <p className="md:mx-4 text-xs font-semibold text-zinc-500 md:my-2">
            Upload only .jpg .png or .pdf files <br />
            Size limit is 15 MB
          </p>
        </div>

        <div className="items-center w-full  px-5 md:px-10 gap-2 flex">
          <Link
            to="/upload-presciption"
            className=" bg-black mt-2 rounded-full md:mt-2 w-5 h-5 p-4 md:w-8 md:h-8 md:p-5 flex items-center justify-center text-sm "
          >
            <span>
            <BsFileEarmarkArrowUpFill className="text-white" />
            </span>
          </Link>

          <Link
            to="/upload-presciption"
            className="button bg-black mt-2 text-white px-3 py-2 md:mt-2 md:px-5 md:py-3 rounded-full text-xs"
          >
            Order Via Presciption 
          </Link>
        </div>
      </div>

      <div className="contact-us bg-blue-200 h-[180px] md:h-[300px] w-[50] flex flex-col items-center justify-center rounded-2xl">
  <div className="flex items-center justify-center md:justify-start">
    <div className=" md:mt-0 md:mr-6">
      <img
        className="h-[100px]  md:h-[200px] rounded-lg"
        src="../../pictures/weekday-young-woman-busy-with-her-work-in-office.gif"
        alt="Young woman busy in office"
      />
    </div>
    <div className="text-center md:text-left mx-2">
      <h2 className="font-bold text-xl md:text-2xl md:mb-4 mb-1">Contact Us</h2>
      <p className="text-xs text-gray-800 md:mb-2 md:text-lg leading-none font-semibold">Call us to order medicines</p>
      <p className="text-lg text-green-600 font-bold md:mb-2 leading-tight">7006622199</p>
      <p className="text-xs text-gray-800 leading-none md:text-lg font-semibold">Working hours: 9am to 9pm</p>
    </div>
  </div>
  <div className="items-center w-full mt-1 px-5 md:px-10 gap-2 flex">
  <a
      href="tel:+917006622199" 
      className="bg-black rounded-full md:mt-2 w-5 h-5 p-4 md:w-8 md:h-8 md:p-5 flex items-center justify-center text-md"
      aria-label="Call us" // Optional: Improves accessibility for screen readers
    >
      <span>
        <FcPhone className="text-white" />
      </span>
    </a>


          <Link
            to="/"
            className="button bg-black  text-white px-3 py-2 md:mt-2 md:px-5 md:py-3 rounded-full text-xs"
          >
            Order on Whatsapp 
          </Link>
        </div>
</div>


    </div>
  );
}


