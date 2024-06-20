import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetMyDetalsQuery } from "./redux/api/userAPI";
import { userExist, userNotExist } from "./redux/reducers/userReducer";
import ProtectedRoute from "./Components/dashbord/ProtectedRoute";
import Loader from "./Components/header/Loader";
import AdminManagePresciption from "./pages/AdminManagePresciption";

// Lazy loading the components using `lazy`
const Header = lazy(() => import("./Components/header/Header"));
const Homepage = lazy(() => import("./pages/Homepage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cartpage = lazy(() => import("./pages/Cartpage"));
const Productspage = lazy(() => import("./pages/Productspage"));
const Checkoutpage = lazy(() => import("./pages/Checkoutpage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const Profilepage = lazy(() => import("./pages/Profilepage"));
const MyOrders = lazy(() => import("./pages/MyOrders"));
const Adminproducts = lazy(() => import("./pages/Adminproducts"));
const Admincustomers = lazy(() => import("./pages/Admincustomers"));
const AdminAddProduct = lazy(() => import("./pages/AdminAddProduct"));
const AdminManageproducts = lazy(() => import("./pages/AdminManageProducts"));
const AdminOrders = lazy(() => import("./pages/AdminOrders"));
const AdminManageOrder = lazy(() => import("./pages/AdminOrderInfo"));
const PrescriptionUploadPage = lazy(() => import("./pages/PrescriptionUploadPage"));
const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage"));
const AdminPresciptionOrderPage = lazy(() => import("./pages/AdminPresciptionOrderPage"));
const UsersPresciptionOrdersPage = lazy(() => import("./pages/UsersPresciptionOrdersPage"));

function App() {
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetMyDetalsQuery();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(userExist(data.user));
    } else {
      dispatch(userNotExist());
    }
  }, [data, isSuccess, dispatch]);

  return (
    <BrowserRouter>
      <div className="px-4 py-4">
        <Suspense fallback={<Loader/>}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/productspage/:categoryname" element={<Productspage />} />
            
            <Route element={<ProtectedRoute isAuthenticated={user ? true : false} />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute isAuthenticated={user ? false : true} redirect="/login" />}>
              <Route path="/checkout" element={<Checkoutpage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/myprofile" element={<Profilepage />} />
              <Route path="/myorders" element={<MyOrders />} />
              <Route path="/mypresciptionorders" element={<UsersPresciptionOrdersPage />} />
              <Route path="/upload-presciption" element={<PrescriptionUploadPage />} />
            </Route>

            <Route element={<ProtectedRoute isAuthenticated={user ? false : true} adminRoute={true} admin={user?.role === "admin" ? true : false} />}>
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/admin/products" element={<Adminproducts />} />
              <Route path="/admin/customers" element={<Admincustomers />} />
              <Route path="/admin/transactions" element={<AdminOrders />} />
              <Route path="/admin/presciptions" element={<AdminPresciptionOrderPage />} />
              <Route path="/admin/products/new" element={<AdminAddProduct />} />
              <Route path="/admin/products/:id" element={<AdminManageproducts />} />
              <Route path="/admin/transactions/:id" element={<AdminManageOrder />} />
              <Route path="/admin/presciptions/:id" element={<AdminManagePresciption />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
