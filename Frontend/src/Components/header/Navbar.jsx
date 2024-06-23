import { NavLink } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/productsAPI";

export default function Navbar() {
  const { data, isLoading } = useGetAllCategoriesQuery();

  return (
    <div className="main-container  md:flex md:items-center md:gap-5 md:mx-10">
      {/* Categories Section */}
      <div className="categories-section hidden md:flex items-center border-r-2 border-zinc-500 font-serif text-black md:text-white">
        <span className="text-[#3E5C75] text-xl py-2 px-3 font-extrabold">
    <div className="main-container md:flex md:items-center md:gap-5 mx-2 md:mx-10 ">
      <div className=" hidden md:flex md:justify-center md:w-42 md:pt-2 md:pr-5 border-r-2 border-zinc-500 font-serif text-white">
        <span className=" text-black text-sm md:text-xl py-2 px-3 font-bold">
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
                `medicines text-[8px] md:text-[12px] font-[600] px-[4px] py-[2px] md:px-[16px] md:py-[5px] text-zinc-700 rounded-full bg-white border hover:bg-[#0071BD] hover:text-white hover:shadow-lg whitespace-nowrap ${
                  isActive ? "active-link-class" : ""
                }`
              }
            >
              {item.toUpperCase()}
            </NavLink>
          ))
        ) : (
          <div className="text-gray-500 text-sm">Loading categories...</div>
        )}
      </div>
    </div>
  );
}
