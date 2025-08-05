import React from "react";
import cv from "../images/cv2.pdf";
import "./about.scss";
import ProgressBar from "../components/progressBar";
import arrowIcon from "../images/arrow_right.svg";

function About() {
    return (
        <div className="about-page">
            <div className="hero-section">
                <div className="container">
                    <div className="section-badge">About Me</div>
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Building Digital Solutions
                                <span className="title-accent">End-to-End</span>
                            </h1>
                            <div className="profile-card">
                                <div className="profile-image"></div>
                                <div className="profile-info">
                                    <h2 className="name">Nimesha Kahingala</h2>
                                    <span className="job-title">Full Stack Developer</span>
                                    <p className="bio">
                                        Welcome! I'm Nimesha, a dynamic Full Stack Developer with expertise in crafting 
                                        complete web solutions from frontend interfaces to backend architectures. With a 
                                        Meta Front-End Developer Professional Certificate and over three years of hands-on 
                                        experience, I excel at building scalable applications using modern technologies 
                                        like React, Node.js, and cloud platforms.
                                    </p>
                                    <p className="bio">
                                        My journey spans across continents, from the vibrant tech hubs of the United States 
                                        and Singapore to my roots in Sri Lanka, giving me a unique global perspective on 
                                        solving complex technical challenges. Let's transform your ideas into powerful 
                                        digital solutions!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <div className="info-content">
                                <span className="info-label">Email</span>
                                <span className="info-value">nimesha.isholi94@gmail.com</span>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">🎓</div>
                            <div className="info-content">
                                <span className="info-label">Education</span>
                                <span className="info-value">University of Colombo School of Computing</span>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📜</div>
                            <div className="info-content">
                                <span className="info-label">Degree</span>
                                <span className="info-value">Bachelor of Science: Information Systems</span>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">💼</div>
                            <div className="info-content">
                                <span className="info-label">Availability</span>
                                <span className="info-value">Open to Opportunities</span>
                            </div>
                        </div>
                    </div>
                    <div className="cta-section">
                        <a href={cv} download className="btn btn-primary">
                            Download Resume
                        </a>
                        <a href="/contact" className="btn btn-secondary">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <div className="container">
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3 className="category-title">Frontend Technologies</h3>
                            <div className="progress-list">
                                <ProgressBar skill="React & Redux" number="90" />
                                <ProgressBar skill="JavaScript (ES6+)" number="85" />
                                <ProgressBar skill="TypeScript" number="80" />
                                <ProgressBar skill="HTML5 & CSS3" number="95" />
                                <ProgressBar skill="Tailwind CSS" number="90" />
                                <ProgressBar skill="Vue.js & Nuxt" number="80" />
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3 className="category-title">Backend Technologies</h3>
                            <div className="progress-list">
                                <ProgressBar skill="Node.js & Express" number="85" />
                                <ProgressBar skill="REST APIs" number="90" />
                                <ProgressBar skill="PostgreSQL" number="80" />
                                <ProgressBar skill="MongoDB" number="75" />
                                <ProgressBar skill="Supabase" number="85" />
                                <ProgressBar skill="Authentication & JWT" number="80" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="knowledge-section">
                <div className="container">
                    <h3 className="section-title">Technical Expertise</h3>
                    <div className="knowledge-grid">
                        <div className="knowledge-category">
                            <h4 className="knowledge-title">Frontend</h4>
                            <ul className="knowledge-list">
                                <li><img src={arrowIcon} alt="" />React, Redux, Context API</li>
                                <li><img src={arrowIcon} alt="" />Vue.js, Nuxt.js</li>
                                <li><img src={arrowIcon} alt="" />JavaScript (ES6+), TypeScript</li>
                                <li><img src={arrowIcon} alt="" />HTML5, CSS3, SASS, LESS</li>
                                <li><img src={arrowIcon} alt="" />Tailwind CSS, Bootstrap, Material-UI</li>
                                <li><img src={arrowIcon} alt="" />Responsive Design, Mobile-first</li>
                            </ul>
                        </div>
                        <div className="knowledge-category">
                            <h4 className="knowledge-title">Backend</h4>
                            <ul className="knowledge-list">
                                <li><img src={arrowIcon} alt="" />Node.js, Express.js</li>
                                <li><img src={arrowIcon} alt="" />RESTful APIs, GraphQL</li>
                                <li><img src={arrowIcon} alt="" />PostgreSQL, MongoDB</li>
                                <li><img src={arrowIcon} alt="" />Supabase, Firebase</li>
                                <li><img src={arrowIcon} alt="" />JWT Authentication, OAuth</li>
                                <li><img src={arrowIcon} alt="" />Server-side Rendering (SSR)</li>
                            </ul>
                        </div>
                        <div className="knowledge-category">
                            <h4 className="knowledge-title">Tools & DevOps</h4>
                            <ul className="knowledge-list">
                                <li><img src={arrowIcon} alt="" />Git, GitHub, Version Control</li>
                                <li><img src={arrowIcon} alt="" />Webpack, Vite, Build Tools</li>
                                <li><img src={arrowIcon} alt="" />Docker, Containerization</li>
                                <li><img src={arrowIcon} alt="" />AWS, Cloud Deployment</li>
                                <li><img src={arrowIcon} alt="" />CI/CD Pipelines</li>
                                <li><img src={arrowIcon} alt="" />Performance Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience-section">
                <div className="container">
                    <div className="timeline-grid">
                        <div className="timeline-column">
                            <h3 className="timeline-title">Professional Experience</h3>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-date">2024 - Present</div>
                                    <div className="timeline-content">
                                        <h4>Software Engineer (Volunteer)</h4>
                                        <span className="company">Helpful Engineering</span>
                                        <p>Developing full-stack solutions for disaster relief platforms using Vue.js, Nuxt.js, TypeScript, and D3.js for data visualization.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-date">2020 - 2023</div>
                                    <div className="timeline-content">
                                        <h4>Software Engineer - UI</h4>
                                        <span className="company">1Billion Technology</span>
                                        <p>Led frontend development for multiple client projects, mentored junior developers, and contributed to full-stack solutions.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-date">2019 - 2020</div>
                                    <div className="timeline-content">
                                        <h4>UI/UX Engineer - Intern</h4>
                                        <span className="company">eBEYONDS pvt ltd</span>
                                        <p>Developed responsive web interfaces and collaborated with design teams to create user-centered solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-column">
                            <h3 className="timeline-title">Education & Certifications</h3>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-date">2024 - 2027</div>
                                    <div className="timeline-content">
                                        <h4>AWS Certified Cloud Practitioner</h4>
                                        <span className="company">Amazon Web Services</span>
                                        <p>Cloud computing fundamentals, AWS services, and best practices for cloud architecture.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-date">2023 - 2024</div>
                                    <div className="timeline-content">
                                        <h4>Meta Front-End Developer</h4>
                                        <span className="company">Meta</span>
                                        <p>Advanced React development, responsive design, and modern frontend best practices.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-date">2016 - 2020</div>
                                    <div className="timeline-content">
                                        <h4>Bachelor of Science</h4>
                                        <span className="company">University of Colombo School of Computing</span>
                                        <p>Information Systems with focus on software development and database management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;