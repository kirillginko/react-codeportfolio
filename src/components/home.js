import React from "react";

export default function home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="home__container bd-grid">
          <h1 className="home__title">
            <span>
              BON
              <br />
              JOUR!
            </span>
          </h1>
          <h2 className="home_h2">Nice to meet you...</h2>

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
