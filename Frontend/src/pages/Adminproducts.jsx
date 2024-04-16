import React from "react";
import Adminprofile from "../Components/dashbord/Adminprofile";
// import Adminprotable from "../Components/dashbord/Adminprotable";
import Adminprotable from "../Components/dashbord/Adminprotable"
import { Link } from "react-router-dom";

export default function Adminproducts() {
  return (
    <div className="profilePage flex flex-col  h-[100vh] px-5 py-10 bg-zinc-100">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="w-[20%] h-[90vh]  shadow-l bg-white rounded-lg">
          <Adminprofile />
        </div>

        <div className="main w-[80%] h-[90vh] rounded-lg bg-white">
          <div className="flex items-center w-[89%] justify-between">
            <h1 className="mt-5 ml-10 text-3xl  text-zinc-500 mb-4">
              Products
            </h1>

            <Link to="/admin/products/new">
              <span className="h-10 w-10 rounded-full bg-blue-300 text-3xl flex items-center justify-center ml-[100px]">
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
