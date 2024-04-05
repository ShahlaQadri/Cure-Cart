import React from "react";
import Herosection from "../Components/Herosection";
import Deals from "../Components/Deals";
import Prescription from "../Components/Prescription";
import BabyFood from "../Components/BabyFood";
import Extras from "../Components/Extras";
import Profilepage from "./Profilepage";



function Homepage() {
  return (
    <div>
      <Herosection />
      <Deals />
      <Prescription />
      <BabyFood />
      <Extras />
      <Profilepage/>
    </div>
  );
}
export default Homepage;
