import React from "react";
import Herosection from "../Components/Herosection";
import Deals from "../Components/Deals";
import Prescription from "../Components/Prescription";
import BabyFood from "../Components/BabyFood";
import Extras from "../Components/Extras";
import AdminManageProducts from "./AdminManageProducts";
import AdminAddProducts from "./AdminAddProducts";



function Homepage() {
  return (
    <div>
      <Herosection />
      <Deals />
      <Prescription />
      <BabyFood />
      <Extras />
      {/* <Profilepage/> */}
      <AdminManageProducts />
      {/* <AdminAddProducts/> */}
    </div>
  );
}
export default Homepage;
