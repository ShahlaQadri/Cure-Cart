import React from "react";
import Productcard from "./Productcard";
import { useGetBabyBestDealsQuery } from "../redux/api/productsAPI";

function BabyFood() {
  const {data} = useGetBabyBestDealsQuery()
  return (
    <div className="my-5 md:my-12 ">
      <h1 className="font-bold text-xl  mb-5 md:mb-0 md:text-4xl md:ml-12">
        Baby Food Collection!
      </h1>
      <div className="baby-food-collection mx-4 my-2 gap-4  flex whitespace-nowrap overflow-x-auto  md:py-4 md:mx-12 md:mb-5 lg:flex lg:whitespace-nowrap lg:overflow-x-auto md:flex md:justify-between">
      {
        data?.products.map((product)=>(
           <Productcard
           key={product._id}
          img={product.photo}
          name={product.name}
          category={product.category}
          discount={product.discount}
          price ={product.price}
          id={product._id}

        />))
       }
      </div>
    </div>
  );
}

export default BabyFood;
