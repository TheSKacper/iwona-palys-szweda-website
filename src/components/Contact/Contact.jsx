import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container1">
      <h1 className="h1Contact">Skontaktuj się ze mną !</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Twoje imie
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Twój email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Twoja wiadomość
          </label>
          <textarea
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            rows={6}
            required
          />
        </div>
        <button type="submit" class="btn">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default Contact;
