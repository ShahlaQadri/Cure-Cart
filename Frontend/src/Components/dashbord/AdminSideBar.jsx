import { FaUsers } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { RiCoupon3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function AdminSideBar() {
  const {user} = useSelector((state)=>state.userReducer)
  return (
    <div className="aside relative h-[90vh]  px-3 pl-7 pt-6 overflow-hidden    shadow-r-xl text-zinc-700 font-extralight">
      {/* <img src="../../../pictures/smalllogo.png" alt="Cure Cart" height={10} width={150} /> */}
      <div className="options  rounded-lg ">
        <ul className="font-lighter">
          <li className="text-zinc-400 leading-10 tracking-wider text-sm">
            DASHBOARD
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/dashboard")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/dashboard")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400    "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <MdSpaceDashboard className="text-[17px]" />
            </div>
            <Link to="/admin/dashboard" className="">
              Dashboard
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/products")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/products")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1  my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center">
              <BsBagCheckFill className="text-[17px]" />
            </div>
            <Link to="/admin/products" className="">
              Product
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/customers")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/customers")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px]  hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <FaUsers className="text-[17px]" />
            </div>
            <Link to="/admin/customers" className="">
              Customer
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/transactions")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/transactions")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <BsBoxSeamFill className="text-[17px]" />
            </div>
            <Link to="/admin/transactions" className="">
              Orders
            </Link>
          </li>

          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/presciptions")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/presciptions")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <BsBoxSeamFill className="text-[17px]" />
            </div>
            <Link to="/admin/presciptions" className="">
               Presciption Orders
            </Link>
          </li>
        </ul>

        <ul className="font-lighter">
          <li className="text-zinc-400 leading-10 tracking-wider text-sm">
            APPS
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/coupon")
                ? "#DBEAFE"
                : "white",
              color: location.pathname.includes("/admin/coupon")
                ? "#2f85ed"
                : "#63636b",
            }}
            className="flex items-center gap-1 px-4 py-1 my-1 rounded-lg text-[14px] font-medium hover:bg-blue-100 hover:text-blue-400  "
          >
            <div className="icon text-2xl  rounded-full w-8 h-8  flex items-center justify-center ">
              <RiCoupon3Fill className="text-[16px]" />
            </div>
            <Link to="/admin/coupon" className="">
              Coupon
            </Link>
          </li>
        </ul>
        <div className="profile absolute bottom-0 mb-4 w-full left-0 border-t border-gray-300  items-center flex p-1">
          <div className="icon text-5xl ml-6  bg-white w-14 h-14 text-slate-900 flex items-center justify-center ">
            <img
              src="../../pictures/dashboard user.jpg"
              alt=""
              className="h-14 w-14  rounded-full -zindex-1 "
            />
          </div>
          <div className="ml-2 ">
            <p className="font-bold text-md ">{user?.name}</p>
            <p className="text-gray-600 text-xs">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
