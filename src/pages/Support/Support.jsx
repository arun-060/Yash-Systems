import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Search } from 'lucide-react';
import './Support.css'; // Ensure your CSS file path is correct
import logo from './../../assets/logo.png';
function Support() {
  const [expandedQuestion, setExpandedQuestion] = useState('how-does-it-work');

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="support-page">
      <header>
        <nav>
        <div className="logo">
          <img src={logo} alt="Yash Systems Logo" />
        </div>

          <ul>
            <li>
              <span>Products</span>
              <ChevronDown className="icon" />
            </li>
            <li>
              <span>Pricing</span>
              <ChevronDown className="icon" />
            </li>
            <li>
              <span>Resources</span>
              <ChevronDown className="icon" />
            </li>
          </ul>
          <button className="sign-up-btn">Sign up - it's Free</button>
        </nav>
        
      </header>
      <main>
        <section className="faq-section">
          <h2>Frequently asked questions</h2>
          <div className="support-options">
            <div className="support-card">
              <User className="icon" />
              <h3>Contact support</h3>
              <p>24/7 available</p>
            </div>
            <div className="support-card">
              <Search className="icon" />
              <h3>Visit help center</h3>
              <p>Check out tutorials</p>
            </div>
          </div>
        </section>
        <section className="questions-section">
          <div className="question">
            <button onClick={() => toggleQuestion('how-does-it-work')}>
              <h3>How does it work ?</h3>
              {expandedQuestion === 'how-does-it-work' ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
            </button>
            {expandedQuestion === 'how-does-it-work' && (
              <p>Once you register, you will be able to access all the services provided including sales and services.</p>
            )}
          </div>
          <div className="question">
            <button onClick={() => toggleQuestion('discounts')}>
              <h3>Do you have any discounts ?</h3>
              {expandedQuestion === 'discounts' ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
            </button>
            {expandedQuestion === 'discounts' && (
              <p>We offer various discounts for bulk purchases and long-term contracts. Please contact our sales team for more information.</p>
            )}
          </div>
          <div className="question">
            <button onClick={() => toggleQuestion('returns')}>
              <h3>How to apply for return ?</h3>
              {expandedQuestion === 'returns' ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
            </button>
            {expandedQuestion === 'returns' && (
              <p>To apply for a return, please log into your account, go to your order history, and select the "Return" option for the relevant item. Follow the prompts to complete the return process.</p>
            )}
          </div>
          <div className="question">
            <button onClick={() => toggleQuestion('claim-services')}>
              <h3>How to claim for services ?</h3>
              {expandedQuestion === 'claim-services' ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
            </button>
            {expandedQuestion === 'claim-services' && (
              <p>To claim for services, please contact our support team with your order number and a description of the service you need. Our team will guide you through the process and schedule the service as needed.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Support;
