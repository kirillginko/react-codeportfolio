import React from "react";

export default function skills() {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div className="skills__box">
            <h3 className="skills__subtitle">Development</h3>
            <span className="skills__name">Html5</span>
            <span className="skills__name">CSS3</span>
          </div>

          <div className="row">
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
