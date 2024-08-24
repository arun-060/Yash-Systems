import React from 'react'
import './Footer.css'
import x from './../../assets/x.png'
import facebook from './../../assets/facebook.png'
import linkedin from './../../assets/linkedin.png'
import instagram from './../../assets/instagram.png'
import message from './../../assets/message.png'
import mail from './../../assets/mail.png'
import location from './../../assets/location.png'

function Footer() {
  return (
    <div className="container-footer">
      <div className="left-section">
        <h2>Useful Links</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <h2>Follow us on</h2>
        <div className="social-icons">
          <a href="#">
            <i className="fa fa-instagram">
              <img src={instagram} alt="" srcset="" />
            </i>
          </a>
          <a href="#">
            <i className="fa fa-facebook">
              <img src={facebook} alt="" srcset="" />
            </i>
          </a>
          <a href="#">
            <i className="fa fa-twitter">
              <img src={x} alt="" srcset="" />
            </i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin">
              <img src={linkedin} alt="" srcset="" />
            </i>
          </a>
        </div>
        <p className="copyright">Copyright © 2024</p>
      </div>
      <div className="right-section">
        <div className="location">
          <i className="fa fa-map-marker">
            <img src={location} alt="" srcset="" />
          </i>
          <p>Chiplun, MahaMaharashtra</p>
        </div>
        <div className="phone">
          <i className="fa fa-phone">
            <img src={message} alt="" srcset="" />
          </i>
          <p>+91 9874561239</p>
        </div>
        <div className="email">
          <i className="fa fa-envelope">
            <img src={mail} alt="" srcset="" />
          </i>
          <p>ys@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer