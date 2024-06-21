import React, { useState } from "react";
import Profile from "../Components/Profile";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from 'react-redux';
import UpdateProfileForm from "../Components/UpdateProfileForm";

export default function Profilepage() {
  const user = useSelector((state) => state.userReducer.user);
  const [isEditing, setIsEditing] = useState(false); // State to manage form visibility

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle the visibility state
  };

  return (
    <div className="profilePage flex flex-col md:flex-row px-8 md:px-5 mx-auto gap-5 w-[90%]">
      <div className="mb-4 md:mb-10 flex gap-10  w-full md:w-[25%]">
        <Profile />
      </div>
      
      <div className="main h-[90vh] w-full md:w-[75%] rounded-lg">
        <h1 className="mt-5 ml-5 text-3xl text-zinc-500 mb-2 md:mb-4">Account Information</h1>
        <div className="information rounded-lg flex flex-col md:flex-row bg-zinc-50/95">
          <div className="login p-5 w-full md:w-[50%]">
            <p className="text-md text-gray-600">LOGIN INFORMATION</p>
            <div className="email mt-4 ml-4">
              <p className="text-green-600 text-sm">EMAIL</p>
              <p>{user?.email}</p>
            </div>
            <div className="number mt-4 ml-4">
              <p className="text-green-600 text-sm">MOBILE NUMBER</p>
              <p>{user?.phone}</p>
            </div>
          </div>

          <div className="info p-5 w-full md:w-[50%]">
            <p className="text-md text-gray-600">PERSONAL INFORMATION</p>
            <div className="fullname mt-4 ml-4">
              <p className="text-green-600 text-sm">USER NAME</p>
              <p>{user?.name}</p>
            </div>
            <div className="gender mt-4 ml-4">
              <p className="text-green-600 text-sm">GENDER</p>
              <p>{user?.gender}</p>
            </div>

            <div className="button mt-10 flex">
              <button
                onClick={handleEditClick} // Add the click handler here
                className="bg-[#2787C7] flex items-center gap-2 px-10 py-2 text-white"
              >
                <AiFillEdit />
                EDIT PROFILE
              </button>
            </div>
          </div>
        </div>

        {/* Conditionally render the UpdateProfileForm */}
        {isEditing && (
          <div className="update-form mt-5 absolute top-20 left-[40%]">
            <UpdateProfileForm setIsEditing={setIsEditing} />
          </div>
        )}
      </div>
    </div>
  );
}
