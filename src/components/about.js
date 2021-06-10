import React from "react";

export default function about() {
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603996202/perfil_q9n1du.png"
              alt=""
            />
          </div>

          <div>
            <h2 className="about__subtitle">
              <a href="#" className="effect-underline">
                I'm Kirill Ginko
              </a>
            </h2>
            <span className="about__profession">
              A Full-Stack Web-Developer currently living in New York, NY
            </span>
            <p className="about__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              consectetur, architecto quas fugiat, iste inventore facere
              repellendus delectus id, vitae blanditiis.
            </p>

            <div className="about__social">
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
