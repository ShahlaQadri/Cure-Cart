import React from "react";
import Productcard from "./Productcard";

function BabyFood() {
  return (
    <div className="my-5 md:my-12 ">
      <h1 className="font-bold text-2xl ml-7 md:text-4xl md:ml-12">
        Baby Food Collection!
      </h1>
      <div className="grid grid-cols-2  gap-6 py-1 mx-6 mb-6 md:grid md:grid-cols-5 md:gap-10 md:py-4 md:mx-12 md:mb-5 ">
        <Productcard img={"../../pictures/div4.png"} name={"vapo Rub"} />
        <Productcard img={"../../pictures/div4.png"} name={"vapo Rub"} />
        <Productcard img={"../../pictures/div6.png"} name={"vapo Rub"} />
        <Productcard img={"../../pictures/div1.png"} name={"vapo Rub"} />
        <Productcard img={"../../pictures/div5.png"} name={"vapo Rub"} />
      </div>
    </div>
  );
}

export default BabyFood;
