import  { useState } from 'react';
import { useNewPresciptionOrderMutation } from '../redux/api/presciptionAPI';
import { useNavigate } from 'react-router-dom';
import { responseToste } from '../utils/Features';

const AddressFormForPresciption = ({prescriptionImage}) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    pincode: "",
    landmark: '',
    phone: ""
});
const navigate = useNavigate()
const [newOrder] = useNewPresciptionOrderMutation()
const changeHandler = (e ) => {
  setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
const submitHandler = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('photo', prescriptionImage); // Append the photo file
  formData.append('shippingInfo', JSON.stringify(shippingInfo)); // Append other data

  try {
    const res = await newOrder(formData);
    console.log(res)
    responseToste(res,navigate,"/mypresciptionorders")
  } catch (error) {
    console.error('Error submitting order:', error);
  }
};

  return (
    <div className="max-w-md  bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Address Details</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700">Enter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shippingInfo.name}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Enter Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={shippingInfo.email}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">address</label>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Landmark (Optional)</label>
          <input
            type="text"
            name="landmark"
            value={shippingInfo.landmark}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={shippingInfo.pincode}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact No</label>
          <input
            type="text"
            name="phone"
            value={shippingInfo.phone}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 mb-2">Save as</label>
          <div className="flex space-x-4">
            {['Home', 'Office', 'Other'].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="saveAs"
                  value={type}
                  checked={address.saveAs === type}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div> */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 my-10 transition duration-200"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddressFormForPresciption;
