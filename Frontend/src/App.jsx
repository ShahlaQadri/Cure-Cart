import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Homepage from "./pages/Homepage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Ccfooter from "./Components/footer/Ccfooter";
import ProductDetails from "./pages/ProductDetails";
import Cartpage from "./pages/Cartpage";
import Productspage from "./pages/Productspage";
import Checkoutpage from "./pages/Checkoutpage";
import PaymentPage from "./pages/PaymentPage";
import Profilepage from "./pages/Profilepage";
import MyOrders from "./pages/MyOrders";
import Adminproducts from "./pages/Adminproducts";
import Admincustomers from "./pages/Admincustomers";
import Admintransactions from "./pages/Admintransactions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="px-4 py-4">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/productspage" element={<Productspage />} />
          <Route path="/checkout" element={<Checkoutpage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/myprofile" element={<Profilepage />} />
          <Route path="/myorders" element={<MyOrders />} />

          {/* DAshbord */}
          <Route path="/admin/dashboard" element={<Adminproducts />} />
          <Route path="/admin/products" element={<Adminproducts />} />
          <Route path="/admin/customers" element={<Admincustomers />} />
          <Route path="/admin/transactions" element={<Admintransactions />} />
        </Routes>
        <Ccfooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
