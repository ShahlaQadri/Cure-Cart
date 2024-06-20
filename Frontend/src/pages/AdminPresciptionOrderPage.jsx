import AdminPresciptiontable from "../Components/dashbord/AdminPresciptiontable";
import Adminprofile from "../Components/dashbord/AdminSideBar";

import { Link } from "react-router-dom";

export default function AdminPresciptionOrderPage() {
  return (
    <div className="profilePage flex flex-col  h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="w-[20%] h-[90vh]  shadow-l bg-white ">
          <Adminprofile />
        </div>

        <div className="main w-[80%] h-[90vh] rounded-lg bg-zinc-50/95">
          <div className="flex items-center w-[89%] justify-between">
            <h1 className="mt-5  text-3xl  text-zinc-500 mb-4">
              Presciption Orders
            </h1>         
          </div>
          <AdminPresciptiontable />
        </div>
      </div>
    </div>
  );
}
