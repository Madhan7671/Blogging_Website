import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css"; // Optional

const Header = ({ isLoggedIn, isSignedUp, onSearch, searchTerm, onLogout }) => {
  const location = useLocation();
  const showSearch = location.pathname === "/articles";

  return (
    <header className="header">
      <nav>
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
        />
      )}
    </header>
  );
};

export default Header;
