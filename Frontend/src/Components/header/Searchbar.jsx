import { useState, useEffect } from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Bars } from 'react-loader-spinner'
import { CiSearch } from "react-icons/ci";
import { useLazyGetSearchedProductsQuery } from "../../redux/api/productsAPI";

const Searchbar = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [trigger] = useLazyGetSearchedProductsQuery();

  useEffect(() => {
    if (name.trim() !== "") {
      setIsLoading(true); // Set loading state before fetching data
      trigger(name)
        .unwrap()
        .then((data) => {
          setIsLoading(false); // Turn off loading state when data fetching is complete
          setResults(data.product);
          setNoResults(data.product.length === 0);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false); // Ensure loading state is turned off in case of error
          setResults([]);
          setNoResults(true);
        });
    } else {
      setResults([]);
      setNoResults(false);
    }
  }, [name, trigger]);

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleItemClick = (productId) => {
    navigate(`/product/${productId}`);
    setName(""); // Clear the search input after navigating
  };

  return (
    <div className="navbar-elements flex justify-between px-1 md:flex md:space-x-8 md:justify-between md:items-center md:w-full md:px-5">
      {/* Logo */}
      <div className="logo px-0 md:px-8  md:mr-10">
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
     <div className="search-bar relative flex items-center w-[500px] p-1 md:p-2 rounded-md">
  <input
    type="text"
    placeholder="Search products..."
    value={name}
    onChange={handleSearch}
    className="border border-zinc-200 outline-none flex-grow py-0 md:py-2 rounded-l-full bg-white px-2 md:px-4 placeholder-gray-500 placeholder-opacity-100 placeholder-italic placeholder-text-lg w-[40px] md:w-[full]"
  />
  <button className=" bg-[#0071BC] hover:bg-[#0071bcda] text-gray-600 px-2 md:px-4 py-1 md:py-2 rounded-r-full">
    <CiSearch className="text-md md:text-2xl text-white" />
  </button>
  
  {/* Conditionally render the result-div */}
  {name && (
    <div className="absolute z-30 top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
      {isLoading ? (
        <div className="flex items-center justify-center py-4">
          <Bars
            height="50"
            width="70"
            color="#0071BC"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          {results.length > 0 ? (
            results.map((result) => (
              <div
                key={result._id}
                onClick={() => handleItemClick(result._id)}
                className=" px-4  py-2 border-b flex w-full justify-between hover:text-[#0071BC] hover:bg-gray-100 cursor-pointer"
              >
                {result.name} <CiSearch className="text-md md:text-2xl text-[#0071BC]" />
              </div>
            ))
          ) : (
            noResults && (
              <div className="px-4 py-2 text-gray-500">No product found</div>
            )
          )}
        </>
      )}
    </div>
  )}
</div>





      {/* Icons */}
      <div className="icons flex space-x-2 md:space-x-3">
        <div className="wishlist cursor-pointer rounded-full w-6 h-6 flex items-center justify-center md:w-10 md:h-10 bg-white border hover:bg-slate-200">
          <Link to="/admin/dashboard">
            <CiHeart className="text-xl" />
          </Link>
        </div>
        <div className="cart cursor-pointer rounded-full w-10 h-10 flex items-center justify-center bg-white border hover:bg-gray-200">
          <Link to="/cart">
            <SlHandbag className="text-xl text-gray-700" />
          </Link>
        </div>
        <div className="profile cursor-pointer rounded-full w-7 h-6 flex items-center justify-center md:w-10 md:h-10 bg-white border hover:bg-slate-200">
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
};

export default Searchbar;
