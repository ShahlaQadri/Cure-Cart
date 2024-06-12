import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"



import Header from "./Components/header/Header";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetails from "./pages/ProductDetails";
import Cartpage from "./pages/Cartpage";
import Productspage from "./pages/Productspage";
import Checkoutpage from "./pages/Checkoutpage";
import PaymentPage from "./pages/PaymentPage";
import Profilepage from "./pages/Profilepage";


import MyOrders from "./pages/MyOrders";
import Adminproducts from "./pages/Adminproducts";
import Admincustomers from "./pages/Admincustomers";
import AdminAddProduct from "./pages/AdminAddProduct";
import AdminManageproducts from "./pages/AdminManageProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminManageOrder from "./pages/AdminOrderInfo";
import PrescriptionUploadPage from "./pages/PrescriptionUploadPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import {  useGetMyDetalsQuery } from "./redux/api/userAPI";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userExist, userNotExist } from "./redux/reducers/userReducer";
import ProtectedRoute from "./Components/dashbord/ProtectedRoute";



function App() {
  const dispatch = useDispatch()
  const a = useGetMyDetalsQuery()
  const {data,isSuccess} = useGetMyDetalsQuery()
  const user = useSelector((state) => state.reducer.user)
  console.log(data)
  console.log(a.isSuccess)
    useEffect(() => {
    if (data&& isSuccess) {
      dispatch(userExist(data.user));
    } else {
      dispatch(userNotExist());
    }
  }, [user,data, dispatch,isSuccess]);
  // dispatch(userExist(data?.user));
  console.log(!user)
  return (
    <BrowserRouter>
      <div className="px-4 py-4">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/productspage" element={<Productspage />} />

          <Route element={<ProtectedRoute isAuthenticated={user?true:false}/>}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          {/* login required pages */}
          <Route element={<ProtectedRoute isAuthenticated={user?false:true} redirect="/login  "/>}>
            <Route path="/checkout" element={<Checkoutpage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/myprofile" element={<Profilepage />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/upload-presciption" element={<PrescriptionUploadPage />} />
          </Route>
          {/* DAshbord */}
          <Route  element={<ProtectedRoute isAuthenticated={user?false:true} adminRoute={true}  admin={user?.role==="admin"?true:false}  />} >


          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/products" element={<Adminproducts />} />
          <Route path="/admin/customers" element={<Admincustomers />} />
          <Route path="/admin/transactions" element={<AdminOrders />} />
          <Route path="/admin/products/new" element={<AdminAddProduct />} />
          <Route path="/admin/products/:id" element={<AdminManageproducts />} />
          <Route path="/admin/transactions/:id" element={<AdminManageOrder />} />
          </Route>
        </Routes>
        
      </div>
      <Toaster position="top-center"/>
    </BrowserRouter>
  );
}

export default App;
