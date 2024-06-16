import { useState } from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useGetSearchedProductsQuery } from "../../redux/api/productsAPI";

function Searchbar() {
  const { user } = useSelector((state) => state.userReducer);
  const [name, setName] = useState('');
  const navigate = useNavigate()
  const { data, isLoading } = useGetSearchedProductsQuery(name);

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="navbar-elements flex justify-between px-2 md:flex md:space-x-8 md:justify-between md:items-center md:w-full md:px-5">
      {/* Logo */}
      <div className="logo px-2 md:px-8 md:mr-10">
        <Link to="/">
          <img
            src="../../../pictures/smalllogo.png"
            width={"150px"}
            alt="LOGO"
            style={{ mixBlendMode: "multiply" }}
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={name}
            onChange={handleSearch}
            className="border border-zinc-200 outline-none mr-4 w-[8rem] md:w-[32rem] py-1 md:py-2 rounded-full bg-[#FFFFFF] px-6"
          />
          {/* Conditionally render the result-div */}
          {name && !isLoading && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {data.product && data.product.length > 0 ? (
                data.product.map((result) => (
                  <div
      key={result._id}
      onClick={() => {
        navigate(`/product/${result._id}`); 
        setName('');
      }}
      className="block px-4 py-2 bg-white border-b hover:bg-gray-100 cursor-pointer"
    >
      {result.name}
    </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No product found</div>
              )}
            </div>
          )}
          {name && isLoading && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="px-4 py-2 text-gray-500">Loading...</div>
            </div>
          )}
        </div>
      </div>

      {/* Icons */}
      <div className="icons flex space-x-1 md:space-x-3">
        <div className="wishlist cursor-pointer rounded-full w-8 h-8 flex items-center justify-center md:w-10 md:h-10 bg-white border hover:bg-slate-200">
          <Link to="/admin/dashboard">
            <CiHeart className="text-xl" />
          </Link>
        </div>
        <div className="cart cursor-pointer rounded-full w-8 h-8 flex items-center justify-center md:w-10 md:h-10 bg-white border hover:bg-slate-200">
          <Link to="/cart">
            <SlHandbag className="text-l" />
          </Link>
        </div>
        <div className="profile cursor-pointer rounded-full w-8 h-8 flex items-center justify-center md:w-10 md:h-10 bg-white border hover:bg-slate-200">
          {!user ? (
            <Link to="/login">
              <CiUser className="text-xl" />
            </Link>
          ) : (
            <div className="h-10 w-10 rounded-full flex items-center justify-center">
              <Link to="/myprofile">
                <img
                  src="../../../pictures/dashboard user.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
