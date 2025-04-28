import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import Cart from "./components/cart.jsx";
import Payment from "./components/payment.jsx";
import Invoice from "./components/invoice.jsx";
import Product from "./components/product.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Deatail from "./components/deatail.jsx";
import Mac from "./components/mac.jsx";
import Ipad from "./components/ipad.jsx";
import Watch from "./components/watch.jsx";
import AirPods from "./components/airpods.jsx";
import Accessories from "./components/accessories.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Header" element={<Header/>}/>
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/Deatels" element={<Deatail/>} />
        <Route path="/Mac" element={<Mac/>}/>
        <Route path="/Ipad" element={<Ipad/>}/>
        <Route path="/watch" element={<Watch />} />
        <Route path="/airpods" element={<AirPods />} />
        <Route path="/accessories" element={<Accessories />}/>

        <Route path="/footer" element={<Footer />} />

      </Routes>
    </Router>
  );
}

export default App;
