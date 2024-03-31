import React from "react";
import Herosection from "../Components/Herosection";
import Deals from "../Components/Deals";
import Prescription from "../Components/Prescription";
import BabyFood from "../Components/BabyFood";
import Ccfooter from "../Components/footer/Ccfooter";
import ProductDetails from "./ProductDetails";
import Extras from "../Components/Extras";
import Cartpage from "./Cartpage";
import Productspage from "./Productspage";

function Homepage() {
  return (
    <div>
      <Herosection />
      <Deals />
      <Prescription />
      <BabyFood />
      <Extras />
      <Cartpage/>
      <Productspage/>
    </div>
  );
}
export default Homepage;
