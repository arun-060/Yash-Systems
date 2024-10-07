// import React from 'react'
// import Phone from '@mui/icons-material/Phone';
// import Mail from '@mui/icons-material/Mail';
// import Clock from '@mui/icons-material/AccessTime';
// import Calendar from '@mui/icons-material/Event';
// import MapPin from '@mui/icons-material/LocationOn';
// import FileText from '@mui/icons-material/Description';
// import './Contact.css'

// function Contact() {
//   return (
//     <div className="contact-page">
//       {/* <header>
//         <nav>
//           <ul>
//             <li><a href="#home">HOME</a></li>
//             <li><a href="#about">ABOUT US</a></li>
//             <li><a href="#support">SUPPORT</a></li>
//             <li><a href="#contact">CONTACT</a></li>
//           </ul>
//         </nav>
//       </header> */}
//       <main>
//         {/* <h1>Yash System</h1> */}
//         <div className="contact-info">
//           <div className="info-card">
//             <Phone className="icon" />
//             <p>Contact Us</p>
//             <p>+91 9999999999</p>
//           </div>
//           <div className="info-card">
//             <Mail className="icon" />
//             <p>Email Address</p>
//             <p>email@email.com</p>
//           </div>
//           <div className="info-card">
//             <Clock className="icon" />
//             <p>Service timing</p>
//             <p>9 a.m to 6 p.m</p>
//           </div>
//         </div>
//         <div className="appointment-form">
//           <h2>Book an Appointment now</h2>
//           <form>
//             <div className="form-group">
//               <Mail className="icon" />
//               <input type="email" placeholder="Enter your email" required />
//             </div>
//             <div className="form-group">
//               <Phone className="icon" />
//               <input type="tel" placeholder="Enter your phone number" required />
//             </div>
//             <div className="form-group">
//               <Calendar className="icon" />
//               <input type="datetime-local" placeholder="Appointment date and time" required />
//             </div>
//             <div className="form-group">
//               <MapPin className="icon" />
//               <input type="text" placeholder="Enter your address" required />
//             </div>
//             <div className="form-group">
//               <FileText className="icon" />
//               <textarea placeholder="Describe your problem" required></textarea>
//             </div>
//             <button type="submit" className="book-appointment">Book Appointment</button>
//           </form>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Contact

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>Contact Us</h1>
      </header>
      
      <main>
        <section className="contact-info">
          <h2>Support & Sales</h2>
          <p className="phone">(255) 352-6258</p>
          <h3>Email</h3>
          <p>info@divelectronicsstore.com</p>
          <h3>Shop</h3>
          <p>1234 Div St. #1000 San Francisco, CA 93945</p>
        </section>
        
        <section className="contact-form">
          <form>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL ADDRESS" />
            <textarea placeholder="MESSAGE"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </section>
        <br></br>
        
        {/* <section className="faq">
          <h2>FAQ</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Curabitur aliquet ispum dolor amet sit pellentesqu?</h3>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
            </div>
            <div className="faq-item">
              <h3>Lorem ipsum dolor sit amet, consectetur?</h3>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
            </div>
            <div className="faq-item">
              <h3>Pellentesque in ipsum id orci porta dapibus?</h3>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
            </div>
            <div className="faq-item">
              <h3>Curabitur non nulla sit amet nisl tempus?</h3>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
            </div>
            <div className="faq-item">
              <h3>Nulla porttitor accumsan tincidunt?</h3>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
            </div>
            <div className="faq-item">
              <h3>Potenti neque scelerisque augue nec phasellus?</h3>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
            </div>
          </div>
        </section> */}
        
        <section className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862951.4010549718!2d73.517784!3d17.530084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be19c83d94727a1%3A0x139c53a1c73e6d26!2sJama%20Masjid%20Moholla%2C%20Chiplun%2C%20Maharashtra%20415605!5e0!3m2!1sen!2sus!4v1565726441148" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </section>
      </main>
      
      {/* <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>Shop</li>
              <li>Categories</li>
              <li>Sale</li>
              <li>Promotions</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Subscribe</h3>
            <form className="subscribe-form">
              <input type="email" placeholder="EMAIL" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div className="footer-section">
            <h3>Follow</h3>
            <div className="social-icons">
              <span className="icon">f</span>
              <span className="icon">t</span>
              <span className="icon">y</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>1235 Div St. San Francisco, CA 92351</p>
          <p>Copyright © 2021Company</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Contact;