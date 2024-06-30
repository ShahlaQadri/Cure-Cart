import Addproductsform from "../Components/Addproductsform";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminSideBar from "../Components/dashbord/AdminSideBar";

export default function AdminAddProduct() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profilePage flex bg-zinc-50/95 flex-col h-[90vh] ">
      <div className="mx-auto flex gap-10 w-full ">
      <button
        className="block md:hidden absolute  top-28 z-50 right-8 p-2 text-gray-700 bg-gray-200 rounded-full"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu size={24} />
      </button>
        <div className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative top-[6rem] md:top-auto right-0 z-50 md:z-auto w-[100%] h-screen  md:w-[20%] md:h-[90vh]  text-zinc-700 mx-auto justify-center items-center bg-white shadow-lg md:shadow-none rounded-lg md:rounded-none`}
      >
          <AdminSideBar setIsOpen={setIsOpen} />

        </div>

        <div className="main w-full md:w-[80%] bg-zinc-50/95 h-[90vh]  flex flex-row gap-4 ">
          <Addproductsform />
        </div>
      </div>
    </div>
  );
}
