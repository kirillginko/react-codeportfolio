import React, { useState, useEffect } from "react";
import { gsap, Power3 } from "gsap";

export default function Navbar() {
  const [active, setActive] = useState(false);
  let tl = gsap.timeline({ opacity: 0 });

  const showMenu = () => {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("show");
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    console.log(sections);

    window.addEventListener("scroll", scrollActive);

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active");
        }
      });
    }
  });

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
              <a href="#home" id="0" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#about" id="1" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#skills" id="2" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#portfolio" id="3" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item top__nav">
              <a href="#contact" id="4" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={() => showMenu()}>
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
