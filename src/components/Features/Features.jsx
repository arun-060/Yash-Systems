import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Card from '../Card/Card';
import './Features.css';

import a1 from './../../assets/a1.png';
import a2 from './../../assets/a2.png';
import a3 from './../../assets/a3.png';
import a4 from './../../assets/a4.png';

const imgdata = [
    {
        "title": "All in One Computer",
        "location": a1
    },
    {
        "title": "All in One Mac",
        "location": a2
    },
    {
        "title": "All in One Accessories",
        "location": a3
    },
    {
        "title": "All in one printer",
        "location": a4
    }
];

function Features() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleViewAllClick = () => {
        navigate('/products'); // Navigate to the products page
    };

    return (
        <div className="features">
            <div className="header">
                <h1 className="features-title">PRODUCTS WE OFFERED</h1>
                <button className="view-all-button" onClick={handleViewAllClick}>
                    View All Products
                </button>
            </div>
            <div className="mape">
                {imgdata.map((data, index) => (
                    <Card 
                        key={index} 
                        text={data.title}
                        image={data.location}
                    />
                ))}
            </div> 
        </div>
    );
}

export default Features;
