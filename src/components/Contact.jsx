import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">📬 Get in Touch</h2>
      <form className="contact-form">
        <input type="text" className="contact-input" placeholder="Your Name" />
        <input
          type="email"
          className="contact-input"
          placeholder="Your Email"
        />
        <textarea
          className="contact-textarea"
          placeholder="Your Message"
          rows="6"
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
