import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-rounded navbar-margin">
      <div className="container-fluid">
        <Link className="navbar-brand navfont" to="/">
          nemevid teszt projekt blogja
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
              <Link className="nav-link" to="/">
                Főoldal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Bejegyzés létrehozása
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
               Posztok
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Rólam
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
