import  { useState } from "react";
import Profile from "../Components/Profile";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from 'react-redux';
import UpdateProfileForm from "../Components/UpdateProfileForm";
import ChangePasswordForm from "../Components/ChangepasswordForm";

export default function Profilepage() {
  const user = useSelector((state) => state.userReducer.user);
  const [isEditing, setIsEditing] = useState(false); // State to manage form visibility
  const [changepassword, setChangePassword] = useState(false)

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle the visibility state
  };
  const handleChangePassword = () => {
    setChangePassword(!changepassword); // Toggle the visibility state
  };

  return (
    <div className="profilePage  flex flex-col md:flex-row px-0 md:px-5 mx-auto gap-5 w-[90%]">
      <div className="mb-0 md:mb-10 flex gap-10  w-full md:w-[25%]">
        <Profile />
      </div>
      
      <div className="main h-[90vh] w-full md:w-[75%] rounded-lg">
  <h1 className="mt-5 ml-5 text-3xl md:text-4xl font-bold l text-zinc-500 mb-4">Account Information</h1>
  <div className="bg-gray-100 pb-5">
  <div className="information rounded-lg flex flex-col md:flex-row bg-gray-100 md:bg-opacity-95">
    <div className="login p-5 w-full md:w-[50%]">
      <p className="text-lg font-semibold text-gray-800 mb-4">Login Information</p>
      <div className="email mb-4 ml-4">
        <p className="text-sm font-medium text-blue-600">Email</p>
        <p className="text-gray-800">{user?.email}</p>
      </div>
      
      <div className="fullname  ml-4">
        <p className="text-sm font-medium text-blue-600">User Name</p>
        <p className="text-gray-800">{user?.name}</p>
      </div>
    </div>

    <div className="info p-5  w-full md:w-[50%]">
      <p className="text-lg font-semibold text-gray-800 mb-4">Personal Information</p>
      <div className="number mb-4 ml-4">
        <p className="text-sm font-medium  text-blue-600">Mobile Number</p>
        <p className="text-gray-800">{user?.phone}</p>
      </div>
      <div className="gender ml-4">
        <p className="text-sm font-medium text-blue-600">Gender</p>
        <p className="text-gray-800 capitalize">{user?.gender}</p>
      </div>

      
    </div>
    
  </div>
  <div className="button mx-4 md:mx-10 my-5 mt-6 flex items-center justify-between">
        <button onClick={handleChangePassword} className="md:text-sm underline  text-xs font-medium text-blue-600">Change password</button>
        <button
          onClick={handleEditClick}
          className="bg-[#2485C5] md:mr-[30%] hover:bg-[#2b7eb5] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white flex items-center gap-2 md:px-6 px-3 py-2 rounded-md text-sm"
        >
          <AiFillEdit />
          Edit Profile
        </button>
      </div>
  </div>

  {/* Conditionally render the UpdateProfileForm */}
  {isEditing && (
    <div className="update-form mt-5 absolute top-[10%] left-10 md:top-20 md:left-[40%]">
      <UpdateProfileForm setIsEditing={setIsEditing} />
    </div>
  )}

{changepassword && (
    <div className="update-form mt-5 absolute top-[20%] left-16 md:top-32 md:left-[40%]">
      <ChangePasswordForm setChangePassword={setChangePassword} />
    </div>
  )}
</div>



    </div>
  );
}
