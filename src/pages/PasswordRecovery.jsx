import React from "react";
import "../styles/PasswordRecovery.scss";
import logo from "@logos/logo_yard_sale.svg";

const PasswordRecovery = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset your password
        </p>

        <div className="email-image">
          <img src="./icons/email.svg" alt="email" />
        </div>

        <button className="primary-button login-button">Login</button>

        <p className="resend">
          <span>Didn't recieve the email?</span>
          <a href="">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default PasswordRecovery;
