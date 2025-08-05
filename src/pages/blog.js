import React from "react";
import "./blog.scss";
import BlogCard from "../components/blogCard";

function Blog() {
    return (
        <div className="blog-page">
            <div className="hero-section">
                <div className="container">
                    <div className="section-badge">Blog</div>
                    <h1 className="hero-title">
                        Technical Articles
                        <span className="title-accent">& Insights</span>
                    </h1>
                    <p className="hero-description">
                        Sharing knowledge about full-stack development, modern web technologies, 
                        and best practices in software engineering.
                    </p>
                </div>
            </div>

            <div className="blog-content">
                <div className="container">
                    <div className="articles-grid">
                        <BlogCard />
                        {/* Placeholder for future articles */}
                        <div className="coming-soon-card">
                            <div className="coming-soon-content">
                                <div className="coming-soon-icon">📝</div>
                                <h3>More Articles Coming Soon</h3>
                                <p>I'm working on more technical articles covering full-stack development, React best practices, and Node.js tutorials.</p>
                            </div>
                        </div>
                    </div>

                    <div className="newsletter-section">
                        <div className="newsletter-card">
                            <h3 className="newsletter-title">Stay Updated</h3>
                            <p className="newsletter-description">
                                Follow me on Medium for the latest articles on full-stack development, 
                                web technologies, and software engineering insights.
                            </p>
                            <div className="newsletter-actions">
                                <a 
                                    href="https://medium.com/@NimeshaKahingala" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Follow on Medium
                                </a>
                                <a href="/contact" className="btn btn-secondary">
                                    Suggest a Topic
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;