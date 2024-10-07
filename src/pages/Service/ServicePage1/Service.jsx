import React from 'react';
// import './Service.min.css';
// import styles from '../Service/Service.min.css'
// import './Service.min.css'
import styles from './Service.min.css'
import { Route, useNavigate } from 'react-router-dom';
import background from '../../../assets/serviceDashboard/servicebackground.png'
import topimage from '../../../assets/serviceDashboard/top_image-removebg-preview.png'
import cardImg from '../../../assets/serviceDashboard/mac.png'
import compimg from '../../../assets/serviceDashboard/computer.png'





export default function YashSystemServices() {
  const navigate = useNavigate();
  
  const handleEvent =()=>{
    navigate('/service-details');
  }
  
const ServiceCard = ({ image, title }) => (
 
  <div className="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <button className="read-more" onClick={handleEvent} >READ MORE</button>
  </div>
);


  const services = [
    { image: cardImg, title: "Computer Sales & Service" },
    { image: cardImg, title: "Printer Sale & Service" },
    { image: compimg, title: "OS Installing & Virus Cleaning" },
    { image: cardImg, title: "Laptop Sales & Service" },
    { image: cardImg, title: "Data Recovery" },
    { image: compimg, title: "Computer Sales & Service" },
  ];

  return (
    <div className= {styles.yashsystem}>
      {/* <header>
        <div className="logo">
          <img src="/placeholder.svg?height=50&width=50" alt="Yash System Logo" />
          <span>Yash System</span>
        </div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICE</li>
            <li>SUPPORT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header> */}
      
      <section className="hero">
        <h1>OUR SERVICE</h1>
        <div className="hero-image">
          <img src={background} alt="Computer Equipment" />
        </div>
          <img className='topimge' src={topimage} width={"500px"} height={"200px"} alt='top image' />
      </section>
      
      <section className="services">
        {services.map((service, index) => (
          <ServiceCard key={index} image={service.image} title={service.title} />
        ))}
      </section>
     
    </div>
  );
}