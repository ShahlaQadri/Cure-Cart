
import { useDispatch } from "react-redux";
import { useGetBestDealsQuery } from "../redux/api/productsAPI";
import Productcard from "./Productcard";
import { addToCart } from "../redux/reducers/cartReducer";
import toast from "react-hot-toast"

export default function Deals() {
 const{data,isError} = useGetBestDealsQuery()
//  console.log("latest",data?.products)
const dispatch = useDispatch();

const addToCartHandler = (cartItem) => {
  if (cartItem.stock < 1) return toast.error("Out of Stock");
  dispatch(addToCart(cartItem));
  toast.success("Added to cart");
};

if (isError) toast.error("Cannot Fetch the Products");

  return (
    <div className="my-5 md:my-12 ">
      <h1 className="font-bold text-xl  mb-5 mt-10 md:mb-0 md:text-4xl md:ml-12">
        Today's Best Deals for you!
      </h1>
      <div className="top-deals mx-4 my-2 gap-4  flex whitespace-nowrap overflow-x-auto  md:py-4 md:mx-12 md:mb-5 lg:flex lg:whitespace-nowrap lg:overflow-x-auto md:flex md:justify-between">
       {
        data?.products.map((product)=>(
           <Productcard
           key={product._id}
          img={product.photo}
          name={product.name}
          category={product.category}
          discount={product.discount}
          price ={product.price}
          productId={product._id}
          stock={product.stock}
          handler={addToCartHandler}

        />))
       }
        
      </div>
    </div>
  );
}
