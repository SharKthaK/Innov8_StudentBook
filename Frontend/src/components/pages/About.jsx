// src/About.jsx

import { useState } from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container">
      <h1 className="about-heading">
        About Us
      </h1>
      <p className="about-paragraph">
        Welcome to Studentbook, a unique platform designed to connect students and empower colleges with advanced organizational tools. At Studentbook, our mission is to bridge the gap between students and institutions, offering a dynamic space where networking, collaboration, and efficient data management meet.
      </p>
      <button
        className="about-button"
        onClick={handleShowMore}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      {showMore && (
        <div className="about-card">
          <h2 className="about-card-heading">
            Who We Are:
          </h2>
          <p className="about-card-text">
            We are a team of passionate individuals who believe in the power of education, collaboration, and innovation. Studentbook was born out of the need for a platform that serves both the academic and administrative sides of the educational ecosystem.
          </p>
          <h2 className="about-card-heading">
            What We Do:
          </h2>
          <ul className="about-list">
            <li>For students, we provide a space where they can connect with peers from other colleges, fostering a culture of collaboration, knowledge exchange, and growth. Whether you're looking for like-minded individuals to collaborate on a project, expand your professional network, or simply make new friends, Studentbook opens the doors to endless opportunities.</li>
            <li>For colleges, we offer powerful data management tools that allow institutions to efficiently organize, store, and safeguard student information. With a focus on security and privacy, we ensure that student data is handled with the utmost care, giving colleges full control over who can access their sensitive information.</li>
          </ul>
          <h2 className="about-card-heading">
            Our Vision:
          </h2>
          <p className="about-card-text">
            Our vision is to create an inclusive and collaborative environment where educational institutions and students can thrive together, supported by advanced technology and innovative solutions.
          </p>
        </div>
      )}
      
    </div>
  );
};

export default About;