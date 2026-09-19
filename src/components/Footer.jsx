import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import fullLogo from "../assets/rosh-predicts-full-logo.png";

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <footer className="site-footer">

        {/* =================================================
            DECORATIVE ELEMENTS
        ================================================= */}

        <div
          className="footer-spark footer-spark-one"
          aria-hidden="true"
        >
          ✦
        </div>

        <div
          className="footer-spark footer-spark-two"
          aria-hidden="true"
        >
          ✦
        </div>


        {/* =================================================
            FOOTER MAIN
        ================================================= */}

        <div className="footer-main">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">
            
            <NavLink
            to="/"
            className="footer-brand-logo-link"
            aria-label="Rosh Predicts Home"
            >
              <img
                src={fullLogo}
                alt="Rosh Predicts"
                className="footer-brand-logo"
              />
            </NavLink>

            <span>
              A space for reflection, guidance and learning.
            </span>

          </div>


          {/* =================================================
              EXPLORE
          ================================================= */}

          <div className="footer-column">

            <h4>
              EXPLORE
            </h4>

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

          </div>


          {/* =================================================
              CONNECT
          ================================================= */}

          <div className="footer-column footer-connect">

            <h4>
              CONNECT
            </h4>


            {/* Instagram */}

            <a
              href="https://www.instagram.com/rosh_predicts?stkn=MWd2ZWZ4YjM2d2VlTNA="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link instagram-link"
            >

              <span className="footer-social-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="social-dot"
                  />
                </svg>

              </span>

              Instagram

            </a>


            {/* WhatsApp */}

            <a
              href="#"
              className="footer-social-link whatsapp-link"
            >

              <span className="footer-social-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.5 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.1 21.6c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.3-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"
                  />
                </svg>

              </span>

              WhatsApp

            </a>


            {/* YouTube */}

            <a
              href="#"
              className="footer-social-link youtube-link"
            >

              <span className="footer-social-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8Z"
                  />

                  <path
                    d="m10 9 5 3-5 3V9Z"
                    className="youtube-play"
                  />

                </svg>

              </span>

              YouTube

            </a>


            {/* Contact */}

            <NavLink
              to="/contact"
              className="footer-social-link contact-link"
            >

              <span className="footer-social-icon contact-icon">
                ✉
              </span>

              Contact

            </NavLink>

          </div>

        </div>


        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Rosh Predicts. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            {/* Privacy */}

            <button
              type="button"
              onClick={() => setActiveModal("privacy")}
            >
              Privacy
            </button>


            {/* Terms */}

            <button
              type="button"
              onClick={() => setActiveModal("terms")}
            >
              Terms
            </button>

          </div>

        </div>

      </footer>


      {/* =================================================
          PRIVACY / TERMS MODAL
      ================================================= */}

      {activeModal && (

        <div
          className="policy-overlay"
          onClick={closeModal}
        >

          <div
            className="policy-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close button */}

            <button
              type="button"
              className="policy-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>


            {/* =================================================
                PRIVACY
            ================================================= */}

            {activeModal === "privacy" && (

              <div className="policy-content">

                <p className="policy-label">
                  ROSH PREDICTS
                </p>

                <h2>
                  Privacy
                </h2>

                <p>
                  Your privacy is important to us. This section
                  explains how information shared through Rosh
                  Predicts may be handled.
                </p>

                <h3>
                  Information We Collect
                </h3>

                <p>
                  We may collect information that you voluntarily
                  provide when you contact us, enquire about a
                  service, register for a class or make a booking.
                </p>

                <h3>
                  How Information Is Used
                </h3>

                <p>
                  Information may be used to respond to enquiries,
                  provide requested services and communicate with
                  you about relevant updates.
                </p>

                <p className="policy-note">
                  This is placeholder content and will be replaced
                  with the final privacy policy provided by the client.
                </p>

              </div>

            )}


            {/* =================================================
                TERMS
            ================================================= */}

            {activeModal === "terms" && (

              <div className="policy-content">

                <p className="policy-label">
                  ROSH PREDICTS
                </p>

                <h2>
                  Terms
                </h2>

                <p>
                  By using the services, classes or other offerings
                  provided by Rosh Predicts, you agree to the
                  applicable terms and conditions.
                </p>

                <h3>
                  Services
                </h3>

                <p>
                  Service availability, booking details, pricing and
                  other information may be updated from time to time.
                </p>

                <h3>
                  Bookings & Communication
                </h3>

                <p>
                  Please provide accurate information when making an
                  enquiry or booking. Further details will be shared
                  before a service or class is confirmed.
                </p>

                <p className="policy-note">
                  This is placeholder content and will be replaced
                  with the final terms and conditions provided by the client.
                </p>

              </div>

            )}

          </div>

        </div>

      )}

    </>
  );
}

export default Footer; 