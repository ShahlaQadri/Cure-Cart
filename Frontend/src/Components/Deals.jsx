import React from "react";
import Productcard from "./Productcard";

export default function Deals() {
  return (
    <div className="my-5 md:my-12 ">
      <span className="font-bold text-2xl ml-7 md:text-4xl md:ml-12">
        Today's Best Deals for you!
      </span>
      <div className="grid grid-cols-2 gap-6 py-1 mx-6 mb-6 md:grid md:grid-cols-5 md:gap-10 md:py-4 md:mx-12 md:mb-5 ">
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        
      </div>
    </div>
  );
}
