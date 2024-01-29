import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container1">
      <h1 className="h1Contact">Skontaktuj się ze mną !</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Twoje imie</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Twój email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Twoja wiadomość</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            rows={6}
            required
          />
        </div>
        <button type="submit" className="btn">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default Contact;
