import React from 'react';
import './Feedback.css'; // Make sure the CSS file is correctly linked

// Sample data for feedback
const feedbackData = [
  {
    id: 1,
    name: 'Michael H.',
    details: '2 reviews • 1 month ago',
    content: 'I ordered a product from their website, and it took over a month for it to arrive. When I contacted customer service for assistance tracking my order, they were very rude and not helpful. Once I finally received my order, some items were missing, and I received the wrong sizes. Won\'t be ordering from here again.'
  },
  {
    id: 2,
    name: 'Michael H.',
    details: '2 reviews • 1 month ago',
    content: 'I ordered a product from their website, and it took over a month for it to arrive. When I contacted customer service for assistance tracking my order, they were very rude and not helpful. Once I finally received my order, some items were missing, and I received the wrong sizes. Won\'t be ordering from here again.'
  },
  {
    id: 3,
    name: 'Michael H.',
    details: '2 reviews • 1 month ago',
    content: 'I ordered a product from their website, and it took over a month for it to arrive. When I contacted customer service for assistance tracking my order, they were very rude and not helpful. Once I finally received my order, some items were missing, and I received the wrong sizes. Won\'t be ordering from here again.'
  }
];

const Feedback = () => {
  return (
    <div className="feedback-container">
      <header>
        <h1>Client Feedback</h1>
        <h2>Trusted By Global Companies</h2>
        <p>It is our goal to provide innovative repair services for Laptops, Desktops and Printers providing excellent customer</p>
      </header>
      <div className="reviews">
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className="review-card">
            <div className="review-header">
              <div className="user-icon">👤</div>
              <div className="user-info">
                <h3>{feedback.name}</h3>
                <p className="review-details">{feedback.details}</p>
              </div>
            </div>
            <div className="review-content">
              <p>{feedback.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
