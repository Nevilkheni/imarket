import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import Cart from "./components/cart.jsx";
import Payment from "./components/payment.jsx";
import Invoice from "./components/invoice.jsx";
import Product from "./components/product.jsx";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />

      </Routes>
    </Router>
  );
}

export default App;
