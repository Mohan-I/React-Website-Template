import React from 'react';
import './PricingPlans.css'; // Include your CSS file for styling

function PricingPlans({ plans }) {
  return (
    <div className="pricing-plans">
      {plans.map((plan, index) => (
        <div className="plan" key={index}>
          <h2>{plan.name}</h2>
          <p className="price">{plan.price}</p>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <button>{plan.buttonText}</button>
        </div>
      ))}
    </div>
  );
}

export default PricingPlans;
