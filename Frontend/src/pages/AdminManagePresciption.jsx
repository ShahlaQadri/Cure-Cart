import {  useNavigate, useParams } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDeletePresciptionOrderMutation, usePresciptionOrderDetailsQuery, useUpdatePresciptionOrderMutation } from "../redux/api/presciptionAPI";
import { responseToste } from "../utils/Features";
import { IoTrashBin } from "react-icons/io5";
import { server } from "../main";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminSideBar from "../Components/dashbord/AdminSideBar";

const CallLink = ({ phoneNumber }) => {
    return (
      
        <div className="p-2 bg-green-500 rounded-full text-white"> <a href={`tel:${phoneNumber}`}><MdAddIcCall className="text-2xl" /></a></div>
      
    );
  };
 
export default function AdminManagePresciption() {
  const navigate = useNavigate()
  const {id} =useParams()
  const {data } = usePresciptionOrderDetailsQuery(id)
  const [processOrder] = useUpdatePresciptionOrderMutation()
  const [deletepresciptionOrder] = useDeletePresciptionOrderMutation()

  const processOrderHandler = async()=>{
    // console.log("order processed")
     const res = await processOrder(id)
     
    responseToste(res,navigate,"/admin/prescriptions")
    // console.log(res)
  }

  const deleteOrderHandler=async()=>{
    // console.log("product deleted",id)
    const res = await  deletepresciptionOrder(id)
    console.log(res)
    responseToste(res,navigate,"/admin/presciptions")
  }
  const [product, setProduct] = useState()
  useEffect(() => {
    setProduct(data?.product)
  
    
  }, [data])
  
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


        <div className="main w-full md:w-[80%]  h-screen rounded-lg justify-center flex flex-col md:flex-row  gap-4 bg-zinc-50/95 px-4 py-4 ">
          <div className="w-full md:w-[45%]   h-[40vh] md:h-[75vh] bg-white shadow-lg rounded">
          <button onClick={deleteOrderHandler} className="h-9 w-9 absolute md:top-[152px] md:right-[150px] right-8 top-[160px]
                rounded-full bg-[#200a0a] hover:text-red-500 text-white text-xl flex items-center justify-center ml-[100px]">
                <IoTrashBin />

              </button>
            <h2 className="text-2xl  py-6 mt-0 md:mt-5 text-center text-zinc-500">
              Prescription
            </h2>
           <div className="prescription-container  "> 
           <img src={`${server}${data?.orderDetails.presciption}`} alt="" />


            </div>

          </div>
          <div className="w-full md:w-[30%] h-[60vh] md:h-[75vh] bg-white shadow-lg rounded px-2">
          <h2 className="text-2xl  py-6 text-center text-zinc-500">
              ORDER INFO
            </h2>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-0 md:mt:5">
              User Info
            </h2>
            <ul className="pl-4 ml-3 text-sm text-zinc-500">
              <li>
                <span className=" ">Name:</span> {data?.orderDetails.user.name}
              </li>
              <li>
                <span className="">Email:</span> {data?.orderDetails.user.email}  
              </li>
              <li>
                <span className=" ">Contact No:</span> {data?.orderDetails.user.phone}
              </li>
            </ul>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-5">
              Shipping Info
            </h2>
            <ul className="pl-4 text-sm text-zinc-600 ml-3">
              <li>Name: {data?.orderDetails.shippingInfo.name}</li>
              <li> Address: {data?.orderDetails.shippingInfo.address}</li>
              <li>City: {data?.orderDetails.shippingInfo.city}</li>
              <li>Country: {data?.orderDetails.shippingInfo.country}</li>
              <li>Phone: {data?.orderDetails.shippingInfo.phone}</li>
              <li>Pincode: {data?.orderDetails.shippingInfo.pincode}</li>
              
            </ul>
            <h2 className="text-md font-semibold text-zinc-800 pl-4  mt-5">
              Status Info
            </h2>
            <ul className="flex pl-4 ml-3 text-sm space-x-2">
              <li>Status :</li>
              <li className="text-red-600">{data?.orderDetails.status}</li>
            </ul>
            <div className="px-4 mt-10 flex items-center gap-5">
            <CallLink phoneNumber={data?.orderDetails.user.phone}/>
              <button onClick={processOrderHandler} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded w-full">
                Process Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
