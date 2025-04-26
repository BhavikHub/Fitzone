import React from 'react'

const Trainer = () => {
  return (
    <div id='trainer'>
      <div className="container">
      <h2 className='my-4'><strong>Meet Our Trainers</strong></h2>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="card mx-3 my-3 card-color cards" style={{ width: '18rem'}}>
          <div className="d-flex justify-content-center mt-3">
            <img 
              src={process.env.PUBLIC_URL + "/Images/Strength.png"} 
              className="card-img-top" 
              alt="trainer" 
              style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} 
            />
          </div>
          <div className="card-body card-color text-center">
            <h3 className="card-title">Bhavik</h3>
            <p className="card-text">Strength Personal Trainer / Dietician</p>
          </div>
        </div>
        <div className="card mx-3 my-3 card-color cards" style={{ width: '18rem'}}>
          <div className="d-flex justify-content-center mt-3">
            <img 
              src={process.env.PUBLIC_URL + "/Images/khushal.jpg"} 
              className="card-img-top" 
              alt="trainer" 
              style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} 
            />
          </div>
          <div className="card-body card-color text-center">
            <h3 className="card-title">Khushal Saini</h3>
            <p className="card-text">Crossfit Personal Trainer</p>
          </div>
        </div>
        <div className="card mx-3 my-3 card-color cards" style={{ width: '18rem'}}>
          <div className="d-flex justify-content-center mt-3">
            <img 
              src={process.env.PUBLIC_URL + "/Images/Bharat.jpg"} 
              className="card-img-top" 
              alt="trainer" 
              style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} 
            />
          </div>
          <div className="card-body card-color text-center">
            <h3 className="card-title">Bharat Saini</h3>
            <p className="card-text">Cardio Personal Trainer</p>
          </div>
        </div>
        <div className="card mx-3 my-3 card-color cards" style={{ width: '18rem'}}>
          <div className="d-flex justify-content-center mt-3">
            <img 
              src={process.env.PUBLIC_URL + "/Images/Yatin.jpg"} 
              className="card-img-top" 
              alt="trainer" 
              style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} 
            />
          </div>
          <div className="card-body card-color text-center">
            <h3 className="card-title">Yatin Saini</h3>
            <p className="card-text">Crossfit Personal Trainer</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Trainer
