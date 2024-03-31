import React from "react";
import Productcard from "./Productcard";
import { Link } from "react-router-dom";

export default function Deals() {
  return (
    <div className="my-5 md:my-12 ">
      <h1 className="font-bold text-2xl ml-7 md:text-4xl md:ml-12">
        Today's Best Deals for you!
      </h1>
      <div className="grid grid-cols-2  gap-6 py-1 mx-6 mb-6 md:grid md:grid-cols-5 md:gap-10 md:py-4 md:mx-12 md:mb-5 ">
        <Productcard img={"../../pictures/div4.png"} name={"Vicks VapoRub"} desc={"Pack of 50 ML"} />
        <Productcard img={"../../pictures/div2.png"} name={"Cetaphil Facewash"} desc={"For all skin types"} />
        <Productcard img={"../../pictures/div3.png"} name={"Revital-H Women"} desc={"60 Tablets"} />
        <Productcard img={"../../pictures/div1.png"} name={"HK Vitals"} desc={"Multimineral Tablets"}/>
        <Productcard img={"../../pictures/div5.png"} name={"Automatic BP Machine"} desc={"HEM-7156"}/>
      </div>
    </div>
  );
}
