import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useUserLoginMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const navigate = useNavigate();
  const [userLogin] = useUserLoginMutation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = { email, password };
    try {
      // Validate form data using Yup schema
      await validationSchema.validate(formData, { abortEarly: false });

      // Clear previous errors if validation is successful
      setErrors({});

      // Perform login logic here
      console.log("Validated Data:", formData);
      
      const res = await userLogin({ email, password });

      if ("data" in res) {
        toast.success(res.data.msg);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        toast.error(res.error.data.msg);
        navigate("/register");
      }
    } catch (validationErrors) {
      // Handle validation errors
      const validationErrorsObj = {};
      validationErrors.inner.forEach((error) => {
        validationErrorsObj[error.path] = error.message;
      });
      setErrors(validationErrorsObj);
    }
  };

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="bg-white bg-opacity-40  rounded-lg overflow-hidden max-w-sm w-full">
        <div className="py-10 px-8">
          <div className="flex justify-center items-center mb-5">
            <img
              src="../../../pictures/smalllogo.png"
              width={"190px"}
              alt="LOGO"
            />
          </div>
          <h2 className="text-center text-2xl font-extrabold text-[#2278b1]">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <IoEye /> : <IoEyeOff />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-white bg-[#2278b1] hover:bg-[#2787c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
