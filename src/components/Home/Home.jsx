import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div></div>
      <div className="row">
        <div className="col">
          <h1 className="h1Home">Moja przestrzeń koloru</h1>
          <p>
            "Przez malarskie kreacje staram się uchwycić piękno otaczającego
            świata w wyjątkowy sposób."
          </p>
         
        </div>
        <div className="col">
          <Link to="/author" className="card card1">
            <h5>O autorce</h5>
          </Link>
          <Link to="/history" className="card card2">
            <h5>Moze historia</h5>
          </Link>
          <Link to="/chapter" className="card card3">
            <h5>Nowy rozdział</h5>
          </Link>
          <Link to="/workshop" className="card card4">
            <h5>Prace warsztatowe</h5>
          </Link>
          <Link to="/composition" className="card card5">
            <h5>Propozycje kompozycji</h5>
          </Link>
          <Link to="/contact" className="card card6">
            <h5>Contact</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
