import { useDispatch } from "react-redux";
import { useGetBestDealsQuery } from "../redux/api/productsAPI";
import Productcard from "./Productcard";
import { addToCart } from "../redux/reducers/cartReducer";
import toast from "react-hot-toast";
import ProductSkeleton from "./ProductSkeleton";

export default function Deals() {
  const { data, isLoading, isError } = useGetBestDealsQuery();
  const dispatch = useDispatch();

  const addToCartHandler = (cartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) {
    toast.error("Cannot Fetch the Products");
    // Optionally return a fallback UI here
    return <div className="text-center mt-10 text-red-500">Failed to load deals. Please try again later.</div>;
  }

  return (
    <div className="my-5 md:my-12 ">
      <h1 className="font-bold text-xl mb-2 mt-10 md:mb-0 md:text-4xl md:ml-12">
        Today's Best Deals for you!
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
        <div className="top-deals mx-0 my-1 py-2 gap-4 flex whitespace-nowrap overflow-x-auto md:py-4  md:mb-5 lg:px-5 md:flex md:justify-between">
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
