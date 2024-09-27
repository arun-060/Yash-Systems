import React from 'react';
import './Service.css';
import service from './../../assets/service.png'; // Import the image file

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-heading">OUR SERVICES!</h1>
      <div className="service-banner">
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
      </div>
      <button className="service-button">BOOK YOUR SERVICE NOW</button>
    </div>
  );
};

export default Service;
