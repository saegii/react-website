import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; 

function Footer() {

    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/sacha-vogel-78aa10246/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/saegii" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </footer>
    );

};

export default Footer;
