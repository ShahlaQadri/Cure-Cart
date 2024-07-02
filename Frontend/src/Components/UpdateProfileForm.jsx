import { useState } from 'react';
import { useUpdateUserMutation } from '../redux/api/userAPI';
import { useSelector } from 'react-redux';
import { responseToste } from '../utils/Features';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  name: Yup.string().min(2, "Name must be at least 2 characters long").required("Full name is required"),
  gender: Yup.string().oneOf(["male", "female", "other"], "Please select a valid gender").required("Gender is required"),
});

const UpdateProfileForm = ({ setIsEditing }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const [updateProfile] = useUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData);

    try {
      // Validate form data using Yup schema
      await validationSchema.validate(formData, { abortEarly: false });
      
      // Clear previous errors if validation is successful
      setErrors({});

      const res = await updateProfile(formData);
      setIsEditing(false);
      responseToste(res, navigate, "/myprofile");
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
        console.error('Error updating profile:', error);
      }
    }
  };

  return (
    <div className="w-[340px] relative md:w-[450px] mx-auto right-[5px] mt-10 p-6 bg-white rounded-lg shadow-md">
      <button
        className="block absolute top-2 right-3 text-zinc-700 rounded-full"
        onClick={() => { setIsEditing(false); }}
      >
        <MdCancel className="text-3xl"/>
      </button>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.gender ? 'border-red-500' : ''}`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
