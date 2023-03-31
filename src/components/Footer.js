import React from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../assets/linkedin-footer-3.png';
import Github from '../assets/github-footer.png';
import Instagram from '../assets/instagram-footer.png';

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
          to="https://github.com/ScottIsebrand"
          target="_blank"
          rel="noreferrer"
        >
          <img className="github-image" src={Github} alt="Github icon" />
        </Link>

        <Link
          className="footerlink"
          to="https://www.instagram.com/isebrand/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="instagram-image"
            src={Instagram}
            alt="Instagram icon"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
