import React from "react";
import Productcard from "../Components/Productcard";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Productspage() {
  return (
    <div className="rounded-lg w-[90%] mx-auto">
      <div className="category bg-[#B0E5F2] h-48  mb-4 rounded-2xl">
        <div className="relative">
          <Link
            to="/"
            className="absolute top-3 left-10 bg-white rounded-full shadow-lg p-4"
          >
            <TiArrowBack className="text-3xl" />
          </Link>
        </div>
        <h1 className="text-4xl flex text-centre items-baseline pt-32 pl-10  ">
          Skin Care
        </h1>
      </div>

      <div className="all-products grid grid-cols-5 gap-10 py-10 mb-5 mx-2 relative">
        <div className="absolute ml-2 pt-1">
          <div className="text-gray-400 -semibold">ALL PRODUCTS</div>
        </div>
        <Productcard img={"../../pictures/div4.png"} name={"Vicks VapoRub"} />
        <Productcard
          img={"../../pictures/div2.png"}
          name={"Cetaphil Facewash"}
        />
        <Productcard img={"../../pictures/div3.png"} name={"Revital Women"} />
        <Productcard img={"../../pictures/div1.png"} name={"HK Vitals"} />
        <Productcard
          img={"../../pictures/div5.png"}
          name={"Digital BP Machine"}
        />
        <Productcard img={"../../pictures/div4.png"} name={"Vicks VapoRub"} />
        <Productcard
          img={"../../pictures/div2.png"}
          name={"Cetaphil Facewash"}
        />
        <Productcard img={"../../pictures/div3.png"} name={"Revital Women"} />
        <Productcard img={"../../pictures/div1.png"} name={"HK Vitals"} />
        <Productcard
          img={"../../pictures/div5.png"}
          name={"Digital BP Machine"}
        />
        <Productcard img={"../../pictures/div3.png"} name={"Revital Women"} />
        <Productcard img={"../../pictures/div1.png"} name={"HK Vitals"} />
        <Productcard
          img={"../../pictures/div5.png"}
          name={"Digital BP Machine"}
        />
      </div>
    </div>
  );
}
