import React from "react";
import "./Footer.css";
import logo_big from "../Assets/logo_big.png";
function Footer() {
  return (
    <div className="footer">
      <div className="logo-name">
        <img src={logo_big} alt="logo" />
        <h1>DCLOTHING</h1>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social">
        <i className="fab fa-facebook-f" style={{ fontSize: "24px" }}></i>
        <i className="fab fa-instagram" style={{ fontSize: "24px" }}></i>
        <i className="fab fa-twitter" style={{ fontSize: "24px" }}></i>
        <i className="fab fa-linkedin-in" style={{ fontSize: "24px" }}></i>
      </div>
      <hr />
      <footer className="copyright">
        <p>Copyright &copy; 2024 DCLOTHING - All Right Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
