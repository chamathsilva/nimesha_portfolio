import React, { useState, useEffect } from "react";
import "./header.scss";
import Nav from "./nav";

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <>
            {/* Mobile Header */}
            <div className={`header mobile ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-inner">
                    <div className="logo">
                        <span className="logo-text">NK</span>
                    </div>
                    <div className="header-actions">
                        <button 
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                        <div 
                            id="hamburger" 
                            className={`hamburger ${isMenuActive ? "is-active" : ""}`} 
                            onClick={() => setIsMenuActive(!isMenuActive)}
                        >
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                </div>
                <Nav setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
            </div>

            {/* Desktop Header */}
            <div className="header desktop">
                <div className="desktop-nav">
                    <div className="logo">
                        <span className="logo-text">Nimesha Kahingala</span>
                        <span className="logo-subtitle">Full Stack Developer</span>
                    </div>
                    <div className="nav-actions">
                        <button 
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                    </div>
                </div>
                <Nav setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
            </div>
        </>
    );
}

export default Header;