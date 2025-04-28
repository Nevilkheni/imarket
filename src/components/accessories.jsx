import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import accessoriesProducts from "../data/accessories";
import Header from "./header";  
import Footer from "./footer";
import "../css/product.css";

const Accessories = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to your cart.");
      return;
    }

    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.productid === item.productid
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.productid === item.productid
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });

    alert(`${item.productname} added to cart`);
  };

  return (
    <>
      <Header />
      <div className="hero-section">
        <h2>Apple Accessories</h2>
      </div>
      <div className="product-section">
        <Link to="/product">
          <button>Phone</button>
        </Link>
        <Link to="/mac">
          <button>Mac</button>
        </Link>
        <Link to="/ipad">
          <button>iPad</button>
        </Link>
        <Link to="/watch">
          <button>Watch</button>
        </Link>
        <Link to="/airpods">
          <button>AirPods</button>
        </Link>
        <Link to="/accessories">
          <button>Accessories</button>
        </Link>
      </div>
      <div className="product-grid">
        {accessoriesProducts.map((item) => (
          <div key={item.productid} className="product">
            <img src={item.image} alt={item.productname} />
            <h3>{item.productname}</h3>
            <p>{item.description}</p>
            <p>Price: ₹{item.price.toLocaleString()}</p>
            <button onClick={() => addToCart(item)}>➕ Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="accessories-description">
        <h2>Complete Your Apple Experience</h2>
        <p>
          Apple accessories are designed to work seamlessly with your devices — 
          enhancing performance, functionality, and style. Whether you're 
          charging, typing, or protecting, there's an accessory for every need.
        </p>

        <h3>Designed for Apple</h3>
        <p>
          Every accessory is engineered to integrate perfectly with your iPhone, 
          iPad, Mac, and Apple Watch. From MagSafe chargers to Smart Keyboards, 
          these accessories expand what your devices can do.
        </p>

        <h3>Productivity Boosters</h3>
        <p>
          Unlock your full creative and professional potential with tools like 
          the Apple Pencil, Magic Keyboard, or external displays. Perfect for 
          artists, students, and professionals alike.
        </p>

        <h3>Power and Protection</h3>
        <p>
          Keep your devices charged and secure with premium cases, cables, 
          stands, and power adapters — all built to last with Apple’s quality 
          and attention to detail.
        </p>

        <h3>Style Meets Function</h3>
        <p>
          Apple accessories don’t just perform — they look good too. Match your 
          aesthetic with a variety of finishes, materials, and colors designed 
          to complement your Apple gear.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Accessories;
