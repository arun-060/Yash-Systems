import React from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo">YS</div>
        <h1>Yash System</h1>
        <div className="admin-section">
          <span>Admin</span>
          <button className="login-button">Login/Sign Up</button>
        </div>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <h2>Notifications</h2>
          <ul className="notification-list">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="notification-item">
                <span className="user-icon"></span>
                <span className="email">shindesahil0104@gmail.com</span>
                <span className="status-dot"></span>
              </li>
            ))}
          </ul>
        </aside>
        <main className="content">
          <div className='button'>
          <button className="add-product-button">
            <span className="plus-icon">+</span>
            <span>Add Products</span>
          </button>
          </div>
          <section className="recently-added">
            <h2>Recently Added</h2>
            <div className="product-grid">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="product-card">
                  <img src="/placeholder.svg" alt="Computer" className="product-image" />
                  <div className="product-info">
                    <h3>Computer Sales & Service</h3>
                    <button className="read-more-button">READ MORE</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}