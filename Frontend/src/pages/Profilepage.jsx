import React from "react";
import Profile from "../Components/Profile";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export default function Profilepage() {
  return (
    <div className="profilePage flex px-5  mx-auto gap-5 w-[90%]">
      <div className="mb-10 flex gap-10 w-[25%]  ">
        <Profile />
      </div>
      <div className="main  h-[90vh] w-[85%]  rounded-lg">
        <h1 className="mt-5  ml-5 text-3xl  text-zinc-500 mb-4">Account Information</h1>
        <div className="information rounded-lg flex bg-zinc-50/95">
          <div className="login p-5 w-[50%]">
            <p className="text-md text-gray-600">LOGIN INFORMATION</p>
            <div className="email mt-4 ml-4">
              <p className="text-green-600 text-sm">EMAIL</p>
              <p>sofisalman9906@gmail.com</p>
            </div>
            <div className="number mt-4 ml-4">
              <p className="text-green-600 text-sm">MOBILE NUMBER</p>
              <p>+91-7006622199</p>
            </div>
          </div>

          <div className="info p-5 w-[50%]">
            <p className="text-md text-gray-600">PERSONAL INFORMATION</p>
            <div className="fullname mt-4 ml-4">
              <p className="text-green-600 text-sm">FULL NAME</p>
              <p>Salman Arif</p>
            </div>
            <div className="gender mt-4 ml-4">
              <p className="text-green-600 text-sm">GENDER</p>
              <p>Male</p>
            </div>

            <div className="button mt-10 flex ">
              <button className="bg-[#2787C7] flex items-center gap-2 px-10 py-2 text-white">
                <AiFillEdit />
                EDIT PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
