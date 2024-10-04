import React from 'react'
import { Printer, Clock, Users, Mail } from 'lucide-react';
import "./AboutUs.css"

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Yash Systems</h1>
      
      <div className="card-container">
        <div className="card">
          <Printer className="icon" />
          <h2>Our Business</h2>
          <p>
            Yash Systems is your one-stop shop for all printing needs. We offer a wide range of printers, supplies, and expert services to keep your business running smoothly.
          </p>
        </div>
        
        <div className="card">
          <Users className="icon" />
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide top-quality printing solutions and unparalleled customer service, helping businesses and individuals achieve their printing goals efficiently and cost-effectively.
          </p>
        </div>
        
        <div className="card">
          <Clock className="icon" />
          <h2>Our History</h2>
          <p>
            Founded in [Year], Yash Systems has grown from a small local shop to a trusted name in the printing industry. We've consistently evolved with technology to offer the latest and best in printing solutions.
          </p>
        </div>
      </div>
      
      <div className="team-section">
        <h2>Our Team</h2>
        <p>
          At Yash Systems, our team of printing experts is dedicated to providing you with the best service and solutions. With years of combined experience, we're here to help you with all your printing needs.
        </p>
      </div>
      
      <div className="contact-section">
        <div>
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? We're here to help!
          </p>
        </div>
        <button className="contact-button">
          <Mail className="icon" /> Contact Us
        </button>
      </div>
    </div>
  )
}

export default AboutUs