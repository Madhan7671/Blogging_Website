import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Our Blog</h2>
          <p className="hero-description">
            Discover the latest insights, tutorials, and trends in web
            development, design, and technology.
          </p>
          <button className="hero-button">Start Reading</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
