import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header px-3 rounded-3xl mb-3 pt-4 bg-[#F6F7F8]  pb-1 w-full">
      <Searchbar />
      <Navbar />
    </div>
  );
}

export default Header;
