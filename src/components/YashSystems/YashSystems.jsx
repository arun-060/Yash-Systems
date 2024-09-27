import React from 'react';
import './YashSystems.css'; // Import the CSS file for styles
import ys1 from './../../assets/ys1.png';
import ys2 from './../../assets/ys2.png';
import ys3 from './../../assets/ys3.png';

const YashSystems = () => {
  return (
    <div className="container">
      <h1>Why choose Yash Systems?</h1>
      <div className="cards">
        <div className="card">
          <img src={ys1} alt="Trusted Services" />
          <h2>Trusted Services</h2>
          <p>Yash Systems is a trusted company in Chiplun</p>
        </div>
        <div className="card">
          <img src={ys2} alt="Remote Desktop Services" />
          <h2>Trusted Services</h2>
          <p>Yash Systems is a trusted company in Chiplun</p>
        </div>
        <div className="card">
          <img src={ys3} alt="Trusted Services" />
          <h2>Trusted Services</h2>
          <p>Yash Systems is a trusted company in Chiplun</p>
        </div>
      </div>
    </div>
  );
};

export default YashSystems;