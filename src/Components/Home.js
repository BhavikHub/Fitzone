import React from 'react';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>Elevate Your Fitness</h1>
        <p>Archieve your goals with our personlaized workout plans.</p>
            <a href="#contact" className="btn btn-danger mx-3">
              Get Started
            </a>
        <div className="bottom-icon text-center position-absolute start-50 translate-middle-x">
        <a href="#workout-program">
          <i className="fa-solid fa-chevron-down fa-2x text-light bounce-icon"></i>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Home;
