import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { server } from "../main";

export default function ProductCard({ img, name, price, category, discount, productId, stock, handler }) {
  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="relative h-[230px] flex-shrink-0 w-[160px] md:w-[250px] bg-[#F1F5F9] md:h-[340px] overflow-hidden rounded-3xl flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {discount > 0 && (
        <span className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-xs font-semibold text-white rounded-lg">
          {discount}% off
        </span>
      )}
      <div className="img-container flex items-center justify-center w-full h-[68%] bg-[#e7f4f7]">
        <Link to={`/product/${productId}`}>
          <img src={`${server}${img}`} alt={name} className="h-20 md:h-32 object-contain mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-105" />
        </Link>
      </div>
      <div className="info-container h-[36%] bg-white w-full rounded-3xl -mt-4 pt-2 md:pt-4 px-2 md:px-4">
        <p className="text-center text-[12px] md:text-base font-semibold  md:mt-1">{name}</p>
        <p className="text-center text-[10px] md:text-sm text-gray-500 uppercase leading-none">{category}</p>
        <div className="flex justify-between items-center mt-2 md:mt-4">
          <section className="flex gap-2 md:gap-3 items-center"><span className="line-through text-[10px] md:text-sm text-red-700">₹{price}</span>
          <span className="text-[13px] md:text-base text-black font-bold">₹{discountedPrice}</span></section>
          <button
            onClick={() => handler({ productId, price: discountedPrice, name, stock, quantity: 1, photo: img })}
            className="text-lg md:text-2xl mr-2 hover:rotate-12 transition-transform duration-300 ease-in-out"
          >
            <IoBagHandleSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
