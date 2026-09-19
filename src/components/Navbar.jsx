import { NavLink } from "react-router-dom";
import "./Navbar.css";

{/*import rsLogo from "../assets/rosh-rs-logo.png";*/}
import fullLogo from "../assets/rosh-predicts-full-logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      {/* =================================================
          BRAND
      ================================================= */}

      <div className="navbar-logo">

        <NavLink to="/">

          {/* Circle RS Logo 

          <img
            src={rsLogo}
            alt="Rosh Predicts symbol"
            className="navbar-logo-image"
          /> */}

          {/* Full Brand Logo */}

          <img
            src={fullLogo}
            alt="Rosh Predicts"
            className="navbar-full-logo"
          />

        </NavLink>

      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <div className="navbar-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/services">
          Services
        </NavLink>

        <NavLink to="/products">
          Products
        </NavLink>

        <NavLink to="/classes">
          Classes
        </NavLink>

        <NavLink to="/feedback">
          Feedback
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;