// src/components/Contact.tsx
import React from "react";
import "./ConactDetails.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Get In Touch</h2>

      <div className="contact-card">
        <p className="contact-subtext">
          Feel free to connect with me through the platforms below!
        </p>

        <div className="contact-icons">
          <a
            href="https://github.com/utkarshsood993"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/utkarsh-sood993/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:utkarshsood93@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/_utkarsh_sood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
