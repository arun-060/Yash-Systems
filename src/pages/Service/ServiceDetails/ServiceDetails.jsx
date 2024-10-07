import React from "react";
// import "./ServiceDetails.min.css";
import styles from './ServiceDetails.min.css'
// import logo from "../../Assets/NotificationPage/YsLogo.png";
// import dataImg from "../../Assets/ServiceDetailsPage/dataimg.png";
import dataImg from '../../../assets/ServiceDetailsPage/dataimg.png'
export default function ServiceDetails() {
  return (
    <div className="computer-service">
      {/* <header>
        <div className="logo">Yash System</div>
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

      <section className='heroo'>
        <h1>Computer Sales & Service</h1>
      </section>

      <main>
        <div className="content">
          <div className="image-container">
            <img
              src={dataImg} 
              width={"90px"}
              height={"60px"}
              alt="Computer components"
            />
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p> */}
            {/* <h2>Computer Sales & Service</h2> */}
          </div>

          <div className="services-bookingg">
            <h3>OUR SERVICES</h3>
            <ul>
              <li>Computer Sales & service</li>
              <li>Laptop Sales & Service</li>
              <li>Printer Sales & Service</li>
              <li>Data Recovery</li>
              <li>Describe your problem</li>
            </ul>

            
            <form>
            <h3>Book an Appointment now</h3>
              <input type="email" placeholder="Enter your email" />
              <input type="tel" placeholder="Enter your phone-number" />
              <input
                type="datetime-local"
                placeholder="Appointment date and time"
              />
              <input type="text" placeholder="Enter your address" />
              <textarea placeholder="Describe your problem"></textarea>
              <button type="submit">Book Appointment</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
