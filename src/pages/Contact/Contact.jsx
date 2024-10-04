import React from 'react'
import Phone from '@mui/icons-material/Phone';
import Mail from '@mui/icons-material/Mail';
import Clock from '@mui/icons-material/AccessTime';
import Calendar from '@mui/icons-material/Event';
import MapPin from '@mui/icons-material/LocationOn';
import FileText from '@mui/icons-material/Description';
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      {/* <header>
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#support">SUPPORT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header> */}
      <main>
        {/* <h1>Yash System</h1> */}
        <div className="contact-info">
          <div className="info-card">
            <Phone className="icon" />
            <p>Contact Us</p>
            <p>+91 9999999999</p>
          </div>
          <div className="info-card">
            <Mail className="icon" />
            <p>Email Address</p>
            <p>email@email.com</p>
          </div>
          <div className="info-card">
            <Clock className="icon" />
            <p>Service timing</p>
            <p>9 a.m to 6 p.m</p>
          </div>
        </div>
        <div className="appointment-form">
          <h2>Book an Appointment now</h2>
          <form>
            <div className="form-group">
              <Mail className="icon" />
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <Phone className="icon" />
              <input type="tel" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <Calendar className="icon" />
              <input type="datetime-local" placeholder="Appointment date and time" required />
            </div>
            <div className="form-group">
              <MapPin className="icon" />
              <input type="text" placeholder="Enter your address" required />
            </div>
            <div className="form-group">
              <FileText className="icon" />
              <textarea placeholder="Describe your problem" required></textarea>
            </div>
            <button type="submit" className="book-appointment">Book Appointment</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Contact