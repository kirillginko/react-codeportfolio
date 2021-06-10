import React, { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            Kirill Ginko
          </a>
        </div>

        <div
          className="nav__menu"
          id="nav-menu"
          className={click ? "nav_menu_show" : "nav__menu"}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}
