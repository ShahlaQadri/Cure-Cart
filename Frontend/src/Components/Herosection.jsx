import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";

function Herosection() {
  return (
    <div className="slider rounded-3xl md:h-[26rem] h-[15rem] w-full flex flex-row md:flex-row text-[#3E5C75] bg-[#B0E5F2] overflow-hidden">
      <div className=" w-[50%] md:w-[60%] md:ml-0 ml-1 left flex flex-col justify-center  px-2 py-4  md:py-12 space-y-2 md:space-y-8 md:pl-[9rem]">
         
       <div className="headings md:mt-0 mt-10 z-10  ">
       
       <h1 className="text-xl  leading-5 font-extrabold md:leading-none md:text-[3.5rem]">
          True Healthcare
        </h1>
        <h1 className="text-xl  leading-5 font-extrabold md:leading-none md:text-[3.5rem]">
          For your Family
        </h1>
        <p className="  md:w-[70%] mt-1 md:mt-3  text-white md:font-semibold text-[8px] md:leading-4   md:text-sm ">
          Empowering your family with top-quality health services and products, right at your fingertips
        </p>
       </div>
        {/* <p className="3/4 mx-4 text-center md:text-center md:text-2xl">
          Get up to 18% OFF on Diabetes Care{" "}
        </p> */}
        <div className="flex items-center  gap-1  md:gap-5">
          <Link to="/productspage/medicines" className="text-white flex gap-1 items-center rounded-full w-[5rem] text-[8px] bg-[#0071BC] px-2 py-1  md:px-10 md:py-2 md:my-0   md:mx-0 md:text-[16px] md:w-[12rem]">
         <FaShopify/> Shop Now
        </Link>
        <Link to="/cart" className="p-2 md:p-2 text-white text-[8px] md:text-2xl md:font-extrabold rounded-full mt-[-2] bg-[#0071BC] "> <FaOpencart className="font-extrabold hover:rotate-6"/></Link></div>
      </div>
      <div className="right w-[50%] md:w-[40%] md:mr-28   ">
        <img
          className="w-full h-full object-fill  md:w-[36rem]  md:mx-8"
          src="../../pictures/doctor_PNG16021.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Herosection;
