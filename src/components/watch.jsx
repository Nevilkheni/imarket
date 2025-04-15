import React, { useState, useEffect } from "react";
import watchProducts from "../data/watch";
import Header from "./hearder";
import Footer from "./footer";
import "../css/product.css";

const Watch = () => {
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
        <h2>Apple Watch Collection</h2>
      </div>
      <div className="product-section">
        <a href="/product">
          <button>Phone</button>
        </a>
        <a href="/mac">
          <button>Mac</button>
        </a>
        <a href="/ipad">
          <button>iPad</button>
        </a>
        <a href="/watch">
          <button>Watch</button>
        </a>
        <a href="/airpods">
          <button>AirPods</button>
        </a>
        <a href="/accessories">
          <button>Accessories</button>
        </a>
      </div>
      <div className="product-grid">
        {watchProducts.map((item) => (
          <div key={item.productid} className="product">
            <img src={item.image} alt={item.productname} />
            <h3>{item.productname}</h3>
            <p>{item.description}</p>
            <p>Price: ₹{item.price.toLocaleString()}</p>
            <button onClick={() => addToCart(item)}>➕ Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="watch-description">
        <h2>Why Apple Watch?</h2>
        <p>
          Apple Watch is more than just a watch — it's your fitness coach,
          health tracker, communication device, and daily assistant, all on your
          wrist.
        </p>

        <h3>Health & Wellness</h3>
        <p>
          Track your heart rate, monitor blood oxygen levels, take an ECG, and
          stay on top of your wellness with features like sleep tracking,
          medication reminders, and temperature sensing.
        </p>

        <h3>Fitness Motivation</h3>
        <p>
          Close your Activity Rings every day and reach your goals with
          personalized coaching, workout tracking, and advanced metrics —
          whether you're walking or training like a pro.
        </p>

        <h3>Stay Connected</h3>
        <p>
          Get calls, messages, and notifications on the go. With cellular
          models, you can stay in touch even when your iPhone isn't nearby.
        </p>

        <h3>Safety First</h3>
        <p>
          Features like Crash Detection, Fall Detection, Emergency SOS, and
          heart alerts provide peace of mind — for you and your loved ones.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Watch;
