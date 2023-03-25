import React from "react";
import "../css/Contact.css";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Nous contacter</h1>
        <form className="contact-form">
          <input type="text" placeholder="Nom" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <textarea
            placeholder="Message"
            className="contact-input contact-textarea"
          ></textarea>
          <button className="contact-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
