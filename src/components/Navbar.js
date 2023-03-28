import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">LOGO</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link className="navlink" to="/">
          Home
        </Link>

        <Link className="navlink" to="/portfolio">
          Portfolio
        </Link>

        <Link className="navlink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
