import { useParams } from "react-router-dom";
import Manageform from "../Components/Manageform";
import { useGetProductDetailsQuery } from "../redux/api/productsAPI";
import { useEffect, useState } from "react";
import { server } from "../main";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminSideBar from "../Components/dashbord/AdminSideBar";

export default function AdminManageproducts() {
  const {id} =useParams()
  const {data } = useGetProductDetailsQuery(id)
  // console.log("edit",data?.product.name)
  
  const [product, setProduct] = useState()
  useEffect(() => {
    setProduct(data?.product)
  
    
  }, [data])
  console.log(product)

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="profilePage flex flex-col my-4  h-[90vh] bg-zinc-50/95">
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

        <div className="main  md:w-full rounded-lg flex flex-col md:flex-row md:gap-4 gap-1 bg-zinc-50/95 px-4 py-4">
  <div className="picture mx-auto w-full md:w-[30%] bg-white md:h-[80vh] h-25vh shadow-lg rounded mb-4">
    <div className="bg-white py-2 relative">
      <div className="px-4 py-2 flex justify-end">
        <div className="rounded-full mb-3 flex items-end bg-[#E3F6EE] text-sm text-green-400 w-fit px-4 py-1 border-2 border-green-400">
          {product?.stock} Available
        </div>
      </div>
      <div className="id ml-6 my-2 mb-10 rounded-full flex items-end bg-zinc-200 text-xs text-zinc-700 w-fit px-4 py-1">
        ID: {product?._id}
      </div>
      <div className="flex justify-center md:justify-center mt-0 md:mt-16 items-center">
        <img
          src={`${server}${product?.photo}`}
          alt="Product Name"
          className="md:h-64 h-32 object-cover"
        />
      </div>
      <div className="text-center md:text-center md:mt-5 mt-0 px-4 py-4 space-y-2">
        <h3 className="text-md font-bold text-zinc-500">
          {product?.name}
        </h3>
        <p className="font-bold text-3xl">₹{Math.round(product?.price - (product?.price * product?.discount / 100))}</p>
      </div>
    </div>
  </div>

  <div className="manage bg-red-400 w-full md:w-[70%] h-[80vh]">
    <Manageform product={product}/>
  </div>
</div>

      </div>
    </div>
  );
}
