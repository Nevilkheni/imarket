import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import airpodsProducts from "../data/airpods";
import Header from "./header";  
import Footer from "./footer";
import "../css/product.css";

const AirPods = () => {
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
        <h2>AirPods & Audio</h2>
      </div>
      <div className="product-section">
        <Link to="/product"><button>Phone</button></Link>
        <Link to="/mac"><button>Mac</button></Link>
        <Link to="/ipad"><button>iPad</button></Link>
        <Link to="/watch"><button>Watch</button></Link>
        <Link to="/airpods"><button>AirPods</button></Link>
        <Link to="/accessories"><button>Accessories</button></Link>
      </div>
      <div className="product-grid">
        {airpodsProducts.map((item) => (
          <div key={item.productid} className="product">
            <img src={item.image} alt={item.productname} />
            <h3>{item.productname}</h3>
            <p>{item.description}</p>
            <p>Price: ₹{item.price.toLocaleString()}</p>
            <button onClick={() => addToCart(item)}>➕ Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="airpods-description">
        <h2>Why Choose AirPods?</h2>
        <p>
          AirPods deliver an effortless wireless audio experience, combining rich sound with smart features. Whether you're listening to music, taking calls, or using Siri, AirPods do it seamlessly.
        </p>

        <h3>Exceptional Sound Quality</h3>
        <p>
          Enjoy immersive audio with Adaptive EQ, Spatial Audio, and Personalized listening profiles. AirPods are designed to deliver crisp highs, deep bass, and rich mids.
        </p>

        <h3>Noise Control Options</h3>
        <p>
          From open designs that let the world in, to Pro models with Active Noise Cancellation and Transparency mode — AirPods adapt to your environment and listening preferences.
        </p>

        <h3>Smart Integration</h3>
        <p>
          Instantly connect with all your Apple devices, switch between them effortlessly, and use “Hey Siri” for hands-free control. The H1 and H2 chips deliver smarter, faster performance.
        </p>

        <h3>All-Day Battery & MagSafe Charging</h3>
        <p>
          With long-lasting battery life, compact charging cases, and MagSafe compatibility, AirPods keep the music going all day — and recharge quickly when needed.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default AirPods;
