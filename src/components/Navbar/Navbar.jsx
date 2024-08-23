import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="your-logo.png" alt="Yash System" />
          <h1>Yash System</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar