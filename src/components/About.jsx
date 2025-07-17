import React from "react";
import "../styles/About.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Welcome to our little corner of the internet — where pixels meet passion
        and caffeine fuels creativity. <br />
        <br />
        We're the kind of folks who believe a good idea can change the game, and
        a bad one... makes for a great story later. <br />
        <br />
        Whether it’s building smart tools, designing cool UIs, or chasing that
        one elusive bug that only shows up when the stars align — we’re here for
        it. <br />
        <br />
        This site is a mix of fun experiments, half-baked brilliance, and the
        occasional “oops, that actually worked!” moment. Stick around. Something
        awesome is always cooking.
      </p>

      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default About;
