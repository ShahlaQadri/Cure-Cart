import React from "react";
import Adminprofile from "../Components/dashbord/AdminSideBar";
import Addproductsform from "../Components/Addproductsform";

export default function AdminAddProduct() {
  return (
    <div className="profilePage flex bg-zinc-50/95 flex-col h-[90vh] ">
      <div className="mx-auto flex gap-5 w-full ">
        <div className="w-[20%] bg-white shadow-sm  h-[90vh]">
          <Adminprofile />
        </div>

        <div className="main w-[80%] bg-zinc-50/95 h-[90vh]  flex flex-row gap-4 ">
          <Addproductsform />
        </div>
      </div>
    </div>
  );
}
