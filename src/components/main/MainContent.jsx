import React, { useState, useEffect, useRef } from 'react';
import './MainContent.css';
import sm from '../assets/images/sm.webp';
import ppc from '../assets/images/ppc.webp';
import branding from '../assets/images/branding.webp';

function MainContent() {
    // State for scroll position (Parallax)
    const [offsetY, setOffsetY] = useState(0);

    // Refs for the elements we want to observe (Fade-In Animation)
    const infoRef1 = useRef(null);
    const infoRef2 = useRef(null);

    // 1. Scroll Handler for Parallax Effect
    const handleScroll = () => setOffsetY(window.scrollY);

    // 2. useEffect for Scroll Listener (Parallax)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3. useEffect for Intersection Observer (Fade-In Animation)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        // Start observing the two content sections
        if (infoRef1.current) observer.observe(infoRef1.current);
        if (infoRef2.current) observer.observe(infoRef2.current);

        // Cleanup function
        return () => {
            if (infoRef1.current) observer.unobserve(infoRef1.current);
            if (infoRef2.current) observer.unobserve(infoRef2.current);
        };
    }, []); // Run once on mount

    // 4. Calculate Parallax Effect (Reusing original logic)
    const parallaxSpeed1 = offsetY * 0.2; // Slower
    const parallaxSpeed2 = offsetY * 0.1; // Very Slowest
    const parallaxSpeed3 = offsetY * 0.3; // Fastest

    return (
        <div className="main-content">
            {/* --- Section 1: Initial Content with Fade-In Animation --- */}
            <div className="template-info fade-in-section" ref={infoRef1}>
                <h2 className="writer2 font-anton">The Parallax Effect in Action</h2>
                <p>
                    Experience a subtle yet captivating depth effect as you scroll down.
                    The images below move at different speeds relative to the page,
                    creating a three-dimensional illusion. This technique significantly
                    enhances the visual appeal and engagement of your web application.
                </p>
                <p>
                    Our use of React Hooks like $useState$, $useEffect$, and $useRef$
                    allows for efficient and performant handling of scroll events and
                    viewport visibility, ensuring a smooth user experience even on
                    lower-end devices.
                </p>
            </div>

            {/* --- Parallax Images --- */}
            <div className="template-images">
                <img
                    src={branding}
                    alt="Template Image 1 (Branding)"
                    style={{ transform: `translateY(${parallaxSpeed1}px)` }}
                    className="parallax-img"
                />
                <img
                    src={ppc}
                    alt="Template Image 2 (PPC)"
                    style={{ transform: `translateY(${parallaxSpeed2}px)` }}
                    className="parallax-img"
                />
                <img
                    src={sm}
                    alt="Template Image 3 (Social Media)"
                    style={{ transform: `translateY(${parallaxSpeed3}px)` }}
                    className="parallax-img"
                />
            </div>

            {/* --- Section 2: More Content with Fade-In Animation --- */}
            <div className="more-info fade-in-section" ref={infoRef2}>
                <h3 className='font-anton'>Enhancing User Engagement</h3>
                <p>
                    Beyond the visual spectacle, the parallax scrolling technique keeps users
                    interested and encourages them to explore more of your page content.
                    It provides a modern, high-quality feel, often associated with premium
                    websites and design studios.
                </p>
                <p>
                    This second block of text ensures that there is enough vertical space
                    to scroll and fully appreciate the speed differences of the three
                    images in the middle section.
                </p>
                <div className="button-container">
                    <button>Discover More</button>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default MainContent;