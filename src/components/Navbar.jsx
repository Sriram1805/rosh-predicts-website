import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import fullLogo from "../assets/rosh-predicts-full-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* =================================================
          BRAND
      ================================================= */}

      <div className="navbar-logo">

        <NavLink to="/" onClick={closeMenu}>

          <img
            src={fullLogo}
            alt="Rosh Predicts"
            className="navbar-full-logo"
          />

        </NavLink>

      </div>


      {/* =================================================
          MOBILE MENU BUTTON
      ================================================= */}

      <button
        type="button"
        className={`navbar-menu-button ${
          menuOpen ? "menu-open" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >

        <span></span>
        <span></span>
        <span></span>

      </button>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <div
        className={`navbar-links ${
          menuOpen ? "navbar-links-open" : ""
        }`}
      >

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/products" onClick={closeMenu}>
          Products
        </NavLink>

        <NavLink to="/classes" onClick={closeMenu}>
          Classes
        </NavLink>

        <NavLink to="/feedback" onClick={closeMenu}>
          Feedback
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;