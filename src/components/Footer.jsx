import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TechBlog</h3>
            <p>Your go-to source for web development insights and tutorials.</p>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get the latest posts.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;