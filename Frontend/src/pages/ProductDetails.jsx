
import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import Ccfooter from "../Components/footer/Ccfooter";
import { useGetProductDetailsQuery } from "../redux/api/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducer";
import toast from "react-hot-toast";
import { server } from "../main";

export default function ProductDetails() {
  
  const {id} =useParams()
  const {data , isLoading ,error} = useGetProductDetailsQuery(id)

  
  // console.log(data?.product)
  const dispatch = useDispatch();

const addToCartHandler = (cartItem) => {
  if (cartItem.stock < 1) return toast.error("Out of Stock");
  dispatch(addToCart(cartItem));
  toast.success("Added to cart");
};
if (isLoading )  return (
  <div className="pl-28 pt-10  bg-gray-100 animate-pulse min-h-screen">
    <div className="flex space-x-6">
      
      <div className="w-1/2 bg-gray-300 rounded h-96"></div>

      
      <div className="flex-1 space-y-4">
        {/* Title */}
        <div className="h-8 bg-gray-300 rounded w-1/2"></div>

        {/* Subtitle */}
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>

        {/* Price */}
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>

        {/* Add to Cart Button */}
        <div className="h-10 bg-gray-300 rounded w-1/3 mt-4"></div>

        {/* Key Points */}
        <div className="space-y-2 mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    </div>

    {/* Description Section */}
    <div className="mt-8 space-y-4">
      <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  </div>
);

if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="containers mx-auto px-2 md:px-10">
  <div className="flex flex-col md:flex-row bg-gray-50 rounded-3xl">
    <div className="relative z-50">
      <Link
        to="/"
        className="absolute top-2 md:top-3 left-4 md:left-10 hover:bg-zinc-100 rounded-full shadow-lg p-2 md:p-4"
      >
        <TiArrowBack className="text-xl md:text-3xl" />
      </Link>
    </div>

    <div className="image flex justify-center items-center  md:m-10 h-[25vh] md:h-[60vh] w-full md:w-[40%]">
      <img
        className="w-full h-full md:w-[100%] md:h-[100%] object-contain mix-blend-multiply rounded-lg"
        src={`${server}${data?.product.photo}`}
        alt={data?.product.name}
      />
    </div>

    <div className="description  p-4 md:m-10 md:p-10 w-[100%] md:w-[60%]">
      <div className="space-y-2 border-b border-gray-600 pb-3 md:pb-6">
        <p className="text-2xl md:text-4xl leading-tight capitalize font-bold">
          {data?.product.name}
        </p>
        <p className="text-gray-500 font-semibold text-sm md:text-md">
          {data?.product.uses}
        </p>
        <div className="flex space-x-2 mt-4 md:mt-8 text-sm">
          <p className="px-3 py-1 text-green-400 font-semibold bg-[#E3F6EE] rounded-full capitalize">
            {data?.product.category}
          </p>
          <p className="px-3 py-1 text-green-400 font-semibold bg-[#E3F6EE] rounded-full capitalize">
            {data?.product.used_for}
          </p>
        </div>
      </div>

      <div className="flex items-center mt-4 md:mt-8">
        <div className="flex flex-col">
          <p className="text-gray-400 text-sm">
            MRP <strike>{data?.product.price}</strike>
          </p>
          <div className="flex gap-4">
            <p className="text-xl font-bold">
              ₹{Math.round(data?.product.price - (data?.product.price * data?.product.discount) / 100)}
            </p>
            {/* <p className="text-lg text-gray-500">$3.40/ML</p> */}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:w-[500px] mt-4 md:mt-2">
        <p className="rounded-full bg-[#E3F6EE] text-xs font-semibold text-green-400 py-1 px-4 md:px-6">
          {data?.product.discount}% off applied
        </p>
        <button onClick={() => addToCartHandler({
            productId: data?.product._id,
            price: data?.product.price - (data?.product.price * data?.product.discount) / 100,
            name: data?.product.name,
            stock: data?.product.stock,
            quantity: 1,
            photo: data?.product.photo
          })}
          className="rounded-lg px-4 md:px-10 py-2 bg-[#0071BC] text-white text-md"
        >
          Add To Cart
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-2">*MRP Inclusive of all taxes</p>

      <div className="three flex items-center rounded-xl bg-[#EAF7FF] px-2 md:px-6 py-2 md:py-4 mt-4 md:mt-8">
        <div className="icon">
          <img
            className="h-[30px]"
            src="../../pictures/authenticity.png"
            alt="Original"
          />
        </div>
        <div className="flex flex-col ml-2 md:ml-4 border-r border-black text-gray-600">
          <p className="text-[10px]  md:text-sm">100% genuine medicines</p>
        </div>

        <div className="secure ml-2 md:ml-4">
          <img
            className="h-[30px]"
            src="../../pictures/credit-card (1).png"
            alt="Payments"
          />
        </div>
        <div className="flex flex-col ml-2 md:ml-4 border-r border-black text-gray-600">
          <p className="text-[10px]  md:text-sm">Safe & secure payments</p>
        </div>

        <div className="return ml-2 md:ml-4">
          <img
            className="h-[30px]"
            src="../../pictures/return.png"
            alt="Return"
          />
        </div>
        <div className="flex flex-col ml-2 md:ml-4 text-gray-600">
          <p className="text-[10px] md:text-sm">15 days easy returns</p>
        </div>
      </div>
    </div>
  </div>

  <div className="details bg-gray-50 rounded-3xl my-3 p-4 md:my-4 md:p-6">
    <div className="about pb-4">
      <div className="flex gap-4 items-center">
        <img
          src="../../pictures/information-button.png"
          alt="Original"
          width="25px md:30px"
          className="mix-blend-multiply"
        />
        <h1 className="font-bold text-sm md:text-xl">
          About {data?.product.name}
        </h1>
      </div>
      <p className="text-gray-500 text-xs md:text-md ml-10 md:ml-12">
        {data?.product.about}
      </p>
    </div>

    <div className="uses pb-4">
      <div className="flex gap-4 items-center">
        <img
          src="../../pictures/medicine.png"
          alt="Original"
          width="25px md:30px"
        />
        <h1 className="font-bold text-sm md:text-xl">
          Uses of {data?.product.name}
        </h1>
      </div>
      <p className="text-gray-500 text-xs md:text-md ml-10 md:ml-12">
        {data?.product.uses}
      </p>
    </div>

    <div className="directions">
      <div className="flex gap-4 items-center">
        <img
          src="../../pictures/job-description.png"
          alt="Original"
          width="25px md:30px"
        />
        <h1 className="font-bold text-sm md:text-xl">
          Directions for Use of {data?.product.name}
        </h1>
      </div>
      <p className="text-gray-500 text-xs md:text-md ml-10 md:ml-12">
        {data?.product.directions}
      </p>

      <div className="expiry flex pt-2 md:pt-4 gap-4 items-center">
        <img
          src="../../pictures/deadline.png"
          alt="Expire"
          width="25px md:30px"
        />
        <p className="font-bold text-sm md:text-xl">
          Expires:{" "}
          <span className="text-red-400 pl-1">{data?.product.expiry_date}</span>
        </p>
      </div>
    </div>
  </div>

  <div className="w-full mx-0">
    <Ccfooter />
  </div>
</div>

  );
}
