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
          <Route path="/productspage" element={<Productspage/>} />
        </Routes>
        <Ccfooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
