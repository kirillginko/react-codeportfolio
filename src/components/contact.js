import React from "react";

export default function contact() {
  return (
    <div>
      <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        <div class="contact__container bd-grid">
          <div class="contact__info">
            <h3 class="contact__subtitle">EMAIL</h3>
            <span class="contact__text">kirillginko@gmail.com</span>

            <h3 class="contact__subtitle">PHONE</h3>
            <span class="contact__text">301-512-4249</span>

            <h3 class="contact__subtitle">New York, NY</h3>
            <span class="contact__text">US</span>
          </div>

          <form action="" class="contact__form">
            <div class="contact__inputs">
              <input
                type="text"
                id="name"
                placeholder="Name"
                class="contact__input"
              />
              <input
                type="mail"
                id="email"
                placeholder="Email"
                class="contact__input"
              />
            </div>

            <textarea
              name=""
              id="text"
              cols="0"
              rows="10"
              class="contact__input"
            ></textarea>

            <input type="submit" value="Submit" class="contact__button" />
          </form>
        </div>
      </section>
    </div>
  );
}
