
import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import Ccfooter from "../Components/footer/Ccfooter";
import { useGetProductDetailsQuery } from "../redux/api/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducer";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const {id} =useParams()
  const {data } = useGetProductDetailsQuery(id)
  // console.log(data?.product)
  const dispatch = useDispatch();

const addToCartHandler = (cartItem) => {
  if (cartItem.stock < 1) return toast.error("Out of Stock");
  dispatch(addToCart(cartItem));
  toast.success("Added to cart");
};

  return (
    <div className="containers mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-3xl">
        <div className="relative z-50">
          <Link
            to="/"
            className="absolute top-2 md:top-3 left-4 md:left-10  hover:bg-zinc-100  rounded-full shadow-lg p-2 md:p-4"
          >
            <TiArrowBack className="text-xl md:text-3xl" />
          </Link>
        </div>

<div className="image flex justify-center  items-center m-5 md:m-10 h-[25vh] md:h-[60vh] w-full md:w-[40%]">
  <img
    className="w-full h-full  md:w-[100%] md:h-[100%]  object-contain mix-blend-multiply" // Ensure containment without cropping
    src={`http://localhost:3000/${data?.product.photo}`}
    alt="vicks vaporub"
  />
</div>

        <div className="description m-5 p-4 md:m-10 md:p-10 w-[100%] md:w-[60%]">
          <div className="space-y-2 border-b border-gray-600 pb-3 md:pb-6">
            <p className="text-xl md:text-3xl leading-none capitalize">
             {data?.product.name}
            </p>
            <p className="text-gray-400  font-semibold text-sm md:text-md  ">
            {data?.product.uses}
            </p>
            <div className=" flex space-x-2 mt-20  text-xs">
              <p
                className="md:px-4 px-2 flex items-center whitespace-nowrap py-1 md:py-2 text-green-400 font-semibold
               bg-[#E3F6EE] rounded-full capitalize"
              >
                {data?.product.category}
              </p>
              <p className="px-2 py-1 w-auto md:px-4 md:py-2 font-semibold capitalize text-green-400   bg-[#E3F6EE] rounded-full">
              {`${data?.product.used_for}`}
              </p>
            </div>
          </div>

          <div className="flex gap-[10rem] mt-2 md:mt-6 ">
            <div className="items-center">
              <p className="text-gray-400 text-sm">
                MRP <strike>{data?.product.price}</strike>
              </p>
              <div className="flex gap-4">
                <p className="text-sm md:text-xl font-bold">{data?.product.price - data?.product.price * data?.product.discount/100}</p>
                {/* <p className="text-sm md:text-lg text-gray-500">$3.40/ML</p> */}
              </div>
            </div>
          </div>

          <div className="mt-1 md:mt-0 flex items-center md:w-[500px] justify-between md:mr-0 mr-6">
            <p className="rounded-full mb-1 md:mb-3 bg-[#E3F6EE] text-xs text-green-400  w-fit px-2 md:px-4 py-1">
            {data?.product.discount}% off applied
            </p>
            <button onClick={()=>addToCartHandler({productId:data?.product._id,price:(data?.product.price-data?.product.price*data?.product.discount/100),name:data?.product.name,stock:data?.product.stock,quantity:1,photo:data?.product.photo})} className="rounded-lg px-4 md:px-10 py-1 md:py-2 -mt-10 bg-[#0071BC] text-white text-md">
              Add To Cart
            </button>
          </div>
          <p className="text-sm text-gray-600">*MRP Inclusive of all taxes</p>

          <div className="three flex items-center rounded-xl bg-[#EAF7FF] w-fit px-1 md:px-6 mt-2 md:mt-6">
            <div className="icon">
              <img
                className="h-[30px]"
                src="../../pictures/authenticity.png"
                alt="orginal"
              />
            </div>
            <div className="flex flex-col mr-2 md:mr-4 p-2 md:p-4 border-r border-black text-gray-600">
              <p className="text-xs md:text-sm">100% genuine</p>
              <p className="text-xs md:text-sm">medicines</p>
            </div>

            <div className="secure">
              <img
                className="h-[30px]"
                src="../../pictures/credit-card (1).png"
                alt="Payments"
              />
            </div>
            <div className="flex flex-col mr-2 md:mr-4 p-2 md:p-4 border-r border-black text-gray-600">
              <p className="text-xs md:text-sm">Safe & secure</p>
              <p className="text-xs md:text-sm">payments</p>
            </div>

            <div className="return">
              <img
                className="h-[30px]"
                src="../../pictures/return.png"
                alt="Return"
              />
            </div>
            <div className="flex flex-col mr-2 md:mr-4 p-2 md:p-4 text-gray-600">
              <p className="text-xs md:text-sm">15 days easy</p>
              <p className="text-xs md:text-sm">returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details  mx-2  bg-gray-50 rounded-3xl m-3 p-1 md:my-4 md:p-4">
        <div className="about pb-4">
          <div className="flex gap-4">
            {" "}
            <img
              src="../../pictures/information-button.png"
              alt="orginal"
              width={"25px md:30px"}
              className="mix-blend-multiply"
            />
            <h1 className="font-bold text-sm md:text-xl">
              About {data?.product.name}
            </h1>
          </div>
          <p className="text-gray-500 text-xs md:text-md ml-11 md:ml-12">
            {data?.product.about}
          </p>
        </div>

        <div className="uses pb-4">
          <div className="flex gap-4">
            {" "}
            <img
              src="../../pictures/medicine.png"
              alt="orginal"
              width={"25px md:30px"}
            />
            <h1 className="font-bold text-sm md:text-xl">
              Uses of {data?.product.name}
            </h1>
          </div>
          <p className="text-gray-500 text-xs md:text-md ml-11 md:ml-12">
            {data?.product.uses}
          </p>
        </div>

        <div className="directions ">
          <div className="flex gap-4">
            {" "}
            <img
              src="../../pictures/job-description.png"
              alt="orginal"
              width={"25px md:30px"}
            />
            <h1 className="font-bold text-sm md:text-xl">
              Directions for Use of {data?.product.name}
            </h1>
          </div>

          <p className="text-gray-500 text-xs md:text-md ml-11 md:ml-12">
            {data?.product.directions}
          </p>

          <div className="expiry flex pt-2 md:pt-4  gap-4">
            <img
              src="../../pictures/deadline.png"
              alt="Expire"
              width={"25px md:30px"}
            />
            <p className="font-bold text-sm md:text-xl ">
              Expires :
              <span className="font-bold text-sm md:text-xl pl-1 text-red-400">
                {data?.product.expiry_date}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-0">
        <Ccfooter />{" "}
      </div>
    </div>
  );
}
