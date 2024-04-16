import React from "react";
import Adminprofile from "../Components/dashbord/Adminprofile";
import Admincustable from "../Components/dashbord/Admincustable";
import Adminprotable from "../Components/dashbord/Admincustable";

export default function Admincustomers() {
  return (
    <div className="profilePage flex flex-col h-[100vh] px-5 py-10 bg-zinc-100">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="w-[20%] bg-white  rounded-lg h-[90vh] shadow-l ">
          <Adminprofile />
        </div>

        <div className="main w-[80%] bg-white h-[90vh] rounded-lg">
          <h1 className="mt-5 ml-10 text-3xl  text-zinc-500 mb-4">
            {" "}
            Our Customers
          </h1>
          <Admincustable />
        </div>
      </div>
    </div>
  );
}
