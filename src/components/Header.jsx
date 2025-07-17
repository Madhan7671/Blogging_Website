import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ isSignedUp, isLoggedIn, onSearch, searchTerm }) => {
  const location = useLocation();

  const handleSearchChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>TechBlog</h1>
        </Link>

        <nav className="nav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/articles"
            className={location.pathname === "/articles" ? "active" : ""}
          >
            Articles
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </nav>

        {/* Search bar - only show on articles page */}
        {location.pathname === "/articles" && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        )}

        <div className="auth-buttons">
          {!isSignedUp && !isLoggedIn && (
            <>
              <Link to="/signup" className="btn btn-outline">
                Sign Up
              </Link>
              <Link to="/signin" className="btn btn-primary">
                Sign In
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link to="/publish" className="btn btn-primary">
              Publish
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
