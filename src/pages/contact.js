import React, { useState } from "react";
import fbIcon from "../images/facebook-square.svg";
import linkedinIcon from "../images/linkedin.svg";
import mediumIcon from "../images/medium.svg";
import emailIcon from "../images/envelope-solid.svg";
import "./contact.scss";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const mailtoLink = `mailto:nimesha.isholi94@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="contact-page">
            <div className="hero-section">
                <div className="container">
                    <div className="section-badge">Contact</div>
                    <h1 className="hero-title">
                        Let's Build Something
                        <span className="title-accent">Amazing Together</span>
                    </h1>
                    <p className="hero-description">
                        Ready to bring your ideas to life? I'm available for full-stack development projects, 
                        consulting, and collaboration opportunities.
                    </p>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3 className="info-title">Get In Touch</h3>
                            <p className="info-description">
                                Whether you need a complete web application, frontend interface, 
                                or backend API, I'm here to help turn your vision into reality.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">📧</div>
                                    <div className="method-content">
                                        <h4>Email</h4>
                                        <p>nimesha.isholi94@gmail.com</p>
                                        <span>Best for project inquiries</span>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">💼</div>
                                    <div className="method-content">
                                        <h4>LinkedIn</h4>
                                        <p>Professional networking</p>
                                        <span>Connect for opportunities</span>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">⚡</div>
                                    <div className="method-content">
                                        <h4>Response Time</h4>
                                        <p>Within 24 hours</p>
                                        <span>Quick project discussions</span>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h4 className="social-title">Connect With Me</h4>
                                <div className="social-grid">
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

                        <div className="contact-form-section">
                            <div className="form-card">
                                <h3 className="form-title">Start Your Project</h3>
                                <p className="form-description">
                                    Tell me about your project and let's discuss how we can work together.
                                </p>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Project Type</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select project type</option>
                                            <option value="Full Stack Web Application">Full Stack Web Application</option>
                                            <option value="Frontend Development">Frontend Development</option>
                                            <option value="Backend API Development">Backend API Development</option>
                                            <option value="Website Redesign">Website Redesign</option>
                                            <option value="Consulting">Technical Consulting</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Project Details</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="5"
                                            placeholder="Tell me about your project, timeline, and any specific requirements..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary submit-btn">
                                        Send Project Inquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="availability-section">
                        <div className="availability-card">
                            <div className="availability-content">
                                <div className="availability-status">
                                    <div className="status-indicator available"></div>
                                    <span className="status-text">Available for New Projects</span>
                                </div>
                                <h3 className="availability-title">Ready to Start Your Next Project?</h3>
                                <p className="availability-description">
                                    I'm currently accepting new full-stack development projects and consulting opportunities. 
                                    Let's discuss your requirements and create something exceptional together.
                                </p>
                                <div className="availability-actions">
                                    <a href="/portfolio" className="btn btn-secondary">View My Work</a>
                                    <a href="#contact-form" className="btn btn-primary">Hire Me Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;