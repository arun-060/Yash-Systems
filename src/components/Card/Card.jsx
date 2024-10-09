import React from 'react';
import './Card.css';

function Card({ text, image }) {
    return (
        <div className='card'>
            <img src={image} alt={text} className="card-image" />
            <h3 className='cardTitle'>{text}</h3> {/* Ensure the title is rendered correctly */}
            <input type="button" value="BUY" />
        </div>
    );
}

export default Card;
