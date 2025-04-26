import React from 'react'

const Workout = () => {
  return (
    <div id='workout-program'>
      <div className="container">
        <h2 className='my-4'><strong>Workout Programs</strong> </h2>
        <div className="d-flex justify-content-center flex-wrap">
        <div className="card mx-3 my-3 cards" style={{ width: '18rem', boxShadow: "#241a1a 8px 8px 10px" }}>
    <img src="/Images/Strength.png" className="card-img-top" alt="..." />
    <div className="card-body card-color">
      <h3 className="card-title">Strength Training</h3>
      <p className="card-text">Build muscle and boost metabolism with heavy resistance and compound lifts.</p>
    </div>
  </div>
  <div className="card mx-3 my-3 cards" style={{ width: '18rem', boxShadow: "#241a1a 8px 8px 10px" }}>
    <img src="/Images/Cardio.png" className="card-img-top" alt="..." />
    <div className="card-body card-color">
      <h3 className="card-title">Cardio</h3>
      <p className="card-text">Improve heart health and endurance with running, cycling, or HIIT workouts.</p>
    </div>
  </div>
  <div className="card mx-3 my-3 cards" style={{ width: '18rem', boxShadow: "#241a1a 8px 8px 10px" }}>
    <img src="/Images/Crossfit.png" className="card-img-top" alt="..." />
    <div className="card-body card-color">
      <h3 className="card-title">Crossfit</h3>
      <p className="card-text">High-intensity workouts combining strength, cardio, and functional movements daily.</p>
    </div>
  </div>
  <div className="card mx-3 my-3 cards" style={{ width: '18rem', boxShadow: "#241a1a 8px 8px 10px" }}>
    <img src="/Images/Zumba.png" className="card-img-top" alt="..." />
    <div className="card-body card-color">
      <h3 className="card-title">Zumba</h3>
      <p className="card-text">Dance-based cardio workout blending fun rhythms with full-body calorie burning.</p>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Workout
