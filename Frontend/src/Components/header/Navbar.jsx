import { NavLink } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/productsAPI";

export default function Navbar() {
  const { data, isLoading } = useGetAllCategoriesQuery();

  return (
    <div className="main-container  md:flex md:items-center md:gap-5 md:mx-10">
      {/* Categories Section */}
      <div className="categories-section hidden md:flex items-center border-r-2 border-zinc-500 font-serif text-black md:text-white">
        <span className="text-[#3E5C75] text-xl py-2 px-3 font-extrabold">
          CATEGORIES
        </span>
      </div>

      {/* Navigation Bar */}
      <div className="navbar flex gap-2 md:gap-5 items-center overflow-x-auto md:overflow-x-visible max-w-full scrollbar-thin scrollbar-thumb-gray-300">
        {/* Categories */}
        {!isLoading ? (
          data?.categories.map((item) => (
             <NavLink
              key={item}
              to={`/productspage/${item}`}
              className={({ isActive }) =>
                `medicines text-[10px] font-semibold md:text-[12px]  px-[5px] py-[3px] md:px-[16px] md:py-[5px] text-zinc-700 rounded-full bg-white border hover:bg-[#0071BD] hover:text-white hover:shadow-lg whitespace-nowrap ${
                  isActive ? "active-link-class" : ""
                }`
              }
            >
              {item.toUpperCase()}
            </NavLink>
          ))
        ) : (
          <div className=" skeleton-loader animate-pulse flex gap-3">
            <div className=" w-[60px] md:w-[100px] h-[20px] md:h-[32px] rounded-full bg-gray-200 animate-pulse"></div>
            <div className=" w-[60px] md:w-[100px] h-[20px] md:h-[32px] rounded-full bg-gray-200 animate-pulse"></div>
            <div className="w-[60px] md:w-[100px] h-[20px] md:h-[32px] rounded-full bg-gray-200 animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}