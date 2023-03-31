import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/sji-ident-black-trimmed.jpg';

function Navbar() {
  return (
    <div className="navbar">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        {/* <div className="nav-title">LOGO</div> */}
        <Link className="logo-link" to="/">
          <img src={Logo} alt="SJI logo" />
        </Link>
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
          Projects
        </Link>

        <Link className="navlink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
