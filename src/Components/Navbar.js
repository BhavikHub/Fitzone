import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark background">
        <div className="container-fluid">
          <a className="navbar-brand mx-4" href="/">
          <img src={process.env.PUBLIC_URL + "/lago.png"} alt="..."  />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 color">
              <li className="nav-item mx-2">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#workout-program">
                  Workout Programs
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#trainer">
                  Trainers
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>

            <a href="#contact" className="btn btn-danger mx-3">
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
