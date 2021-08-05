import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";

export default function Navbar() {
  let tl = gsap.timeline({ opacity: 0 });

  useEffect(() => {
    tl.from(
      ".top__nav",
      { x: -30, opacity: 0, ease: Power3.easeOut, duration: 1, stagger: 0.3 },
      "+=1"
    );
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo top__nav">
            Kirill Ginko
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item top__nav">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#portfolio" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classNameList.toggle("show");
//     });
//   }
// };
// showMenu("nav-toggle", "nav-menu");
