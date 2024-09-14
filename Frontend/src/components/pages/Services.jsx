// src/ServicePage.jsx

import React from "react";
import "./Services.css"; // Import the CSS file

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Services</h1>
          <p>Providing top-notch solutions to help your business grow.</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="grid md-grid-cols-2 lg-grid-cols-3">
            {/* Service Card 1 */}
            <div className="service-card">
              <h2>For Students</h2>
              <p>
                Studentbook is your gateway to a broader academic community.
                Connect with peers from different colleges, build professional
                networks, and collaborate on projects. Whether you’re looking
                for study partners, project collaborators, or expanding your
                social network, Studentbook helps you discover and engage with
                students across various institutions.
              </p>
              <a href="#">Learn More</a>
            </div>

            {/* Service Card 2 */}
            <div className="service-card">
              <h2>For Colleges</h2>
              <p>
                Managing student data has never been easier. Studentbook
                empowers educational institutions with advanced organizational
                tools for secure and efficient management of student details.
                Say goodbye to cumbersome spreadsheets and manual processes —
                streamline data management while maintaining control over
                sensitive information.
              </p>
              <a href="#">Learn More</a>
            </div>

            {/* Service Card 3 */}
            <div className="service-card">
              <h2>Why Choose Studentbook</h2>
              <p>
                Dual Functionality: A platform that bridges the gap between
                student networking and college administration. Clean Interface:
                A seamless experience for both students and administrators.
                Secure & Reliable: Your data is safe with us, with a focus on
                privacy and security.
              </p>
              <a href="#">Learn More</a>
            </div>

            {/* Service Card 4 */}
            <div className="service-card">
              <h2>Design</h2>
              <p>
                We provide creative design solutions to make your brand stand
                out with visually appealing graphics and user interfaces.
              </p>
              <a href="#">Learn More</a>
            </div>

            {/* Service Card 5 */}
            <div className="service-card">
              <h2>Support</h2>
              <p>
                Our support services ensure that you receive prompt assistance
                and solutions for any issues that arise with our products.
              </p>
              <a href="#">Learn More</a>
            </div>

            {/* Service Card 6 */}
            <div className="service-card">
              <h2>Training</h2>
              <p>
                We offer training programs to help your team acquire new skills
                and stay up-to-date with the latest industry trends.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      
    </div>
  );
};

export default Services;
