import React, { useEffect, useState } from "react";
import fbIcon from "../images/facebook-square.svg";
import linkedinIcon from "../images/linkedin.svg";
import mediumIcon from "../images/medium.svg";
import emailIcon from "../images/envelope-solid.svg";
import './home.scss';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className={`hero-text ${isVisible ? 'animate-fade-in-up' : ''}`}>
                            <div className="greeting">
                                <span className="wave">👋</span>
                                <span>Hello, I'm</span>
                            </div>
                            <h1 className="hero-title">
                                <span className="name">Nimesha Kahingala</span>
                                <span className="title-accent">Frontend Developer</span>
                            </h1>
                            <p className="hero-description">
                                I craft compelling, user-first digital experiences with modern web technologies. 
                                Specializing in React, JavaScript, and responsive design to bring your ideas to life.
                            </p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <span className="stat-number">3+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Client Satisfaction</span>
                                </div>
                            </div>
                            <div className="hero-actions">
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => scrollToSection('portfolio')}
                                >
                                    View My Work
                                </button>
                                <button 
                                    className="btn btn-secondary"
                                    onClick={() => scrollToSection('contact')}
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                        <div className={`hero-visual ${isVisible ? 'animate-slide-in-right' : ''}`}>
                            <div className="avatar-container">
                                <div className="avatar">
                                    <div className="avatar-image"></div>
                                    <div className="avatar-ring"></div>
                                    <div className="floating-elements">
                                        <div className="floating-element element-1">⚛️</div>
                                        <div className="floating-element element-2">💻</div>
                                        <div className="floating-element element-3">🎨</div>
                                        <div className="floating-element element-4">🚀</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="social-section">
                <div className="container">
                    <div className="social-content">
                        <h3 className="social-title">Let's Connect</h3>
                        <div className="social-links">
                            <a 
                                href="https://www.linkedin.com/in/nimesha-kahingala/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link linkedin"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" />
                                <span>LinkedIn</span>
                            </a>
                            <a 
                                href="https://medium.com/@NimeshaKahingala" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link medium"
                            >
                                <img src={mediumIcon} alt="Medium" />
                                <span>Medium</span>
                            </a>
                            <a 
                                href="https://www.facebook.com/Nimesha.Kahingala" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link facebook"
                            >
                                <img src={fbIcon} alt="Facebook" />
                                <span>Facebook</span>
                            </a>
                            <a 
                                href="mailto:nimesha.isholi94@gmail.com"
                                className="social-link email"
                            >
                                <img src={emailIcon} alt="Email" />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
                    <span>Scroll to explore</span>
                    <div className="arrow-down"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;