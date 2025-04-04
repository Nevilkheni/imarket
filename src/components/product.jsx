import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/product";
import "../css/product.css";

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

  const totalCartItems = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <>
      <header className="header">
        <h1>
          <img src="image/apple-logo.png" alt="Apple Logo"></img>apple
        </h1>

        <div>
          <button className="cart-button" onClick={() => navigate("/cart")}>
            🛒 Cart ({totalCartItems})
          </button>
          <button
            className="cart-button"
            onClick={() => {
              if (isLoggedIn) {
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("cartItems");
                setIsLoggedIn(false);
                setCartItems([]);
                alert("You have logged out.");
              } else {
                navigate("/login");
              }
            }}
          >
            {isLoggedIn ? "Log out" : "Log in"}
          </button>
        </div>
      </header>
      <div className="hero-section">
        <h2>Welcome to the Apple Store</h2>
        <p>Explore our latest products</p>
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
      <div className="footer-section">
        <h2>Explore More</h2>
        <p>Discover the latest innovations and technology from Apple.</p>
        <p>
          ‡Includes instant cashback and No Cost EMI. No Cost EMI is available
          with the purchase of an eligible product made using qualifying cards
          on 3-, 6-, 9- or 12-month tenures from most leading card issuers.
          Eligible AirPods, HomePod and Beats products are available with No
          Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to
          the nearest rupee. Exact pricing will be provided by your card issuer,
          subject to your card issuer’s terms and conditions. Minimum order
          spend applies as per your card issuer’s threshold. No Cost EMI is not
          available to business customers and cannot be combined with Apple
          Store for Education or Corporate Employee Purchase Plan pricing. Card
          eligibility is subject to terms and conditions between you and your
          card issuer. Offer may be revised or withdrawn at any time without any
          prior notice. Terms apply. Representative example:
        </p>
        <p>
          ₹ 1,00,000 loan amount for 12 months at 10% p.a. interest rate =
          ₹8,333.33 monthly payment. Total interest paid = ₹ 0.00. Total amount
          payable = ₹ 1,00,000.00.
        </p>
        <p>
          Instant cashback is available with the purchase of an eligible product
          with qualifying American Express, Axis Bank and ICICI Bank cards only.
          Minimum transaction value of ₹10001.00 applies. Click here to see
          instant cashback amounts and eligible devices. Instant cashback is
          available for up to two orders per rolling 90-day period with an
          eligible card. Card eligibility is subject to terms and conditions
          between you and your card issuer. Total transaction value is
          calculated after any trade-in credit or eligible discount is applied.
          Any subsequent order adjustment(s) or cancellation(s) may result in
          instant cashback being recalculated, and any refund may be adjusted to
          account for instant cashback clawback; this may result in no refund
          being made to you. Offer may be revised or withdrawn at any time
          without any prior notice. Additional terms apply. Instant cashback is
          not available to business customers and cannot be combined with Apple
          Store for Education or Corporate Employee Purchase Plan pricing.
          Multiple separate orders cannot be combined for instant cashback.
        </p>
        <p>
          ◊No Cost EMI is available with the purchase of an eligible product
          made using qualifying cards on 3-, 6-, 9- or 12-month tenures from
          most leading card issuers. Eligible AirPods, HomePod and Beats
          products are available with No Cost EMI on 3- and 6-month tenures
          only. Monthly pricing is rounded to the nearest rupee. Exact pricing
          will be provided by your card issuer, subject to your card issuer’s
          terms and conditions. Minimum order spend applies as per your card
          issuer’s threshold. No Cost EMI is not available to business customers
          and cannot be combined with Apple Store for Education or Corporate
          Employee Purchase Plan pricing. Card eligibility is subject to terms
          and conditions between you and you
        </p>
        <p>
          A purchase of ₹79900.00 repaid over 12 months with an interest rate of
          15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly
          payments of ₹6658.00. Total amount payable: ₹79900.00.
        </p>
        <p>
          The display has rounded corners that follow a beautiful curved design,
          and these corners are within a standard rectangle. When measured as a
          standard rectangular shape, the screen is 13.76 cm / 5.42″ (iPhone 13
          mini, iPhone 12 mini), 14.86 cm / 5.85″ (iPhone 11 Pro, iPhone XS,
          iPhone X), 15.40 cm / 6.06″ (iPhone 16e, iPhone 14, iPhone 13 Pro,
          iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 15.54 cm /
          6.12″ (iPhone 16, iPhone 15 Pro, iPhone 15, iPhone 14 Pro), 15.93 cm /
          6.27″ (iPhone 16 Pro), 16.40 cm / 6.46″ (iPhone 11 Pro Max, iPhone XS
          Max), 16.95 cm / 6.68″ (iPhone 14 Plus, iPhone 13 Pro Max, iPhone 12
          Pro Max), 17.00 cm / 6.69″ (iPhone 16 Plus, iPhone 15 Pro Max, iPhone
          15 Plus, iPhone 14 Pro Max) or 17.43 cm / 6.86″ (iPhone 16 Pro Max)
          diagonally. Actual viewable area is less.
        </p>
        <p>
          Apple Intelligence is available in beta on all iPhone 16 models,
          iPhone 15 Pro and iPhone 15 Pro Max, with Siri and device language set
          to Chinese (Simplified), English (Australia, Canada, India, Ireland,
          New Zealand, Singapore, South Africa, UK or US), French, German,
          Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as an iOS
          18 update, with more languages coming over the course of the year,
          including Vietnamese. Some features may not be available in all
          regions or languages.
        </p>
        <p>
          iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, iPhone X, iPhone XS,
          iPhone XS Max, iPhone XR, iPhone SE (2nd generation), iPhone SE (3rd
          generation), iPhone 11 Pro, iPhone 11 Pro Max, iPhone 11, iPhone 12
          Pro, iPhone 12 Pro Max, iPhone 12, iPhone 12 mini, iPhone 13 Pro,
          iPhone 13 Pro Max, iPhone 13, iPhone 13 mini, iPhone 14 Pro, iPhone 14
          Pro Max, iPhone 14, iPhone 14 Plus, iPhone 15 Pro, iPhone 15 Pro Max,
          iPhone 15, iPhone 15 Plus, iPhone 16 Pro, iPhone 16 Pro Max, iPhone
          16, iPhone 16 Plus and iPhone 16e are splash, water and dust
          resistant, and were tested under controlled laboratory conditions;
          iPhone 12 Pro, iPhone 12 Pro Max, iPhone 12, iPhone 12 mini, iPhone 13
          Pro, iPhone 13 Pro Max, iPhone 13, iPhone 13 mini, iPhone 14 Pro,
          iPhone 14 Pro Max, iPhone 14, iPhone 14 Plus, iPhone 15 Pro, iPhone 15
          Pro Max, iPhone 15, iPhone 15 Plus, iPhone 16 Pro, iPhone 16 Pro Max,
          iPhone 16, iPhone 16 Plus and iPhone 16e have a rating of IP68 under
          IEC standard 60529 (maximum depth of 6 metres up to 30 minutes);
          iPhone 11 Pro and iPhone 11 Pro Max have a rating of IP68 under IEC
          standard 60529 (maximum depth of 4 metres up to 30 minutes); iPhone
          XS, iPhone XS Max and iPhone 11 have a rating of IP68 under IEC
          standard 60529 (maximum depth of 2 metres up to 30 minutes); and
          iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, iPhone X, iPhone XR,
          iPhone SE (2nd generation) and iPhone SE (3rd generation) have a
          rating of IP67 under IEC standard 60529 (maximum depth of 1 metre up
          to 30 minutes). Splash, water and dust resistance are not permanent
          conditions. Resistance might decrease as a result of normal wear. Do
          not attempt to charge a wet iPhone; refer to the user guide for
          cleaning and drying instructions. Liquid damage is not covered under
          warranty.
        </p>
        <p>
          Testing conducted by Apple in August 2017 using pre-production iPhone
          X, iPhone 8 and iPhone 8 Plus units and software, and in August 2018
          using pre-production iPhone XS, iPhone XS Max and iPhone XR units and
          software, with accessory Apple USB-C Power Adapters (18W Model A1720,
          29W Model A1540, 30W Model A1882, 61W Model A1718, 87W Model A1719).
          Testing conducted by Apple in August 2019 using pre-production iPhone
          11, iPhone 11 Pro and iPhone 11 Pro Max units and software, with
          accessory Apple USB-C Power Adapters (18W Model A1720, 29W Model
          A1540, 30W Model A1882, 61W Model A1947 and 87W Model A1719). Testing
          conducted by Apple in February 2020 using pre-production iPhone SE
          (2nd generation) units and software, with accessory Apple USB-C Power
          Adapters (18W Model A1720 and 30W Model A1882). Testing conducted by
          Apple in September 2020 using pre-production iPhone 12 mini, iPhone
          12, iPhone 12 Pro and iPhone 12 Pro Max units and software, with
          accessory Apple USB-C Power Adapter (20W Model A2305). Testing
          conducted by Apple in August 2021 using pre-production iPhone 13 mini,
          iPhone 13, iPhone 13 Pro and iPhone 13 Pro Max units and software,
          with accessory Apple USB-C Power Adapter (20W Model A2305). Testing
          conducted by Apple in February 2022 using pre-production iPhone SE
          (3rd generation) units and software, with accessory Apple USB-C Power
          Adapter (20W Model A2305). Testing conducted by Apple in August 2022
          using pre-production iPhone 14, iPhone 14 Plus, iPhone 14 Pro and
          iPhone 14 Pro Max units and software, with accessory Apple USB-C Power
          Adapter (20W Model A2305). Testing conducted by Apple in August 2023
          using pre-production iPhone 15, iPhone 15 Plus, iPhone 15 Pro and
          iPhone 15 Pro Max units and software, with accessory Apple USB-C Power
          Adapter (20W Model A2305). Testing conducted by Apple in January 2025
          using pre-production iPhone 16e units and software, and USB-C Charge
          Cable with Apple USB-C Power Adapter (20W Model A2305). For iPhone 16
          models, times measured from the appearance of the Apple logo as the
          unit started up. Fast-charge testing conducted with drained iPhone
          units. Charge time varies with settings and environmental factors;
          actual results will vary.
        </p>
      </div>

      <footer class="footer">
        <div class="footer-container">
          <div class="footer-column">
            <h3>Shop and Learn</h3>
            <ul>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Account</h3>
            <ul>
              <li>
                <a href="#">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="#">Apple Store Account</a>
              </li>
              <li>
                <a href="#">iCloud.com</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Apple Store</h3>
            <ul>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Ways to Buy</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shopping Help</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Environment</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Supply Chain</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>About Apple</h3>
            <ul>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Apple Leadership</a>
              </li>
              <li>
                <a href="#">Career Opportunities</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contact Apple</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Product;
