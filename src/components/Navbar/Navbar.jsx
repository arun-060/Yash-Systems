import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './../../assets/logo.png'

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Yash System" />
          <h1>Yash System</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar