// import React from 'react'
// import './Footer.css'
// import x from './../../assets/x.png'
// import facebook from './../../assets/facebook.png'
// import linkedin from './../../assets/linkedin.png'
// import instagram from './../../assets/instagram.png'
// import message from './../../assets/message.png'
// import mail from './../../assets/mail.png'
// import location from './../../assets/location.png'

// function Footer() {
//   return (
//     <div className="container-footer">
//       <div className="left-section">
//         <h2>Useful Links</h2>
//         <ul>
//           <li>Privacy Policy</li>
//           <li>Terms & Conditions</li>
//         </ul>
//         <h2>Follow us on</h2>
//         <div className="social-icons">
//           <a href="#">
//             <i className="fa fa-instagram">
//               <img src={instagram} alt="" srcset="" />
//             </i>
//           </a>
//           <a href="#">
//             <i className="fa fa-facebook">
//               <img src={facebook} alt="" srcset="" />
//             </i>
//           </a>
//           <a href="#">
//             <i className="fa fa-twitter">
//               <img src={x} alt="" srcset="" />
//             </i>
//           </a>
//           <a href="#">
//             <i className="fa fa-linkedin">
//               <img src={linkedin} alt="" srcset="" />
//             </i>
//           </a>
//         </div>
//         <p className="copyright">Copyright © 2024</p>
//       </div>
//       <div className="right-section">
//         <div className="location">
//           <i className="fa fa-map-marker">
//             <img src={location} alt="" srcset="" />
//           </i>
//           <p>Chiplun, MahaMaharashtra</p>
//         </div>
//         <div className="phone">
//           <i className="fa fa-phone">
//             <img src={message} alt="" srcset="" />
//           </i>
//           <p>+91 9874561239</p>
//         </div>
//         <div className="email">
//           <i className="fa fa-envelope">
//             <img src={mail} alt="" srcset="" />
//           </i>
//           <p>ys@gmail.com</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Yash Systems</h2>
          <p className="footer-description">
          Yash Systems is your one-stop shop for all printing needs. We offer a wide range of printers, supplies, and expert services to keep your business running smoothly.          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-subtitle">Useful Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li> {/* Home link */}
            <li><Link to="/about">About Us</Link></li> {/* About Us link */}
            <li><Link to="/service">Service</Link></li> {/* Service link */}
            <li><Link to="/support">Support</Link></li> {/* Support link */}
            <li><Link to="/auth">My Account</Link></li> {/* Auth link */}
            <li><Link to="/contact">Contact</Link></li> {/* Contact link */}
            <li><Link to="/terms">Terms</Link></li> {/* You can adjust this link as needed */}
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact</h3>
          <ul className="footer-contact">
            <li>
              <span className="icon">📍</span>
              Chiplun, Maharashtra {/* Updated location */}
            </li>
            <li>
              <span className="icon">📞</span>
              +91 9874561239 {/* Updated phone number */}
            </li>
            <li>
              <span className="icon">✉️</span>
              ys@gmail.com {/* Updated email */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
