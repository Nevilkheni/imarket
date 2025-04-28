import React, { useState, useEffect } from "react";
import ipadProducts from "../data/ipad";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom"; 
import "../css/product.css";

const Ipad = () => {
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
        <h2>iPads</h2>
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
        {ipadProducts.map((item) => (
          <div key={item.productid} className="product">
            <img src={item.image} alt={item.productname} />
            <h3>{item.productname}</h3>
            <p>{item.description}</p>
            <p>Price: ₹{item.price.toLocaleString()}</p>
            <button onClick={() => addToCart(item)}>➕ Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="ipad-description">
        <h2>Why iPad?</h2>
        <p>
          iPad combines the power of a computer with the versatility and
          portability of a tablet. Whether you're drawing, working, learning, or
          just relaxing, iPad is the perfect tool.
        </p>

        <h3>Performance That Packs a Punch</h3>
        <p>
          From the blazing-fast M1 and M2 chips in iPad Pro and iPad Air, to the
          powerful A-series chips in other models, iPad delivers incredible
          performance for every task.
        </p>

        <h3>Versatility Built In</h3>
        <p>
          Use Apple Pencil for creative work, the Magic Keyboard for
          productivity, or take FaceTime calls on the go — iPad does it all with
          a fluid, responsive experience.
        </p>

        <h3>All-Day Battery Life</h3>
        <p>
          Lightweight yet powerful, iPads are built to last all day on a single
          charge, keeping you going whether you’re at home, school, or
          traveling.
        </p>

        <h3>Apps for Everything</h3>
        <p>
          With the App Store, you get access to over a million iPad-optimized
          apps — from pro-level tools to educational apps and entertainment.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Ipad;
