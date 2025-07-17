import React from "react";
import "../styles/SignUp.css";
const SignUp = () => {
  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
