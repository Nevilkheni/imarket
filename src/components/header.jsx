import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/header.css"

const Header = ({ isLoggedIn, setIsLoggedIn, setCartItems, totalCartItems }) => {
    
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("cartItems");
      setIsLoggedIn(false);
      setCartItems([]);
      alert("You have logged out.");
    } else {
      navigate("/login");
    }
  };
  

  return (
    <header className="header">
      <h1>
        <img src="image/apple-logo.png" alt="Apple Logo" />
        apple
      </h1>

      <div>
        <button className="cart-button" onClick={() => navigate("/cart")}>
          🛒 Cart ({totalCartItems})
        </button>
        <button className="cart-button" onClick={handleAuthClick}>
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
      </div>
    </header>
  );
};

export default Header;
