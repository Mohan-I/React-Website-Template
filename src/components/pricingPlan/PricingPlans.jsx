import React from 'react';
import './PricingPlans.css';

// Data structure remains the same
const pricingData = [
    {
        name: "Basic",
        price: "$19/mo",
        description: "Ideal for small teams or personal projects.",
        features: [
            "Up to 5 Projects",
            "1 GB Cloud Storage",
            "Basic Analytics Reports",
            "Community Support",
            "Custom Domain Support",
        ],
        buttonText: "Start Free Trial",
        isPopular: false,
    },
    {
        name: "Most Popular", // Renamed for UI consistency
        price: "$49/mo",
        description: "Best for growing businesses needing scale.",
        features: [
            "Unlimited Projects",
            "100 GB Cloud Storage",
            "Advanced Analytics & API",
            "24/7 Priority Support",
            "Custom Domain Support",
        ],
        buttonText: "Choose Plan",
        isPopular: true, 
    },
    {
        name: "Enterprise",
        price: "$199/mo",
        description: "For large organizations or complex needs.",
        features: [
            "Everything in Pro",
            "Unlimited Storage & Users",
            "Dedicated Account Manager",
            "SLA Uptime Guarantee",
            "On-Premise Deployment",
        ],
        buttonText: "Contact Sales",
        isPopular: false,
    },
];

// Helper function to render the central futuristic icon (simulated)
const FeatureIcon = ({ name }) => {
    let iconClass = '';
    // Assign specific colors/shapes based on the plan name
    if (name === 'Basic') iconClass = 'icon-basic';
    else if (name === 'Most Popular') iconClass = 'icon-popular';
    else if (name === 'Enterprise') iconClass = 'icon-enterprise';

    return (
        <div className={`plan-icon-container ${iconClass}`}>
            {/* This div simulates the glowing, complex geometric/circuit icon */}
            <div className="simulated-icon"></div>
        </div>
    );
}

function PricingPlans() {
    return (
        <div className="pricing-plans">
            {/* Component Title and Animation Trigger */}
            <h1 className="pricing-title animate-fade-down">
                Find the Perfect Plan for Your Team
            </h1>
            
            <div className="plans-container">
                {pricingData.map((plan, index) => (
                    <div
                        className={`plan animate-slide-up delay-${index * 100} ${plan.isPopular ? 'plan-popular' : ''}`}
                        key={index}
                    >
                        {/* Featured Tag for the popular plan */}
                        {plan.isPopular && <div className="tag-popular">Most Popular</div>}

                        {/* Sci-Fi Icon Placeholder */}
                        <FeatureIcon name={plan.name} />

                        {/* Title and Description */}
                        <h2 className={plan.isPopular ? 'text-neon-popular' : 'text-neon-standard'}>{plan.name}</h2>
                        <p className="description">{plan.description}</p>
                        
                        {/* Price */}
                        <p className="price">{plan.price}</p>
                        
                        {/* Features List */}
                        <ul className="features-list">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>
                                    {/* Icon for visual checkmark - using the same SVG */}
                                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        {/* Button */}
                        <button className={plan.isPopular ? 'button-popular' : 'button-standard'}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PricingPlans;