import React from "react";
import { Link } from "react-router-dom"; 
import "../css/footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Shop and Learn</h3>
            <ul>
              <li>
                <Link href="#">Store</Link>
              </li>
              <li>
                <Link href="mac.jsx">Mac</Link>
              </li>
              <li>
                <Link href="ipad.jsx">iPad</Link>
              </li>
              <li>
                <Link href="product.jsx">iPhone</Link>
              </li>
              <li>
                <Link href="watch.jsx">Watch</Link>
              </li>
              <li>
                <Link href="airpods.jsx">AirPods</Link>
              </li>
              <li>
                <Link href="accessories.jsx">Accessories</Link>
              </li>
              <li>
                <Link to="#">Gift Cards</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Account</h3>
            <ul>
              <li>
                <Link to="#">Manage Your Apple ID</Link>
              </li>
              <li>
                <Link to="#">Apple Store Account</Link>
              </li>
              <li>
                <Link to="#">iCloud.com</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Apple Store</h3>
            <ul>
              <li>
                <Link to="#">Find a Store</Link>
              </li>
              <li>
                <Link to="#">Genius Bar</Link>
              </li>
              <li>
                <Link to="#">Today at Apple</Link>
              </li>
              <li>
                <Link to="#">Ways to Buy</Link>
              </li>
              <li>
                <Link to="#">Order Status</Link>
              </li>
              <li>
                <Link to="#">Shopping Help</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <Link to="#">Accessibility</Link>
              </li>
              <li>
                <Link to="#">Education</Link>
              </li>
              <li>
                <Link to="#">Environment</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Supply Chain</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Apple</h3>
            <ul>
              <li>
                <Link to="#">Newsroom</Link>
              </li>
              <li>
                <Link to="#">Apple Leadership</Link>
              </li>
              <li>
                <Link to="#">Career Opportunities</Link>
              </li>
              <li>
                <Link to="#">Investors</Link>
              </li>
              <li>
                <Link to="#">Events</Link>
              </li>
              <li>
                <Link to="#">Contact Apple</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
