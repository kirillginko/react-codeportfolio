import React, { useEffect } from "react";
import { gsap, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const tl = gsap.timeline({});

  useEffect(() => {
    gsap.from(
      ".scroll",
      {
        scrollTrigger: {
          trigger: ".scroll",
          start: "top bottom",
          end: "+=80%",
          markers: true,
          scrub: true,
        },
        x: -200,
        opacity: 0,
        duration: 1.7,
        stagger: 0.3,
      },
      "+=3"
    );
  }, []);
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section-title scroll">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img scroll">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603996202/perfil_q9n1du.png"
              alt=""
            />
          </div>

          <div>
            <h2 className="about__subtitle scroll">
              <a href="#" className="effect-underline">
                I'm Kirill Ginko
              </a>
            </h2>
            <span className="about__profession scroll">
              A Full-Stack Web-Developer currently living in New York, NY
            </span>
            <p className="about__text scroll">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              consectetur, architecto quas fugiat, iste inventore facere
              repellendus delectus id, vitae blanditiis.
            </p>

            <div className="about__social scroll">
              <a
                href="https://www.linkedin.com/in/kirill-ginko-a613433a/"
                className="about__social-icon"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/kirillginko"
                className="about__social-icon"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className="about__social-icon">
                <i className="bx bxl-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
