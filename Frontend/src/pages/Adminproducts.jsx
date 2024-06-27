import { GiHamburgerMenu } from "react-icons/gi";
import Adminprotable from "../Components/dashbord/Adminprotable";
import { Link } from "react-router-dom";
import AdminSideBar from "../Components/dashbord/AdminSideBar";
import { useState } from "react";

export default function Adminproducts() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profilePage flex flex-col  h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
      <button
        className="block md:hidden absolute  top-20 z-50 right-8 p-2 text-gray-700 bg-gray-200 rounded-full"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu size={24} />
      </button>
        <div className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative top-[6rem] md:top-auto right-0 z-50 md:z-auto w-[100%] h-screen  mx-auto justify-center items-center bg-white shadow-lg md:shadow-none rounded-lg md:rounded-none  md:w-[20%] md:h-[90vh]  text-zinc-700`}
      >
          <AdminSideBar setIsOpen={setIsOpen} />
        </div>

        <div className="main w-[80%] h-[90vh] rounded-lg bg-zinc-50/95">
          <div className="flex items-center w-[89%] justify-between">
            <h1 className="mt-5  text-3xl  text-zinc-500 mb-4">
              Products
            </h1>

            <Link to="/admin/products/new">
              <span className="h-9 w-9 rounded-full bg-[#C70908] text-white text-2xl flex items-center justify-center ml-[100px]">
                +
              </span>
            </Link>
          </div>
          <Adminprotable />
        </div>
      </div>
    </div>
  );
}
