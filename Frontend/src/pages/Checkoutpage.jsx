import { Link, useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveShippingInfo } from "../redux/reducers/cartReducer";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../main";
import * as Yup from "yup";

//  Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters long"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  address: Yup.string().required("Address is required"),
  pincode: Yup.number().required("Pincode is required").min(10000, "Pincode must be at least 5 digits").max(999999, "Pincode must be at most 6 digits"),
  landmark: Yup.string().required("Landmark is required"),
  phone: Yup.string().required("Phone number is required").matches(/^\d{10}$/, "Phone number must be 10 digits"),
});

export default function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    pincode: '',
    landmark: '',
    phone: '',
  });
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const navigate = useNavigate();
  const { cartItems, total, shippingInfo: cartShippingInfo } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    if (cartItems.length <= 0) return navigate("/cart");
  }, [cartItems]);

  const changeHandler = (e) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      // Validate form data using Yup schema
      await validationSchema.validate(shippingInfo, { abortEarly: false });
      
      // Clear previous errors if validation is successful
      setErrors({});
      
      // Save shipping info and navigate to payment
      dispatch(saveShippingInfo(shippingInfo));

      const { data } = await axios.post(
        `${server}api/v1/payment/create`,
        { amount: Math.round(total) },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/payment", { state: data.clientSecret });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // Handle Yup validation errors
        const validationErrorsObj = {};
        error.inner.forEach((err) => {
          validationErrorsObj[err.path] = err.message;
        });
        setErrors(validationErrorsObj);
      } else {
        // Handle other errors (like network errors)
        console.error(error);
        toast.error("Something went wrong during payment processing.");
      }
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative">
        <Link
          to="/cart"
          className="absolute top-3 left-6 md:left-10 bg-zinc-50 hover:bg-[#2787c7] rounded-full shadow-lg p-2 md:p-4"
        >
          <TiArrowBack className="text-xl md:text-3xl" />
        </Link>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 mb-20">
        <form onSubmit={submitHandler} className="bg-white md:border rounded-lg px-2 py-6">
          <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={shippingInfo.name}
                onChange={changeHandler}
                placeholder="Cure Cart"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={shippingInfo.email}
                onChange={changeHandler}
                placeholder="curecart@example.com"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={shippingInfo.address}
                onChange={changeHandler}
                placeholder="123 Street, City"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.address ? 'border-red-500' : ''}`}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="zipcode" className="block text-gray-700 font-semibold mb-2">
                ZIP Code
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={shippingInfo.pincode}
                onChange={changeHandler}
                placeholder="12345"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.pincode ? 'border-red-500' : ''}`}
              />
              {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="landmark" className="block text-gray-700 font-semibold mb-2">
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                value={shippingInfo.landmark}
                onChange={changeHandler}
                placeholder="Landmark"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.landmark ? 'border-red-500' : ''}`}
              />
              {errors.landmark && <p className="text-red-500 text-sm mt-1">{errors.landmark}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="Mobile" className="block text-gray-700 font-semibold mb-2">
                Mobile Number
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={shippingInfo.phone}
                onChange={changeHandler}
                placeholder="0123456789"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div className="mt-8 flex mx-auto w-full">
            <button
              type="submit"
              className="flex mx-auto mb-6 w-full bg-[#2278b1] hover:bg-[#2787c7] text-white font-semibold py-2 px-10 rounded-lg focus:outline-none"
            >
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
