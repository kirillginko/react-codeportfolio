import React from "react";

export default function about() {
  return (
    <div>
      <section class="about section" id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603996202/perfil_q9n1du.png"
              alt=""
            />
          </div>

          <div>
            <h2 class="about__subtitle">
              <a href="#" class="effect-underline">
                I'm Kirill Ginko
              </a>
            </h2>
            <span class="about__profession">
              A Full-Stack Web-Developer currently living in New York, NY
            </span>
            <p class="about__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              consectetur, architecto quas fugiat, iste inventore facere
              repellendus delectus id, vitae blanditiis.
            </p>

            <div class="about__social">
              <a
                href="https://www.linkedin.com/in/kirill-ginko-a613433a/"
                class="about__social-icon"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/kirillginko"
                class="about__social-icon"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a href="#" class="about__social-icon">
                <i class="bx bxl-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
