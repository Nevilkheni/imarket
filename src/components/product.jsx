import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import products from "../data/product";
import "../css/product.css";
import Footer from "./footer";
import Header from "./header";
import Detail from "./deatail";  

const Product = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
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
      <div>
        <Header />
      </div>
      <div className="hero-section">
        <h2>Welcome to the Apple Store</h2>
        <p>Explore our latest products</p>
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
        {products.map((item) => (
          <div key={item.productid} className="product">
            <img src={item.image} alt={item.productname} />
            <h3>{item.productname}</h3>
            <p>{item.description}</p>
            <p>Price: ₹{item.price.toLocaleString()}</p>
            <button onClick={() => addToCart(item)}>➕ Add to Cart</button>
          </div>
        ))}
      </div>

      <Detail />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Product;
