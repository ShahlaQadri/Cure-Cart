import { useState } from 'react';
import { useNewPresciptionOrderMutation } from '../redux/api/presciptionAPI';
import { useNavigate } from 'react-router-dom';
import { responseToste } from '../utils/Features';
import { FaArrowLeft } from "react-icons/fa6";
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(6, "Name must be at least 6 characters long"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  address: Yup.string().required("Address is required"),
  pincode: Yup.string().required("Pincode is required").matches(/^\d{5,6}$/, "Pincode must be 5 or 6 digits"),
  landmark: Yup.string().required("Landmark is required"),
  phone: Yup.string().required("Phone number is required").matches(/^\d{10}$/, "Phone number must be 10 digits"),
});

const AddressFormForPresciption = ({ prescriptionImage, setVisibleForm }) => {
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
  const [newOrder] = useNewPresciptionOrderMutation();

  const changeHandler = (e) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Validate form data using Yup schema
      await validationSchema.validate(shippingInfo, { abortEarly: false });
      
      // Clear previous errors if validation is successful
      setErrors({});

      const formData = new FormData();
      formData.append('photo', prescriptionImage); // Append the photo file
      formData.append('shippingInfo', JSON.stringify(shippingInfo)); // Append other data
      console.log(formData)
      const res = await newOrder(formData);
      console.log(res);
      responseToste(res, navigate, "/mypresrciptionorders");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // Handle Yup validation errors
        const validationErrorsObj = {};
        error.inner.forEach((err) => {
          validationErrorsObj[err.path] = err.message;
        });
        setErrors(validationErrorsObj);
      } else {
        // Handle other errors
        console.error('Error submitting order:', error);
      }
    }
  };

  return (
    <div className="max-w-md h-screen bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 flex gap-10 items-center border-b-2 py-5">
        <FaArrowLeft onClick={() => { setVisibleForm(false); }} /> Address Details
      </h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700">Enter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shippingInfo.name}
            onChange={changeHandler}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Enter Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={shippingInfo.email}
            onChange={changeHandler}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={changeHandler}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : ''}`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Landmark (Optional)</label>
          <input
            type="text"
            name="landmark"
            value={shippingInfo.landmark}
            onChange={changeHandler}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.landmark ? 'border-red-500' : ''}`}
          />
          {errors.landmark && <p className="text-red-500 text-sm mt-1">{errors.landmark}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="number"
            name="pincode"
            value={shippingInfo.pincode}
            onChange={changeHandler}
            className={`w-full px-4 py-2 border rounded-lg ${errors.pincode ? 'border-red-500' : ''}`}
          />
          {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact No</label>
          <input
            type="phone"
            name="phone"
            value={shippingInfo.phone}
            onChange={changeHandler}
            className={`w-full px-4 py-2 border rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white mt-8 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddressFormForPresciption;
