import React from "react";

export default function Projects() {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio__container bd-grid">
          <div className="portfolio__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1627421667/Screen_Shot_2021-07-27_at_5.34.15_PM_ujkxwa.png"
              alt=""
            />

            <div className="portfolio__link">
              <a
                href="https://monsieurbier.herokuapp.com/"
                className="portfolio__link-name"
              >
                React Music Player
              </a>
              <a>More Details</a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603997031/Screen_Shot_2020-10-29_at_2.43.23_PM_oleeeo.png"
              alt=""
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603997031/Screen_Shot_2020-10-29_at_2.43.23_PM_oleeeo.png"
              alt=""
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1627421932/Screen_Shot_2021-07-27_at_5.38.38_PM_tzlcm4.png"
              alt=""
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                Amazon Clone
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603997031/Screen_Shot_2020-10-29_at_2.43.23_PM_oleeeo.png"
              alt=""
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
          <div className="portfolio__img">
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1603997031/Screen_Shot_2020-10-29_at_2.43.23_PM_oleeeo.png"
              alt=""
            />

            <div className="portfolio__link">
              <a href="#" className="portfolio__link-name">
                View details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
