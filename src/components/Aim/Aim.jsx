import React from 'react';
import './Aim.css'; // Make sure to create the CSS file for styling
import tservice from './../../assets/tservice.png'; // Replace with your actual path
import rservice from './../../assets/rservice.png'; // Replace with your actual path
import pr from './../../assets/pr.png'; // Replace with your actual path

const Aim = () => {
  return (
    <div className="aim-container">
      <h1 className="aim-heading">OUR AIM</h1>
      <p className="aim-description">
        It is our goal to provide innovative repair services for Laptops, Desktops, and Printers providing excellent customer service and quality repair with a quick turnaround. We serve to get you back to normal use of your device as soon as possible and more efficiently while creating long-term relationships with customers.
      </p>

      <div className="aim-services">
        <div className="service-box">
          <img src={tservice} alt="Trusted Services" className="service-icon" />
          <h3>Trusted services</h3>
          <p>First We Provide laptop and PC/Computer Fault diagnostics check!</p>
        </div>

        <div className="service-box">
          <img src={rservice} alt="Remote Service" className="service-icon" />
          <h3>Remote Service</h3>
          <p>First We Provide laptop and PC/Computer Fault diagnostics check!</p>
        </div>

        <div className="service-box">
          <img src={pr} alt="Professional Repair" className="service-icon" />
          <h3>Professional Repair</h3>
          <p>First We Provide laptop and PC/Computer Fault diagnostics check!</p>
        </div>
      </div>
    </div>
  );
};

export default Aim;
