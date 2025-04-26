import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  interestedIn: yup.string().required("Please select an option"),
  gender: yup.string().required("Please select gender"),
});

const Contact2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/contact', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Submitted Successfully");
        reset();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try later.");
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(106, 5, 5)", padding: "30px" }}>
      <div className="container">
        <div className="mb-5">
          <h4 className="text-center">GET IN TOUCH</h4>
          <h2>Start Your Fitness Journey Today</h2>
        </div>
        <div className="row g-4 gx-5 text-start" style={{ margin: "20px" }}>
          <div className="col-lg-6">
            <div className="p-4 rounded shadow-sm contactbox">
              <h4 className="mb-3">Contact Us</h4>
              <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="form-control"
                    placeholder="Your name"
                  />
                  {errors.name && <small className="text-danger">{errors.name.message}</small>}
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="form-control"
                    placeholder="Your email"
                  />
                  {errors.email && <small className="text-danger">{errors.email.message}</small>}
                </div>

                <div className="col-12">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="form-control"
                    placeholder="Your phone number"
                  />
                  {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                </div>

                <div className="col-12">
                  <label htmlFor="interestedIn" className="form-label">Interested In</label>
                  <select
                    className="form-select"
                    id="interestedIn"
                    {...register("interestedIn")}
                  >
                    <option value="">Select</option>
                    <option value="basic">Basic Membership</option>
                    <option value="premium">Premium Membership</option>
                    <option value="elite">Elite Membership</option>
                    <option value="training">Personal Training</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interestedIn && <small className="text-danger">{errors.interestedIn.message}</small>}
                </div>

                <div className="col-12">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    className="form-select"
                    id="gender"
                    {...register("gender")}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <small className="text-danger">{errors.gender.message}</small>}
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-danger px-4">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <h3>Location & Hours</h3>
            </div>
            <div className="p-4 rounded shadow-sm mb-4 contactbox">
              <p><i className="fa-solid fa-location-dot"></i> <strong>Address:</strong> <br />123 Fitness Street, Hisar, Haryana, 125001</p>
              <p><i className="fa-solid fa-phone"></i> <strong>Phone:</strong> <br />+91 74041 09424</p>
              <p><i className="fa-solid fa-envelope"></i> <strong>Email:</strong><br />info@gymfitzone.com</p>
            </div>

            <div className="p-4 rounded shadow-sm contactbox">
              <h5 className="mb-3"> Hours of Operation</h5>
              <p><strong>Monday - Friday:</strong> 6:00 AM – 10:00 PM</p>
              <p><strong>Saturday:</strong> 7:00 AM – 8:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
