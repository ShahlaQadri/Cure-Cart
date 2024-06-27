import Adminprofile from "../Components/dashbord/AdminSideBar";
import Adminprotable from "../Components/dashbord/Adminprotable";
import { Link } from "react-router-dom";

export default function Adminproducts() {
  return (
    <div className="profilePage flex flex-col  h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
      <div className="hidden md:block md:w-[20%] md:h-[90vh] bg-white text-zinc-700  ">
          <Adminprofile />
        </div>

        <div className="main w-[80%] h-[90vh] rounded-lg bg-zinc-50/95">
          <div className="flex items-center w-[89%] justify-between">
            <h1 className="mt-5  text-3xl  text-zinc-500 mb-4">
              Products
            </h1>

            <Link to="/admin/products/new">
              <span className="h-9 w-9 rounded-full bg-[#C70908] text-white text-2xl flex items-center justify-center ml-[100px]">
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
