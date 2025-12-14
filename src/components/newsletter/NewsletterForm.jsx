import React, { useState } from "react";
import "./NewsletterForm.css"; // Include your CSS file for styling

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [interests, setInterests] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null
    const [emailError, setEmailError] = useState("");

    // Simple email validation
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmissionStatus(null);
        setEmailError("");

        // Basic validation check
        if (!validateEmail(email)) {
            setEmailError(">> Invalid Data Format: Email address required.");
            setSubmissionStatus('error');
            return;
        }

        // Simulate API call delay
        setTimeout(() => {
            console.log("Subscription Data [Transmission Log]:", { email, name, interests });
            
            // Set success status
            setSubmissionStatus('success');
            
            // Reset form fields
            setEmail("");
            setName("");
            setInterests("");
            
        }, 1500); // Increased delay for "transmission" effect
    };

    return (
        // Changed container to a full-width section
        <section className="sci-fi-section"> 
            <div className="data-portal-frame">
                <div className="portal-inner-content animate-fade-in">
                    <h2 className="form-title sci-fi-glow-text">ACCESS GRANTED: Data Stream Subscription</h2>
                    <p className="form-subtitle text-terminal-gray">Input required parameters to join the secure broadcast network. Protocol: $v5.2.1$</p>

                    {/* Submission Feedback */}
                    {submissionStatus === 'success' && (
                        <div className="alert-message success animate-slide-down">
                            ✅ SUBSCRIPTION SUCCESSFUL. Welcome to the Network.
                        </div>
                    )}
                    {submissionStatus === 'error' && (
                        <div className="alert-message error animate-slide-down">
                            🛑 ERROR: Data integrity check failed. {emailError}
                        </div>
                    )}

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="form-content">
                        
                        {/* Email Input (Primary) */}
                        <div className="input-group">
                            <label htmlFor="email" className="input-label">Terminal ID (Email):</label>
                            <div className="input-field-wrapper">
                                <span className="input-icon icon-email"></span>
                                <input
                                    id="email"
                                    className={`form-input input-terminal ${emailError ? 'input-error' : ''}`}
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError(""); // Clear error on change
                                    }}
                                    placeholder="user@network.com"
                                    required
                                />
                            </div>
                            {emailError && <p className="error-text">{emailError}</p>}
                        </div>

                        {/* Name Input (Secondary) */}
                        <div className="input-group">
                            <label htmlFor="name" className="input-label">User Alias (Name):</label>
                            <div className="input-field-wrapper">
                                <span className="input-icon icon-name"></span>
                                <input
                                    id="name"
                                    className="form-input input-terminal"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Agent_X_07 (Optional)"
                                />
                            </div>
                        </div>
                        
                        {/* Interests Textarea (Tertiary) */}
                        <div className="input-group">
                            <label htmlFor="interests" className="input-label">Data Focus Tags (Interests):</label>
                            <div className="input-field-wrapper">
                                <span className="input-icon icon-interests"></span>
                                <textarea
                                    id="interests"
                                    className="form-textarea input-terminal"
                                    value={interests}
                                    onChange={(e) => setInterests(e.target.value)}
                                    placeholder="Synthetics, Quantum-JS, Neuro-UI..."
                                    rows="3"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="submit-button cta-transmit animate-pop-in">
                            Transmit Subscription Key $\gg$
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default NewsletterForm;