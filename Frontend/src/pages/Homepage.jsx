import React from "react";
import Herosection from "../Components/Herosection";
import Deals from "../Components/Deals";
import Prescription from "../Components/Prescription";
import BabyFood from "../Components/BabyFood";
import Extras from "../Components/Extras";
import Profilepage from "./Profilepage";
import Ccfooter from "../Components/footer/Ccfooter";



function Homepage() {
  return (
    <div>
      <Herosection />
      <Deals />
      <Prescription />
      <BabyFood />
      <Extras />
      {/* <Profilepage /> */}
      <Ccfooter/>
    </div>
  );
}
export default Homepage;
