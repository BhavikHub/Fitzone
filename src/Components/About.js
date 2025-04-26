import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className='container'>
      <div className="row align-items-center justify-content-between" style={{margin:"45px"}}>
        <div className="col-12 col-md-6 order-2 order-md-1 my-4 text-start">
          <h4>About FitZone</h4>
          <h1 style={{ color: "#ff3939" }}>Your Journey to a Healthier Life Starts Here</h1>
          <p>At FitZone, we believe in creating a community where fitness becomes a lifestyle, not just a routine. Our gym is designed to inspire and motivate people of all fitness levels.</p>
          <p>Founded in 2015, we've helped thousands of members transform their bodies and lives through personalized training programs, nutrition guidance, and an inclusive atmosphere.</p>
          <div className="d-flex justify-content-between">
           <div> <div>
          <i className="fa-solid fa-check text-success"></i>  10,000+ sq ft facility
            </div>
            <div>
          <i className="fa-solid fa-check text-success"></i>  Sauna & spa services
            </div>
            </div>
            <div>
              <div>
              <i className="fa-solid fa-check text-success"></i>  Certified trainers
              </div>
              <div>
              <i className="fa-solid fa-check text-success"></i>  Free parking
              </div>
              </div>
          </div>
          <div className="d-flex justify-content-center ">
            <a href="#contact" className="btn btn-danger my-3 mx-3" style={{borderRadius:"10px", fontSize:"20px"}}>Learn More</a>
          </div>
        </div>

        <div className="col-12 col-md-6 order-1 order-md-2 text-center my-4">
          <img src={process.env.PUBLIC_URL + "/Images/Abouts.jpg"} alt="about" style={{
            height: "auto",
            maxWidth: "100%",
            borderRadius: "10px",
            boxShadow: "#241a1a 12px 12px 10px"
          }} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
