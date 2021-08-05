import React, { useEffect } from "react";
import { gsap, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({});

export default function Skills() {
  useEffect(() => {
    gsap.from(
      ".scroll1",
      {
        scrollTrigger: {
          trigger: ".scroll1",
          start: "top bottom",
          end: "+=80%",
          markers: true,
          scrub: true,
        },
        y: -200,
        opacity: 0,
        duration: 1.7,
        stagger: 0.3,
      },
      "+=3"
    );
  }, []);
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section-title scroll1">Skills</h2>

        <div className="skills__container bd-grid">
          <div className="skills__box">
            <h3 className="skills__subtitle scroll">Development</h3>
            <span className="skills__name scroll1">Html5</span>
            <span className="skills__name scroll1">CSS3</span>
          </div>

          <div className="row scroll1">
            <a href="#"></a>
            <img
              src="https://this.deakin.edu.au/wp-content/uploads/2019/06/coding-on-a-computer.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
