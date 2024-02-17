import React from 'react';
import { useSpring, animated } from 'react-spring';
import SocialMediaIcons from './SocialMediaIcons';


function ExperienceParagraph() {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <>
    <animated.p style={animationProps}>
      <h1 className="writer2">LEARN MORE ABOUT ME</h1>
      <p>I have 5 years of experience in web development, specializing in frontend technologies such as React.js, HTML, CSS, and JavaScript. I hold a Bachelor's degree in Computer Science from XYZ University, where I gained a strong foundation in software engineering principles and problem-solving skills.</p>
    </animated.p>
    <center>
    <SocialMediaIcons />
    </center>
    </>
  );
}

export default ExperienceParagraph;
