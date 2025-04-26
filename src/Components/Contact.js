import React from 'react';
import Contact2 from './Contact2';

const Contact = () => {
  return (
    <>
    <div className='mt-4' id="contact">
    <div className='container'>
      <div style={{ padding: "100px" }}>
        <h1 className="text-center mt-5"><strong>Contact Us</strong></h1>
        <p className="text-center">
          Have questions about our gym or membership options? We're here to help you start your fitness journey. <strong>Just fill the Form</strong>, We will contact you shortly!
        </p>
      </div>
    </div>
    </div>
    <Contact2/>
    </>
  );
};

export default Contact;
