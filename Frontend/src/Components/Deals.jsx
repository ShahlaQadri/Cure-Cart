import React from "react";
import Productcard from "./Productcard";

export default function Deals() {
  return (
    <div className="my-12 ">
      <span className="font-bold text-4xl ml-12">
        Today's Best Deals for you!
      </span>
      <div className="grid grid-cols-5 gap-10 py-4  mx-12 my-7">
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        
      </div>
    </div>
  );
}
