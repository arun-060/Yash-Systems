import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <header className="header">
        <div className="logo-container">
          <img src="/placeholder.svg?height=40&width=40" alt="Yash Systems Logo" className="logo" />
          <h1 className="company-name">Yash Systems</h1>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <img src="/placeholder.svg?height=20&width=20" alt="Search" />
          </button>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#support">SUPPORT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="product-image-container">
          <img src="/placeholder.svg?height=400&width=600" alt="HP Laptop 15s" className="product-image" />
        </div>
        <div className="product-details">
          <h2 className="product-title">HP Laptop 15s, AMD Ryzen 5 5500U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD</h2>
          <div className="product-rating">
            <span className="stars">★★★★☆</span>
            <span className="reviews">2K+ bought in past month</span>
          </div>
          <div className="product-price">
            <span className="discount">-32%</span>
            <span className="price">₹39,990</span>
          </div>
          <div className="product-features">
            <div className="feature">
              <img src="/placeholder.svg?height=30&width=30" alt="Warranty" />
              <span>1 year warranty</span>
            </div>
            <div className="feature">
              <img src="/placeholder.svg?height=30&width=30" alt="Top Brands" />
              <span>Top Brands</span>
            </div>
            <div className="feature">
              <img src="/placeholder.svg?height=30&width=30" alt="Service Available" />
              <span>Service available</span>
            </div>
          </div>
          <button className="book-now-button">Book Now</button>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;