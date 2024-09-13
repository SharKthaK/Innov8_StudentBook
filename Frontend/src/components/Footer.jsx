import React from 'react';
import './Footer.css'; // Import your CSS file here
// Import Font Awesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEnvelope, faPhone, faMapMarkedAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Student Book <FontAwesomeIcon icon={faBookOpen} /></h3>
                        <p>Explore the variety of colleges, connect with your seniors, batch-mates, or juniors from your college having similar interests.</p>
                    </div>

                    <div className="box">
                        <h3>GET IN TOUCH</h3>
                        <p>Contact Us With:</p>
                        <div className="contact-info">
                            <a href="mailto:studentbook@gmail.com" className="links">
                                <FontAwesomeIcon icon={faEnvelope} /> studentbook@gmail.com
                            </a>
                            <a href="tel:+918362229" className="links">
                                <FontAwesomeIcon icon={faPhone} /> +918362229
                            </a>
                            <a href="tel:+996342829" className="links">
                                <FontAwesomeIcon icon={faPhone} /> +996342829
                            </a>
                            <span className="links">
                                <FontAwesomeIcon icon={faMapMarkedAlt} /> India, Kolkata, Budge Budge, 700137
                            </span>
                        </div>
                    </div>

                    <div className="box">
                        <h3>Feedback</h3>
                        <input type="text" placeholder="Feedback" className="email" />
                        <input type="submit" value="Send" className="btn" />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
