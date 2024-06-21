import Productcard from "./Productcard";
import { useGetBabyBestDealsQuery } from "../redux/api/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducer";
import toast from "react-hot-toast";
import ProductSkeleton from "./ProductSkeleton";

function BabyFood() {
  const {data,isLoading} = useGetBabyBestDealsQuery()

  const dispatch = useDispatch();

const addToCartHandler = (cartItem) => {
  if (cartItem.stock < 1) return toast.error("Out of Stock");
  dispatch(addToCart(cartItem));
  toast.success("Added to cart");
};
  return (
    <div className="my-5 md:my-12 ">
      <h1 className="font-bold text-xl  mb-5 md:mb-0 md:text-4xl md:ml-12">
        Baby Food Collection!
      </h1>
      {isLoading ? (
        // Show skeleton loader if data is still loading
        <div className="flex justify-center space-x-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        // Display the actual products once data is loaded
        <div className="top-deals mx-4 my-2 gap-4 flex whitespace-nowrap overflow-x-auto md:py-4 md:mx-12 md:mb-5 lg:flex lg:whitespace-nowrap lg:overflow-x-auto md:flex md:justify-between">
          {data?.products.map((product) => (
            <Productcard
              key={product._id}
              img={product.photo}
              name={product.name}
              category={product.category}
              discount={product.discount}
              price={product.price}
              productId={product._id}
              stock={product.stock}
              handler={addToCartHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BabyFood;
