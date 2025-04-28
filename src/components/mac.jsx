
import React, { useState, useEffect } from "react";
import macProducts from "../data/mac";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom"; 
import "../css/product.css";

const Mac = () => {
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
        <h2>Mac Products</h2>
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
        {macProducts.map((item) => (
          <div key={item.productid} className="product">
            <img src={item.image} alt={item.productname} />
            <h3>{item.productname}</h3>
            <p>{item.description}</p>
            <p>Price: ₹{item.price.toLocaleString()}</p>
            <button onClick={() => addToCart(item)}>➕ Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="mac-description">
        <h2>Why Choose a Mac?</h2>
        <p>
          Mac computers are built for performance, creativity, and security. Whether you’re editing 4K videos, writing code,
          designing graphics, or just browsing the web, there’s a Mac that fits your workflow.
        </p>
        <h3>Powerful Performance</h3>
        <p>
          Powered by Apple silicon chips like the M2, M2 Pro, and M3 Max, MacBooks and desktops deliver unmatched speed and efficiency with stunning battery life.
        </p>
        <h3>macOS Experience</h3>
        <p>
          With macOS, enjoy a seamless experience across your iPhone, iPad, and Apple Watch. Handoff, Universal Clipboard, and iCloud keep everything connected and up to date.
        </p>
        <h3>Built to Last</h3>
        <p>
          Macs are known for their durability, long-term support, and beautiful design. Combined with world-class displays and quiet operation, they’re a joy to use.
        </p>
        <h3>Explore the Range</h3>
        <p>
          Whether you prefer the ultra-thin MacBook Air, the powerful MacBook Pro, or the versatility of the Mac Studio or iMac, there's a Mac perfect for your needs.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Mac;
