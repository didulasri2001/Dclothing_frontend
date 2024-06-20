import "./CSS/LoginSignup.css";
import user_icon from "../Components/Assets/person.png";
import password_icon from "../Components/Assets/password.png";
import email_icon from "../Components/Assets/email.png";
import React, { useState } from "react";

function LoginSignup() {
  const [action, setAction] = useState("Login");

  function handleLogin() {
    if (action === "Login") {
      setAction("Sign Up");
    } else {
      setAction("Login");
    }
  }
  return (
    <div className="container">
      {/* <div className="login-container">
        <div className="header">
          <h1>{action}</h1>
        </div>
        <div className="inputfield">
          <div className="Input">
            <img src={email_icon} alt="email" />
            <input type="text" placeholder="Email id" />
          </div>

          <div className="Input">
            <img src={password_icon} alt="email" />
            <input type="text" placeholder="Password" />
          </div>
        </div>
      </div> */}
      <div className="signup-container">
        <div className="header">
          <h1>{action}</h1>
        </div>
        <div className="inputfield">
          <div className={action === "Sign Up" ? "Input" : "Notext"}>
            <img src={user_icon} alt="username" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="Input">
            <img src={email_icon} alt="email" />
            <input type="text" placeholder="Email id" />
          </div>

          <div className="Input">
            <img src={password_icon} alt="email" />
            <input type="text" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className={action === "Sign Up" ? "Notext" : "text"}>
        <p>
          Lost password?<a href="#"> Click here !</a>
        </p>
      </div>

      <div className="buttons" onClick={handleLogin}>
        <button className={action === "Login" ? "login gray " : "login"}>
          Signup
        </button>
        <button className={action === "Sign Up" ? "login gray " : "login"}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;
