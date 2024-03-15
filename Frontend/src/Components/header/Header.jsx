import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header px-3 pt-4  border-b-2 shadow-md pb-1 w-full">
      <Searchbar />
      <Navbar />
    </div>
  );
}

export default Header;
