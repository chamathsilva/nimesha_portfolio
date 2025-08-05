import React, { useState } from "react";
import { Modal } from 'antd';
import PortfolioModal from "../components/portfolioModal";
import "./portfolio.scss";
import { PROJECTS } from "../components/data";

function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const [filter, setFilter] = useState('all');

    const showModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const filteredProjects = PROJECTS.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'fullstack') return project.isFullStack;
        if (filter === 'frontend') return !project.isFullStack;
        return true;
    });

    return (
        <div className="portfolio-page">
            <div className="hero-section">
                <div className="container">
                    <div className="section-badge">Portfolio</div>
                    <h1 className="hero-title">
                        Featured Projects
                        <span className="title-accent">& Solutions</span>
                    </h1>
                    <p className="hero-description">
                        Explore my collection of full-stack applications, frontend interfaces, and 
                        technical solutions that demonstrate expertise across the entire development stack.
                    </p>
                </div>
            </div>

            <div className="portfolio-content">
                <div className="container">
                    <div className="filter-section">
                        <div className="filter-buttons">
                            <button 
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All Projects
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
                                onClick={() => setFilter('fullstack')}
                            >
                                Full Stack
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
                                onClick={() => setFilter('frontend')}
                            >
                                Frontend
                            </button>
                        </div>
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <div 
                                key={index}
                                className={`project-card ${project.isFullStack ? 'fullstack' : 'frontend'}`}
                                onClick={() => showModal(project)}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-type">
                                            {project.isFullStack ? 'Full Stack' : 'Frontend'}
                                        </div>
                                        <button className="view-btn">View Details</button>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.technology.split(', ').slice(0, 3).map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">{tech}</span>
                                        ))}
                                        {project.technology.split(', ').length > 3 && (
                                            <span className="tech-more">+{project.technology.split(', ').length - 3}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-section">
                        <h3 className="cta-title">Ready to Build Something Amazing?</h3>
                        <p className="cta-description">
                            Let's discuss your next project and bring your ideas to life with modern technologies.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary">Start a Project</a>
                            <a href="https://github.com/nimeshakahingala" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                View GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                className="portfolio-modal"
                width="90%"
                style={{ maxWidth: '1200px' }}
            >
                <PortfolioModal data={selectedProject} />
            </Modal>
        </div>
    );
}

export default Portfolio;