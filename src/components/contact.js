import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dk3dgiv",
        "portfolio_template",
        e.target,
        "user_uXFJN5Q1eWTxNrhzHwAy0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

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
            <span className="contact__text">USA</span>
          </div>

          <form action="" className="contact__form" onSubmit={sendEmail}>
            <div className="contact__inputs">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="contact__input"
                name="Name"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="contact__input"
                name="Email"
                required
              />
            </div>
            <input
              name="Subject"
              placeholder="Subject"
              id="subject"
              cols="0"
              rows="1"
              className="contact__input"
              required
            ></input>

            <textarea
              name="Message"
              placeholder="Tell me what you are looking for..."
              id="text"
              cols="0"
              rows="10"
              className="contact__input"
              required
            ></textarea>

            <input type="submit" value="Submit" className="contact__button" />
          </form>
        </div>
      </section>
    </div>
  );
}
