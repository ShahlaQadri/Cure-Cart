import React from "react";
import Herosection from "../Components/Herosection";
import Deals from "../Components/Deals";
import Prescription from "../Components/Prescription";
import BabyFood from "../Components/BabyFood";
import Extras from "../Components/Extras";
import AdminManageProducts from "./AdminManageProducts";
import AdminAddProducts from "./AdminAddProduct";
import AdminOrderInfo from "./AdminOrderInfo";
import Productcard from "../Components/Productcard";


function Homepage() {
  return (
    <div>
      <Herosection />
      <Deals />
      <Prescription />
      <BabyFood />
      <Extras />
     
    </div>
  );
}
export default Homepage;
