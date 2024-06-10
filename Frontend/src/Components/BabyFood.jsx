import React from "react";
import Productcard from "./Productcard";

function BabyFood() {
  return (
    <div className="my-5 md:my-12 ">
      <h1 className="font-bold text-xl  mb-5 md:mb-0 md:text-4xl md:ml-12">
        Baby Food Collection!
      </h1>
      <div className="baby-food-collection mx-4 my-2 gap-4  flex whitespace-nowrap overflow-x-auto  md:py-4 md:mx-12 md:mb-5 lg:flex lg:whitespace-nowrap lg:overflow-x-auto md:flex md:justify-between">
        <Productcard
          img={"../../pictures/div4.png"}
          name={"Vicks Vaporub 25ML"}
        />

        <Productcard
          img={"../../pictures/div4.png"}
          name={"Vicks Vaporub 25ML"}
        />

        <Productcard
          img={"../../pictures/div6.png"}
          name={"Vicks Vaporub 25ML"}
        />

        <Productcard
          img={"../../pictures/div1.png"}
          name={"Vicks Vaporub 25ML"}
        />

        <Productcard
          img={"../../pictures/div5.png"}
          name={"Vicks Vaporub 25ML"}
        />
      </div>
    </div>
  );
}

export default BabyFood;
