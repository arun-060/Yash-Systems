import React from 'react';
import "./Service.css";
import { FaRegCalendarCheck } from 'react-icons/fa';
import heroImage from './../../assets/hero_1.png'; // Importing the first image for the hero section
import serviceImage from './../../assets/hero_2.png'; // Importing the second image for the image section

function Service() {
  return (
    <div className="service-page">
  {/* <header className="header">
    <img src={heroImage} alt="Yash System Logo" className="logo" />
  </header> */}
  
  <div className="banner">
    {/* <h1>Someone help me</h1>
    <p>I've deleted "Printer S..."</p> */}
  </div>
  
  <div className="services-list">
    <h2>OUR SERVICES</h2>
    <ul>
      <li>Computer Sales & Service</li>
      <li>Laptop Sales & Service</li>
      <li>Printer Sales & Service</li>
      <li>Data Recovery</li>
      <li>Describe your problem</li>
    </ul>
  </div>
  
  <div className="printer-problem">
    <img src={serviceImage} alt="Printers" className="printers-image" />
    <div className="problem-text">
      {/* <h2>PRINTER'S PROBLEM?</h2>
      <h3>Don't Worry...</h3>
      <p>Printers Repairing,Toner Riffil Cartridge Refilling etc. available here.</p> */}
    </div>
  </div>
  
  <div className="appointment-form">
    <h3>Book an Appointment now</h3>
    <form>
      <input type="email" placeholder="Enter your email" />
      <input type="tel" placeholder="Enter your phone-number" />
      <input type="date" placeholder="Select date" />
      <input type="time" placeholder="Select time" />
      <textarea placeholder="Enter your address"></textarea>
      <button type="submit">Book Appointment</button>
    </form>
  </div>
</div>
  );
}

export default Service;
