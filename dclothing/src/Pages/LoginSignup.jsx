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
      <div className="signup-container">
        <div className="header">
          <h1>{action}</h1>
        </div>
        <div className="inputfield">
          <div className={action === "Sign Up" ? "Input" : "Notext"}>
            <input type="text" placeholder="Name" />
          </div>
          <div className="Input">
            <input type="email" placeholder="Email" />
          </div>

          <div className="Input">
            <input type="password" placeholder="Password" />
          </div>
          <button>Continue</button>
        </div>
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>
            I agree to the <span>Terms and Conditions.</span>
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
      <div className={action === "Sign Up" ? "Notext" : "text"}>
        <p>Lost password? Click here !</p>
      </div>
    </div>
  );
}

export default LoginSignup;
