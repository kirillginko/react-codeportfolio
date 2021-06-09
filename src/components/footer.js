import React from "react";

export default function footer() {
  return (
    <div>
      <footer class="footer section">
        <div class="footer__container bd-grid">
          <div class="footer__data">
            <h2 class="footer__title">Kirill Ginko</h2>
            <p class="footer__text">
              Propelling the web forward one line of code at a time.
            </p>
          </div>

          <div class="footer__data">
            <h2 class="footer__title">EXPLORE</h2>
            <ul>
              <li>
                <a href="#home" class="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" class="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" class="footer__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" class="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#Contact" class="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__data">
            <h2 class="footer__title">FOLLOW</h2>
            <a
              href="https://www.facebook.com/kirill.ginko"
              class="footer__social"
            >
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/co_existenz/?hl=en"
              class="footer__social"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="footer__social">
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
