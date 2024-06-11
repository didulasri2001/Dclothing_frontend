import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt=""></img>
        <p>Dclothing</p>
      </div>
      <ul className="nav-menu">
        <li>
          Shop
          <hr />
        </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""></img>
        <div className="nav-cart-count ">0</div>
      </div>
    </nav>
  );
}

export default Navbar;
