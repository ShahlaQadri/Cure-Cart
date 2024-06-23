
import {  NavLink } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/productsAPI";

export default function Navbar() {
  const {data,isLoading} =useGetAllCategoriesQuery()
  
  
  return (
    <div className="main-container hidden md:flex md:items-center md:gap-5 md:mx-10 ">
      <div className="  md:flex md:justify-center md:w-42 md:pt-2 md:pr-5 border-r-2 border-zinc-500 font-serif text-white">
        <span className="text-[#3E5C75] text-xl py-2 px-3 font-extrabold">
        CATEGORIES
        </span>
      </div>
      <div className="navbar  flex gap-5 justify-between items-center border-top-2 border-blue-700 ">
    <div className="main-container md:flex md:items-center md:gap-5 mx-2 md:mx-10 ">
      <div className=" hidden md:flex md:justify-center md:w-42 md:pt-2 md:pr-5 border-r-2 border-zinc-500 font-serif text-white">
        <span className=" text-black text-sm md:text-xl py-2 px-3 font-bold">
          CATEGORIES
        </span>
      </div>
      <div className="navbar  flex gap-2 md:gap-5 items-center border-top-2 border-blue-700 ">
        {/* categories */}
        {
          !isLoading && data?.categories.map((item)=>(<NavLink
          key={item}
            to={`/productspage/${item}`}
            className="medicines text-[8px] md:text-[12px] font-[600]  px-[4px] py-[2px] md:px-[16px] md:py-[5px]  text-zinc-700 rounded-full bg-white border  hover:bg-[#0071BD] hover:text-white hover:shadow-lg"
          >
            {item.toUpperCase()}
          </NavLink>))
        }
        
      </div>
    </div>
  );
}
