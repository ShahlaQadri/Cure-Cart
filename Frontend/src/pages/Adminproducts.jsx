import React from "react";
import Adminprofile from "../Components/dashbord/Adminprofile";
// import Adminprotable from "../Components/dashbord/Adminprotable";
import Adminprotable from "../Components/dashbord/Adminprotable"

export default function Adminproducts() {
  return (
    <div className="profilePage flex flex-col h-[90vh]">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="w-[20%] h-[90vh] shadow-l ">
          <Adminprofile />
        </div>

        <div className="main w-[80%] h-[90vh] rounded-lg">
          <h1 className="mt-5 ml-10 text-3xl  text-zinc-500 mb-4">Products</h1>
          <Adminprotable />
        </div>
      </div>
    </div>
  );
}
