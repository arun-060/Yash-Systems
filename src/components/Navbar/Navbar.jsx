import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './../../assets/logo.png';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Yash System" />
          <h1>Yash System</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About Us</Link></li> */}
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/products">Products</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li> */}
          <li>
            <button onClick={toggleDropdown} className="signin-button">Sign In</button>
            {isDropdownOpen && (
              <div className="dropdown">
                <Link to="/auth?type=user" onClick={closeDropdown}>User Login</Link>
                <Link to="/auth?type=admin" onClick={closeDropdown}>Admin Login</Link>
                <Link to="/auth?type=logout" onClick={closeDropdown}>Logout</Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



