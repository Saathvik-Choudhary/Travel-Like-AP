import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Travel Like AP Logo" className="nav-logo" />
            <span className="brand-text">Travel Like AP</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" onClick={closeMenu}>Upcoming Rides</Link>
          </li>
          
          <li className={`dropdown ${activeDropdown === 'rides' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle('rides')}
            >
              Rides & Events
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/" onClick={closeMenu}>Upcoming Rides</Link></li>
              <li><Link to="/previous" onClick={closeMenu}>Previous Rides</Link></li>
              <li><Link to="/" onClick={closeMenu}>Group Tours</Link></li>
              <li><Link to="/" onClick={closeMenu}>Rental Services</Link></li>
            </ul>
          </li>

          <li className={`dropdown ${activeDropdown === 'services' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle('services')}
            >
              Services
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/" onClick={closeMenu}>Bike Maintenance</Link></li>
              <li><Link to="/" onClick={closeMenu}>Safety Training</Link></li>
              <li><Link to="/" onClick={closeMenu}>Route Planning</Link></li>
            </ul>
          </li>

          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>

          <li className="cta-button">
            <Link to="/" className="book-ride-btn" onClick={closeMenu}>
              Book a Ride
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
