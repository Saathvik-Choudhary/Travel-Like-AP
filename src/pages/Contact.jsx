import React, { useState } from 'react';
import { Footer } from '../components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Ready to join our next adventure? Have questions about our rides? We'd love to hear from you!</p>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info-section">
          <div className="contact-header">
            <h2>Connect With Us</h2>
            <p>Join our community of passionate riders and start your next adventure</p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">📧</span>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>info@travellikeap.com</p>
                <span className="contact-note">We'll respond within 24 hours</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">📱</span>
              </div>
              <div className="contact-info">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
                <span className="contact-note">Available Mon-Sat, 9 AM - 6 PM</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">📍</span>
              </div>
              <div className="contact-info">
                <h3>Location</h3>
                <p>Bangalore, Karnataka, India</p>
                <span className="contact-note">Visit our office for a chat</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Our Adventures</h3>
            <p>Stay updated with our latest rides and community events</p>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/travellikeap/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <span className="social-icon">📸</span>
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@travellikeap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link youtube"
              >
                <span className="social-icon">📺</span>
                YouTube
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link whatsapp"
              >
                <span className="social-icon">💬</span>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="quick-links-grid">
              <a href="/" className="quick-link">Book a Ride</a>
              <a href="/" className="quick-link">Safety Guidelines</a>
              <a href="/" className="quick-link">FAQ</a>
              <a href="/" className="quick-link">Route Maps</a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Tell us about your interest in our rides or ask any questions</p>
            <div className="form-link-container">
              <a 
                href="https://docs.google.com/forms/d/1H2ZRxI1cqRVBWSbnCFSZG_gqVc2BBXQANjL3MVMBtto/viewform?edit_requested=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="google-form-link"
              >
                Fill Out Our Community Form
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your interest in our rides, your experience level, or ask any questions..."
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Send Message</button>
              <button type="button" className="schedule-call-btn">Schedule a Call</button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="map-content">
          <h2>Find Us</h2>
          <p>Visit our office in Bangalore for a personal consultation</p>
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <p>Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
