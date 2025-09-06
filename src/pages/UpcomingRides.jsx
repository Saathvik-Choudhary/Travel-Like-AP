import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components';
import logo from '../assets/logo.png';

const UpcomingRides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "LOSE YOURSELF",
      subtitle: "DISCOVER YOURSELF",
      tagline: "Travel Like A Pro",
      background: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop",
      cta: "Join Our Rides"
    },
    {
      id: 2,
      title: "ADVENTURE AWAITS",
      subtitle: "EXPLORE THE WORLD",
      tagline: "Ride Beyond Limits",
      background: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=1920&h=1080&fit=crop",
      cta: "Book Adventure"
    },
    {
      id: 3,
      title: "MOUNTAIN SPIRIT",
      subtitle: "CONQUER PEAKS",
      tagline: "Ride to the Top",
      background: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1920&h=1080&fit=crop",
      cta: "Start Journey"
    },
    {
      id: 4,
      title: "FREEDOM CALLS",
      subtitle: "ANSWER THE ROAD",
      tagline: "Your Next Adventure",
      background: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
      cta: "Explore Now"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const upcomingRides = [
    {
      id: 1,
      title: "Ride to Kolli Hills from Bangalore",
      date: "11th July to 13th July 2025",
      image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400&h=300&fit=crop",
      description: "Experience the scenic beauty of Kolli Hills with this exciting group ride adventure.",
      duration: "3 Days",
      distance: "450 km"
    },
    {
      id: 2,
      title: "Weekend Ride to Nandi Hills",
      date: "20th July 2025",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "A perfect weekend getaway to the famous Nandi Hills cycling route.",
      duration: "1 Day",
      distance: "120 km"
    },
    {
      id: 3,
      title: "Mountain Biking at Skandagiri",
      date: "27th July 2025",
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop",
      description: "Challenge yourself with this thrilling mountain biking experience.",
      duration: "2 Days",
      distance: "280 km"
    }
  ];

  return (
    <div className="upcoming-rides">
      {/* Auto-Scrolling Hero Section */}
      <div className="hero-carousel">
        <div className="hero-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="hero-slide">
              <div 
                className="hero-background" 
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <div className="hero-logo">
                  <img src={logo} alt="Travel Like AP Logo" className="hero-logo-img" />
                </div>
                <h1 className="hero-title">{slide.title}</h1>
                <h2 className="hero-subtitle">{slide.subtitle}</h2>
                <h3 className="hero-tagline">{slide.tagline}</h3>
                <div className="hero-cta">
                  <button className="hero-btn primary">{slide.cta}</button>
                  <button className="hero-btn secondary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="hero-nav hero-nav-prev"
          onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button 
          className="hero-nav hero-nav-next"
          onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>

      {/* Featured Ride Banner */}
      <div className="featured-ride-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h2>Featured Adventure</h2>
            <h3>Himalayan Spirit 2025</h3>
            <p>Join us for the ultimate mountain biking experience through the majestic Himalayas</p>
            <button className="banner-btn">Know More</button>
          </div>
          <div className="banner-image">
            <img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop" alt="Himalayan Adventure" />
          </div>
        </div>
      </div>

      {/* Upcoming Rides Section */}
      <div className="rides-section">
        <div className="section-header">
          <h2 className="section-title">Upcoming Rides</h2>
          <p className="section-subtitle">Choose your next adventure from our carefully curated selection</p>
        </div>
        <div className="rides-grid">
          {upcomingRides.map((ride) => (
            <div key={ride.id} className="ride-card">
              <div className="ride-image">
                <img src={ride.image} alt={ride.title} />
              </div>
              <div className="ride-content">
                <div className="ride-meta">
                  <span className="ride-duration">{ride.duration}</span>
                  <span className="ride-distance">{ride.distance}</span>
                </div>
                <h3 className="ride-title">{ride.title}</h3>
                <p className="ride-date">{ride.date}</p>
                <p className="ride-description">{ride.description}</p>
                <div className="ride-actions">
                  <button className="view-details-btn">View Details</button>
                  <button className="book-now-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our community of passionate riders and discover the world on two wheels</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Join Our Community</button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UpcomingRides;
