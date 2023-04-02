import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/SJI-ident-transparent-trimmed.png';

function Navbar() {
  // Set isMobileMenuOpen variable to false
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        {/* <div className="nav-title">LOGO</div> */}
        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className="logo-link"
          title="Click to go to homepage"
          to="/"
        >
          <img src={Logo} alt="SJI logo" />
        </Link>
      </div>
      <div
        //onClick, reset isMobileMenuOpen to its opposite state (value), which is a boolean
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="nav-btn"
      >
        <label>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {/* If isMobileMenuOpen is true, then the div below will take a second class, 'mobile-menu' in addition to 'nav-links' */}
      <div className={`nav-links ${isMobileMenuOpen && 'mobile-menu'}`}>
        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className="navlink"
          title="Click to go to homepage"
          to="/"
        >
          Home
        </Link>

        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className="navlink"
          title="Click to go to Projects page"
          to="/portfolio"
        >
          Projects
        </Link>

        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className="navlink"
          title="Click to go to About page"
          to="/about"
        >
          About
        </Link>

        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className="navlink"
          title="Click to go to On This Day page"
          to="/onthisday"
        >
          #OTD
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
