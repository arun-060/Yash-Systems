import React from 'react';
import './Admin1.css';

const Admin = () => {
  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo-container">
          <div className="logo">YS</div>
          <h1>Yash System</h1>
        </div>
        <div className="admin-section">
          <span>Admin</span>
          <button className="login-button">login/Sign Up</button>
        </div>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <h2 className="notifications-title">
            <span className="notification-icon">🔔</span>
            Notifications
          </h2>
          <ul className="notification-list">
            {[...Array(9)].map((_, index) => (
              <li key={index} className="notification-item">
                <span className="user-icon">👤</span>
                <span className="email">shindesahil0104@gmail.com</span>
                <span className="status-dot"></span>
              </li>
            ))}
          </ul>
        </aside>
        <main className="content">
          <div className="message-header">
            <span className="user-icon large">👤</span>
            <span className="email">shindesahil0104@gmail.com</span>
          </div>
          <div className="message-content">
            <p className="user-message">hey there i got an issue of my laptop please help me ....</p>
            <p className="lorem-ipsum">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="action-buttons">
            <button className="reject-button">Reject</button>
            <button className="accept-button">Accept</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Admin;