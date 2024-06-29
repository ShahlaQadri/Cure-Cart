
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteOrderMutation, useOrderDetailsQuery, useUpdateOrderMutation } from "../redux/api/ordersAPI";
import { responseToste } from "../utils/Features";
// import Manageform from "../Components/Manageform";
import { IoTrashBin } from "react-icons/io5";
import { server } from "../main";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminSideBar from "../Components/dashbord/AdminSideBar";

export default function AdminManageOrder() {
  const {id} = useParams()
  const navigate = useNavigate()
  // console.log(id)
  const {data} = useOrderDetailsQuery(id)
  const [processOrder] = useUpdateOrderMutation()
  const [deleteOrder] = useDeleteOrderMutation()
  // console.log(data?.order)
  const processOrderHandler = async()=>{
    // console.log("order processed")
     const res = await processOrder(id)
     
    responseToste(res,navigate,"/admin/transactions")
    // console.log(res)
  }
  const deleteOrderHandler=async()=>{
    // console.log("product deleted",id)
    const res = await  deleteOrder(id)
    responseToste(res,navigate,"/admin/transactions")
  }
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profilePage flex flex-col   h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
      <button
        className="block md:hidden absolute  top-28 z-50 right-8 p-2 text-gray-700 bg-gray-200 rounded-full"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu size={24} />
      </button>
        <div className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative top-[6rem] md:top-auto right-0 z-50 md:z-auto w-[100%] h-screen  md:w-[20%] md:h-[90vh]  text-zinc-700 mx-auto justify-center items-center bg-white shadow-lg md:shadow-none rounded-lg md:rounded-none`}
      >
          <AdminSideBar setIsOpen={setIsOpen} />

        </div>


        <div className="main w-full md:w-[80%]  h-screen rounded-lg justify-center flex flex-col md:flex-row gap-4 bg-zinc-50/95 px-4 py-4 ">
          <div className="w-full md:w-[45%]   h-[40vh] md:h-[75vh] bg-white shadow-lg rounded">
          <button onClick={deleteOrderHandler} className="h-9 w-9 absolute md:top-[152px] md:right-[150px] right-8 top-[160px]
                rounded-full bg-[#200a0a] hover:text-red-500 text-white text-xl flex items-center justify-center ml-[100px]">
                <IoTrashBin />

              </button>
            <h2 className="text-2xl  py-6 mt-5 text-center text-zinc-500">
              ORDER ITEMS
            </h2>
           <div className="orderitems-container  "> 
            {
              data?.order.orderItems.map((item) => (
                <div key={item.productId} className="flex items-center  justify-evenly mb-4 md:px-10 px-4">
                  <img
                    src={`${server}${item.photo}`}
                    alt="Product"
                    className="w-16 h-16 "
                  />
                  <div className="px-1 ml-6 flex  text-sm  text-zinc-700">
                    <p className="name ">{item.name}</p>
                    <p className=" ml-4 md:ml-10">
  <span className="price">{item.price}</span> * {item.quantity}{" "}
</p>
                    <span className="mx-2">=</span>
                    <p className="total text-sm font-semibold">{item.price*item.quantity}</p>
                  </div>
                </div>))
            }</div>

          </div>
          <div className="w-full md:w-[30%] h-[60vh] md:h-[75vh] bg-white shadow-lg rounded px-2">
            <h2 className="text-2xl mt-2 md:mt-6 py-6 text-center text-zinc-500">
              ORDER INFO
            </h2>
            <h2 className="text-md font-semibold text-zinc-800 pl-4 mt-1 md:mt-5">
              User Info
            </h2>
            <ul className="pl-4 ml-3 text-sm text-zinc-500">
              <li>
                <span className=" ">Name:</span> {data?.order.shippingInfo.name}
              </li>
              <li>
                <span className="">Address:</span> {data?.order.shippingInfo.address} {data?.order.shippingInfo.pincode}, {data?.order.shippingInfo.city}, {data?.order.shippingInfo.country}
              </li>
              <li>
                <span className=" ">Contact No:</span> {data?.order.shippingInfo.phone}
              </li>
            </ul>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-5">
              Amount Info
            </h2>
            <ul className="pl-4 text-sm text-zinc-600 ml-3">
              <li>Subtotal: ₹{data?.order.subtotal}</li>
              <li>Shipping Charges: ₹{data?.order.shippingCharges}</li>
              <li>Tax: ₹{data?.order.tax}</li>
              <li>Discount: -₹{data?.order.discount}</li>
              <li>Total: ₹{data?.order.total}</li>
            </ul>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-5">
              Status Info
            </h2>
            <ul className="flex pl-4 ml-3 text-sm space-x-2">
              <li>Status :</li>
              <li className="text-red-600"> {data?.order.status}</li>
            </ul>
            <div className="px-4 mt-2 md:mt-10">
              <button onClick={processOrderHandler} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded md:mt-4 w-full">
                Process Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
