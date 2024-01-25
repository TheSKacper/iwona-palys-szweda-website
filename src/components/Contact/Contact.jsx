import React from "react";
import "./contact.css";
import {
  Telephone,
  Envelope,
  Instagram,
  Facebook,
} from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="container1">
      <div className="boxContact">
        <div className="leftContact">
          <h1 className="h1Contact">Kontakt</h1>
          <div className="phoneContact">
            <Telephone className="icon" />{" "}
            <a href="tel:+48600251355">+48 645 344 343</a>
          </div>
          <div className="emailContact">
            <Envelope className="icon" />{" "}
            <a href="mailto:iszweda@o2.pl">iszweda@o2.pl</a>
          </div>
          <div className="instagramContact">
            <Instagram className="icon" />
            <span>
              <a href="www.onet.pl">iszweda7</a>
            </span>
          </div>
          <div className="facebookContact">
            <Facebook className="icon" />
            <span>
              <a href="https://www.onet.pl/">Iwona Palys-Szweda</a>
            </span>
          </div>
        </div>
        <div className="rightContact">
          <form action="">
            <h1 className="h1Contact">Napisz do mnie </h1>
            <div className="input-group">
              <input
                type="text"
                placeholder="First Name"
                aria-label="First name"
                className="form-control"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Second Name"
                aria-label="Second name"
                className="form-control"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="form-control"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Title"
                aria-label="Title"
                className="form-control"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Phone"
                aria-label="Phone"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label textarea">Your Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
