import React from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../assets/linkedin-footer-2.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link
          className="footerlink"
          to="https://www.linkedin.com/in/isebrand/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkedin-image" src={Linkedin} alt="Linked-In icon" />
        </Link>
        <Link
          className="footerlink"
          to="https://www.linkedin.com/in/isebrand/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkedin-image" src={Linkedin} alt="Linked-In icon" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
