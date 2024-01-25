import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Iwona Pałys-Szweda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Strona główna
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/author" className="nav-link">
                O autorce
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/history" className="nav-link">
                Moze historia
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chapter" className="nav-link">
                Nowy rozdział
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workshop" className="nav-link">
                Prace warsztatowe
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/composition" className="nav-link">
                Prace kompozycyji
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
