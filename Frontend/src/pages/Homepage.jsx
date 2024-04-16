import React from "react";
import Herosection from "../Components/Herosection";
import Deals from "../Components/Deals";
import Prescription from "../Components/Prescription";
import BabyFood from "../Components/BabyFood";
import Extras from "../Components/Extras";
import AdminManageProducts from "./AdminManageProducts";
import AdminOrderInfo from "./AdminOrderInfo";
import PrescriptionUpload from "./PrescriptionUpload";



function Homepage() {
  return (
    <div>
      <Herosection />
      <Deals />
      <Prescription />
      <BabyFood />
      <Extras />
      <AdminManageProducts />
      <AdminOrderInfo />
      <PrescriptionUpload />
      
    </div>
  );
}
export default Homepage;
