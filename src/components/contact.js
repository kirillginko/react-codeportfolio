import React from "react";

export default function contact() {
  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <div className="contact__info">
            <h3 className="contact__subtitle">EMAIL</h3>
            <span className="contact__text">kirillginko@gmail.com</span>

            <h3 className="contact__subtitle">PHONE</h3>
            <span className="contact__text">301-512-4249</span>

            <h3 className="contact__subtitle">New York, NY</h3>
            <span className="contact__text">US</span>
          </div>

          <form action="" className="contact__form">
            <div className="contact__inputs">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="contact__input"
              />
              <input
                type="mail"
                id="email"
                placeholder="Email"
                className="contact__input"
              />
            </div>

            <textarea
              name=""
              id="text"
              cols="0"
              rows="10"
              className="contact__input"
            ></textarea>

            <input type="submit" value="Submit" className="contact__button" />
          </form>
        </div>
      </section>
    </div>
  );
}
