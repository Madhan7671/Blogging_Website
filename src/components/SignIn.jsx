import React from "react";
import "../styles/Form.css";

const Signin = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">🔓 Sign In</h2>
      <form className="auth-form">
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          required
        />
        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
