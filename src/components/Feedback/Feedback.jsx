import React from 'react';
import './Feedback.css'; // Make sure to create this CSS file or add styles in your existing CSS

const Feedback = () => {
  const reviews = [
    {
      id: 1,
      text: "Great service! Highly recommend.",
      author: "John Doe"
    },
    {
      id: 2,
      text: "Very satisfied with my experience.",
      author: "Jane Smith"
    },
    {
      id: 3,
      text: "Excellent customer support.",
      author: "Michael Johnson"
    },
    {
      id: 4,
      text: "Will definitely use this service again!",
      author: "Emily Davis"
    },
    {
      id: 5,
      text: "Fast and reliable service.",
      author: "Chris Lee"
    },
    // Add more reviews as needed
  ];

  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <div className="review-cards">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <p>"{review.text}"</p>
            <h4>- {review.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
