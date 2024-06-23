import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { server } from "../main";

export default function ProductCard({ img, name, price, category, discount, productId, stock, handler }) {
  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="relative h-[230px] flex-shrink-0 w-[160px] md:w-[250px] bg-[#F1F5F9] md:h-[340px] overflow-hidden rounded-3xl flex flex-col items-center justify-center shadow-sm hover:shadow-md">
      {discount > 0 && (
        <span className="absolute top-5 right-3 px-2 py-1 bg-green-400 text-xs font-semibold text-white rounded">
          {discount}% off
        </span>
      )}
      <div className="img-container flex items-center justify-center w-full h-[68%] bg-[#e7f4f7]">
        <Link to={`/product/${productId}`}>
          <img src={`${server}${img}`} alt="" className="h-24 md:h-36 mix-blend-multiply" />
        </Link>
      </div>

      <div className="h-[36%] bg-white w-full md:h-[37%] md:flex md:flex-col md:w-full rounded-3xl md:overflow-hidden  md:-mt-4 pt-0 md:pt-2">
      <p className="text-center text-base md:text-[15px] font-semibold mt-4 md:mt-2 ">
  {name}
</p>
<p className="text-center text-xs md:text-[12px] font-semibold text-gray-400 uppercase  ">
  {category}
</p>
<div className="flex justify-between  items-center md:mt-6 px-2 md:px-5">
  <span className="line-through text-xs md:text-sm text-red-700">₹{price}</span>
  <span className="text-[12px] md:text-base md:mr-20 mr-14 text-black font-semibold">
    ₹{discountedPrice}
  </span>
  <div className=" flex items-center justify-center">
    <button
      onClick={() => handler({
        productId,
        price: discountedPrice,
        name,
        stock,
        quantity: 1,
        photo: img
      })}
      className="md:text-xl mr-4 text-sm font-light hover:rotate-12 focus:outline-none"
    >
      <IoBagHandleSharp className="text-sm md:text-xl " />
    </button>
  </div>
</div>
      </div>
    </div>
  );
}
