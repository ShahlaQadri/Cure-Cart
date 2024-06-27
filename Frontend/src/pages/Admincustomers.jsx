import React from "react";
import Adminprofile from "../Components/dashbord/AdminSideBar";
import Admincustable from "../Components/dashbord/Admincustable";
import Adminprotable from "../Components/dashbord/Admincustable";

export default function Admincustomers() {
  return (
    <div className="profilePage flex flex-col h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
      <div className="hidden md:block md:w-[20%] md:h-[90vh] bg-white text-zinc-700  ">
          <Adminprofile />
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
