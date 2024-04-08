import React from "react";
import Herosection from "../Components/Herosection";
import Deals from "../Components/Deals";
import Prescription from "../Components/Prescription";
import BabyFood from "../Components/BabyFood";
import Extras from "../Components/Extras";
import Profilepage from "./Profilepage";
import Adminproducts from "./Adminproducts";
import Admincustomers from "./Admincustomers";
import Admintransactions from "./Admintransactions";




function Homepage() {
  return (
    <div>
      <Herosection />
      <Deals />
      <Prescription />
      <BabyFood />
      <Extras />
      <Profilepage/>
      <Adminproducts/>
      <Admincustomers/>
      <Admintransactions/>
    </div>
  );
}
export default Homepage;
