import  { useState } from "react";

import Admincustable from "../Components/dashbord/Admincustable";
import AdminSideBar from "../Components/dashbord/AdminSideBar";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Admincustomers() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="profilePage flex flex-col h-[90vh] bg-zinc-50/95">
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

        <div className="main w-[80%] bg-zinc-50/95 h-[90vh] rounded-lg">
          <h1 className="mt-5  text-3xl  text-zinc-500 mb-4">
            {" "}
            Our Customers
          </h1>
          <Admincustable />
        </div>
      </div>
    </div>
  );
}
