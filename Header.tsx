import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L0 9V27L16 36L32 27V9L16 0ZM28.5 25.11L16 32.22L3.5 25.11V10.89L16 3.78L28.5 10.89V25.11Z" fill="#00575E"/>
        </svg>
        <span className="text-2xl font-heading font-bold text-brand-teal">Luminaz</span>
    </div>
);

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-light-blue' : 'text-brand-teal hover:text-brand-light-blue'
                }`
            }
        >
            {children}
        </NavLink>
    );
};

const Header: React.FC<{ isMinimal?: boolean }> = ({ isMinimal = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isMinimal) {
        return (
            <header className="bg-brand-off-white/80 shadow-md backdrop-blur-sm py-4">
                 <div className="container mx-auto px-6">
                    <NavLink to="/" aria-label="Back to Homepage">
                        <Logo />
                    </NavLink>
                </div>
            </header>
        );
    }

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-off-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <Logo />
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/about">About Us</NavItem>
                        <NavItem to="/services">Services</NavItem>
                        <NavItem to="/funding-hub">Scholarships & Funding</NavItem>
                        <NavItem to="/testimonials">Testimonials</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                    </div>

                    <NavLink 
                        to="/apply" 
                        className="hidden md:inline-block bg-brand-teal text-white font-semibold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-colors duration-300 shadow-sm"
                    >
                        Apply Now
                    </NavLink>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-teal focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
                        <div className="flex flex-col space-y-4">
                            <NavItem to="/">Home</NavItem>
                            <NavItem to="/about">About Us</NavItem>
                            <NavItem to="/services">Services</NavItem>
                            <NavItem to="/funding-hub">Scholarships & Funding</NavItem>
                            <NavItem to="/testimonials">Testimonials</NavItem>
                            <NavItem to="/contact">Contact</NavItem>
                            <NavLink 
                                to="/apply" 
                                className="bg-brand-teal text-white text-center font-semibold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-colors duration-300 shadow-sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Apply Now
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;