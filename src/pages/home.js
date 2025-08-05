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

    const scrollToNextSection = () => {
        const techStackSection = document.querySelector('.tech-stack-section');
        if (techStackSection) {
            techStackSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Fallback: scroll down by viewport height
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    };

    const scrollToPortfolio = () => {
        window.location.href = '/portfolio';
    };

    const scrollToContact = () => {
        window.location.href = '/contact';
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
                                <span className="title-accent">Full Stack Developer</span>
                            </h1>
                            <p className="hero-description">
                                I craft complete digital solutions from database to deployment. 
                                Specializing in React, Node.js, cloud architecture, and scalable web applications 
                                that deliver exceptional user experiences and robust backend performance.
                            </p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <span className="stat-number">3+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">20+</span>
                                    <span className="stat-label">Full Stack Projects</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Client Satisfaction</span>
                                </div>
                            </div>
                            
                            <div className="certifications-section">
                                <h3 className="certifications-title">Professional Certifications</h3>
                                <div className="certifications-grid">
                                    <div className="certification-badge">
                                        <div className="cert-icon">☁️</div>
                                        <div className="cert-content">
                                            <span className="cert-name">AWS Certified</span>
                                            <span className="cert-detail">Cloud Practitioner</span>
                                        </div>
                                    </div>
                                    <div className="certification-badge">
                                        <div className="cert-icon">⚛️</div>
                                        <div className="cert-content">
                                            <span className="cert-name">Meta Frontend</span>
                                            <span className="cert-detail">Developer Professional</span>
                                        </div>
                                    </div>
                                    <div className="certification-badge">
                                        <div className="cert-icon">🏆</div>
                                        <div className="cert-content">
                                            <span className="cert-name">JavaScript</span>
                                            <span className="cert-detail">Algorithms & Data Structures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-actions">
                                <button 
                                    className="btn btn-primary"
                                    onClick={scrollToPortfolio}
                                >
                                    View Full Stack Projects
                                </button>
                                <button 
                                    className="btn btn-secondary"
                                    onClick={scrollToContact}
                                >
                                    Hire Me Now
                                </button>
                            </div>
                        </div>
                        <div className={`hero-visual ${isVisible ? 'animate-slide-in-right' : ''}`}>
                            <div className="avatar-container">
                                <div className="avatar">
                                    <div className="avatar-image"></div>
                                    <div className="avatar-glow"></div>
                                    <div className="floating-elements">
                                        <div className="floating-element element-1" title="React & Frontend">⚛️</div>
                                        <div className="floating-element element-2" title="Node.js & Backend">🟢</div>
                                        <div className="floating-element element-3" title="Database Management">🗄️</div>
                                        <div className="floating-element element-4" title="Cloud & DevOps">☁️</div>
                                        <div className="floating-element element-5" title="API Development">🔗</div>
                                        <div className="floating-element element-6" title="Full Stack Solutions">🚀</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tech-stack-section">
                <div className="container">
                    <div className="tech-content">
                        <h3 className="tech-title">Full Stack Technology Arsenal</h3>
                        <div className="tech-categories">
                            <div className="tech-category">
                                <h4 className="category-name">Frontend</h4>
                                <div className="tech-items">
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">TypeScript</span>
                                    <span className="tech-item">Vue.js</span>
                                    <span className="tech-item">Tailwind CSS</span>
                                </div>
                            </div>
                            <div className="tech-category">
                                <h4 className="category-name">Backend</h4>
                                <div className="tech-items">
                                    <span className="tech-item">Node.js</span>
                                    <span className="tech-item">Express</span>
                                    <span className="tech-item">REST APIs</span>
                                    <span className="tech-item">GraphQL</span>
                                </div>
                            </div>
                            <div className="tech-category">
                                <h4 className="category-name">Database</h4>
                                <div className="tech-items">
                                    <span className="tech-item">PostgreSQL</span>
                                    <span className="tech-item">MongoDB</span>
                                    <span className="tech-item">Supabase</span>
                                    <span className="tech-item">Redis</span>
                                </div>
                            </div>
                            <div className="tech-category">
                                <h4 className="category-name">DevOps</h4>
                                <div className="tech-items">
                                    <span className="tech-item">AWS</span>
                                    <span className="tech-item">Docker</span>
                                    <span className="tech-item">CI/CD</span>
                                    <span className="tech-item">Git</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="social-section">
                <div className="container">
                    <div className="social-content">
                        <h3 className="social-title">Let's Build Something Amazing</h3>
                        <p className="social-description">
                            Ready to discuss your next full-stack project? Connect with me through your preferred platform.
                        </p>
                        <div className="social-links">
                            <a 
                                href="https://www.linkedin.com/in/nimesha-kahingala/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link linkedin"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" />
                                <span>Professional Network</span>
                            </a>
                            <a 
                                href="https://medium.com/@NimeshaKahingala" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link medium"
                            >
                                <img src={mediumIcon} alt="Medium" />
                                <span>Technical Articles</span>
                            </a>
                            <a 
                                href="https://www.facebook.com/Nimesha.Kahingala" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link facebook"
                            >
                                <img src={fbIcon} alt="Facebook" />
                                <span>Social Updates</span>
                            </a>
                            <a 
                                href="mailto:nimesha.isholi94@gmail.com"
                                className="social-link email"
                            >
                                <img src={emailIcon} alt="Email" />
                                <span>Direct Contact</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow" onClick={scrollToNextSection}>
                    <span>Scroll to explore</span>
                    <div className="arrow-down"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;