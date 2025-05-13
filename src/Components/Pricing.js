import React from "react";

const Pricing = () => {
  return (
    <div  id="pricing">
      <div className='container'>
      <h2 className="my-4">
        <strong>Membership Plans</strong>
      </h2>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="card mx-3 my-3 card-color cards" style={{ width: "18rem"}}>
          <div className="card-body card-color text-start">
            <h3 className="card-title">
              <strong>Basic</strong>
            </h3>
            <p className="card-text">
              <strong style={{ fontSize: "30px" }}>Rs 1200</strong>/month
            </p>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Full Gym Access</div>
            <div> {" "}<i className="fa-solid fa-check text-success"></i> 2 group classes per week</div>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Locker room access</div>
            <div>{" "}<i className="fa-solid fa-xmark text-danger"></i> Personal training</div>
            <div>{" "}<i className="fa-solid fa-xmark text-danger"></i> Sauna access</div>
          </div>
          <div className="my-4">
          <a href="#contact" className="btn btn-outline-danger mx-3">Join now</a>
          </div>
        </div>
        <div className="card mx-3 my-3 card-color cards" style={{ width: "18rem"}}>
          <div className="card-body card-color text-start">
            <h3 className="card-title">
              <strong>Premium</strong>
            </h3>
            <p className="card-text">
              <strong style={{ fontSize: "30px" }}>Rs 1800</strong>/month
            </p>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Full Gym Access</div>
            <div> {" "}<i className="fa-solid fa-check text-success"></i> Unlimited Group Class</div>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Locker room access</div>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> 1 Personal training / month</div>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Sauna access</div>
          </div>
          <div className="my-4">
            <a href="#contact" className="btn btn-outline-danger mx-3">Join now</a>
          </div>
        </div>
        <div className="card mx-3 my-3 card-color cards" style={{ width: "18rem"}}>
          <div className="card-body card-color text-start">
            <h3 className="card-title">
              <strong>Elite</strong>
            </h3>
            <p className="card-text">
              <strong style={{ fontSize: "30px" }}>Rs 2500</strong>/month
            </p>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Full Gym Access</div>
            <div> {" "}<i className="fa-solid fa-check text-success"></i> Unlimited group classes</div>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Premium locker room</div>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> 4 personal training / month</div>
            <div>{" "}<i className="fa-solid fa-check text-success"></i> Sauna access</div>
          </div>
          <div className="my-4">
          <a href="#contact" className="btn btn-outline-danger mx-3">Join now</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
