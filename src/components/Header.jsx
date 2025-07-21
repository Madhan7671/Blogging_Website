import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "/techblog-logo.png"; 

const Header = ({ isLoggedIn, isSignedUp, onSearch, searchTerm, onLogout }) => {
  const location = useLocation();
  const showSearch = location.pathname === "/articles";

  return (
    <header
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="TechBlog Logo"
          style={{ height: "55px", width: "auto" }} 
        />
      </Link>

      <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn && <Link to="/publish">Publish</Link>}
        {!isLoggedIn && <Link to="/signin">Sign In</Link>}
        {!isLoggedIn && <Link to="/signup">Sign Up</Link>}
        {isLoggedIn && (
          <button
            onClick={onLogout}
            style={{
              background: "none",
              border: "none",
              color: "#333",
              fontWeight: "500",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Logout
          </button>
        )}
      </nav>

      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          style={{
            marginLeft: "1rem",
            padding: "0.4rem 0.8rem",
            fontSize: "1rem",
          }}
        />
      )}
    </header>
  );
};

export default Header;
