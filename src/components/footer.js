import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer section">
        <div className="footer__container bd-grid">
          <div className="footer__data">
            <h2 className="footer__title">Kirill Ginko</h2>
            <p className="footer__text">
              Propelling the web forward one line of code at a time.
            </p>
          </div>

          <div className="footer__data">
            <h2 className="footer__title">EXPLORE</h2>
            <ul>
              <li>
                <a href="#home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="footer__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#Contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <h2 className="footer__title">FOLLOW</h2>
            <a
              href="https://www.facebook.com/kirill.ginko"
              className="footer__social"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/co_existenz/?hl=en"
              className="footer__social"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
