
import Productcard from "../Components/Productcard";
import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import Ccfooter from "../Components/footer/Ccfooter";
import { useGetProductsByCategoriesQuery } from "../redux/api/productsAPI";
import { addToCart } from "../redux/reducers/cartReducer";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import ProductSkeleton from "../Components/ProductSkeleton";
import { server } from "../main";

export default function Productspage() {
  const {categoryname} =useParams()
  const {data,isLoading} =useGetProductsByCategoriesQuery(categoryname)


  console.log(data?.products.length)
  const dispatch = useDispatch();

const addToCartHandler = (cartItem) => {
  if (cartItem.stock < 1) return toast.error("Out of Stock");
  dispatch(addToCart(cartItem));
  toast.success("Added to cart");
};
  return (
    <div className="rounded-lg w-[90%]  mx-auto">
      <div className="category ralative flex bg-[#B0E5F2]  h-32 md:h-48 w-full md:w-full mb-4 rounded-2xl">
       <div> <div className="relative">
          <Link
            to="/"
            className="absolute top-3 left-6 md:left-10 bg-zinc-50 hover:bg-zinc-100 rounded-full shadow-lg p-2 md:p-4"
          >
            <TiArrowBack className="text-3xl" />
          </Link>
        </div>
        <h1 className="md:text-4xl  text-[#3E5C75] font-extrabold absolute top-11 md:top-auto text-md flex text-centre items-baseline pt-32 md:pl-10  pl-6 ">
          {categoryname.toUpperCase()}
        </h1>
        
        <div className=" absolute top-auto right-6  md:top-auto h-32 w-[10rem] md:h-48 md:w-[30rem] md:right-28  flex  ">
  
  <img
    src={`${server}${data?.products[Math.round(Math.random() * data?.products?.length -1 )]?.photo}`}
    className="md:w-full md:h-full object-contain bottom mix-blend-multiply "
    alt="image"
  />
</div>

        </div>
      </div>

      {isLoading ? (
        // Show skeleton loader if data is still loading
        <div className="flex justify-center space-x-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) :(<div className="all-products grid grid-cols-2 gap-10 sm:gap-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-10 py-10 mb-5 mx-2 relative">
        <div className="absolute ml-2 pt-1">
          <div className="text-gray-400 -semibold">ALL PRODUCTS</div>
        </div>
        {!isLoading &&
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
        
      </div>)
    }
      <Ccfooter />
    </div>
  );
}
