import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import * as Yup from 'yup';
import { useChangePasswordMutation } from '../redux/api/userAPI';
import { responseToste } from '../utils/Features';
import { useNavigate } from 'react-router-dom';

// Yup validation schema
const validationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Old password is required"),
  newPassword: Yup.string()
    .min(6, "New password must be at least 6 characters long")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ChangePasswordForm = ({ setChangePassword }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const [isLoading, setIsLoading] = useState(false);
  const [changePassword] = useChangePasswordMutation()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Form data to validate
    const formData = {
      oldPassword,
      newPassword,
      confirmPassword,
    };

    try {
      // Validate form data using Yup schema
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      
      // Here you would send the formData to the backend or perform other actions
      console.log('Password change request submitted:', formData);
       const res = await changePassword(formData)
       responseToste(res,navigate,"/myprofile")
       console.log(res)
      
      // Reset form or close modal after successful submission
      setChangePassword(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Yup.ValidationError) {
        // Collect and display Yup validation errors
        const validationErrorsObj = {};
        error.inner.forEach((err) => {
          validationErrorsObj[err.path] = err.message;
        });
        setErrors(validationErrorsObj);
      } else {
        console.error('Error changing password:', error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[400px] relative bg-white shadow-lg rounded-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Change Password</h2>
      <button
        className="block absolute -top-3 right-1 text-zinc-700 rounded-full"
        onClick={() => { setChangePassword(false); }}
      >
        <MdCancel className="text-3xl"/>
      </button>

      {/* Old Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Old Password
        </label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className={`w-full p-2 border ${errors.oldPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        />
        {errors.oldPassword && <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>}
      </div>

      {/* New Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          New Password
        </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={`w-full p-2 border ${errors.newPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        />
        {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-[#2485C5] text-white font-semibold rounded hover:bg-[#1e6a9c] transition duration-200"
        >
          {isLoading ? 'Changing...' : 'Change Password'}
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
