import React from "react";

export default function home() {
  return (
    <div>
      <section class="home" id="home">
        <div class="home__container bd-grid">
          <h1 class="home__title">
            <span>
              BON
              <br />
              JOUR!
            </span>
          </h1>
          <h2 class="home_h2">Nice to meet you...</h2>

          <div class="home__scroll">
            <a href="#about" class="home__scroll-link">
              <i class="bx bx-up-arrow-alt"></i>Scroll down
            </a>
          </div>

          <img
            src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603996202/perfil_q9n1du.png"
            alt=""
            class="home__img"
          />
        </div>
      </section>
    </div>
  );
}
