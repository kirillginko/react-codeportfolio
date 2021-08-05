import React, { useEffect } from "react";
import { gsap, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let tl = gsap.timeline({});

  useEffect(() => {
    tl.from(
      ".hero",
      {
        y: -100,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1.7,
        stagger: 0.5,
      },
      "+=.5"
    );
    tl.from(
      ".home__img",
      {
        x: 150,
        opacity: 0,
        ease: Power4.easeOut,
        duration: 1.7,
      },
      "-=1"
    );
    tl.from(
      ".nice",
      {
        x: -100,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 2,
        stagger: 0.5,
      },
      "-=1.7"
    );
    tl.from(
      ".home__scroll-link",
      {
        y: -100,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1.3,
      },
      "-=1.3"
    );
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="home__container bd-grid">
          <h1 className="home__title hero">
            <span className="home__span hero">BON</span>
            <br />
            <span className="home_span hero">JOUR!</span>
          </h1>
          <h2 className="home_h2 nice">Nice to meet you...</h2>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-link">
              <i className="bx bx-up-arrow-alt"></i>Scroll down
            </a>
          </div>

          <img
            src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603996202/perfil_q9n1du.png"
            alt=""
            className="home__img"
          />
        </div>
      </section>
    </div>
  );
}
