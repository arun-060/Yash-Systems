import React from 'react';
import './Service.css';
import tservice from './../../assets/tservice.png'; // Replace with your actual path
import rservice from './../../assets/rservice.png';
import pr from './../../assets/pr.png';
import service from './../../assets/service.png'; // Import the image file

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-heading">OUR SERVICES!</h1>
      {/* <div className="service-banner">
        <img 
          src={service} 
          alt="Computer services banner" 
          className="banner-image"
        />
        <div className="overlay-text">
          <p>
            It is our goal to provide innovative repair services for Laptops, Desktops, and Printers, 
            providing excellent customer service and quality repair with a quick turnaround. 
            We serve to get you back to normal use of your device as soon as possible and more 
            efficiently while creating long-term relationships with customers.
          </p>
        </div>
      </div> */}
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
      <button className="service-button">BOOK YOUR SERVICE NOW</button>
    </div>
  );
};

export default Service;
