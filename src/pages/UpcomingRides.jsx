import React from 'react';
import logo from '../assets/logo.png';

const UpcomingRides = () => {
  const upcomingRides = [
    {
      id: 1,
      title: "Ride to Kolli Hills from Bangalore",
      date: "11th July to 13th July 2025",
      image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400&h=300&fit=crop",
      description: "Experience the scenic beauty of Kolli Hills with this exciting group ride adventure.",
      difficulty: "Intermediate",
      duration: "3 Days",
      distance: "450 km"
    },
    {
      id: 2,
      title: "Weekend Ride to Nandi Hills",
      date: "20th July 2025",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "A perfect weekend getaway to the famous Nandi Hills cycling route.",
      difficulty: "Beginner",
      duration: "1 Day",
      distance: "120 km"
    },
    {
      id: 3,
      title: "Mountain Biking at Skandagiri",
      date: "27th July 2025",
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop",
      description: "Challenge yourself with this thrilling mountain biking experience.",
      difficulty: "Advanced",
      duration: "2 Days",
      distance: "280 km"
    }
  ];

  return (
    <div className="upcoming-rides">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo">
            <img src={logo} alt="Travel Like AP Logo" className="hero-logo-img" />
          </div>
          <h1 className="hero-title">LOSE YOURSELF</h1>
          <h2 className="hero-subtitle">DISCOVER YOURSELF</h2>
          <h3 className="hero-tagline">Travel Like A Pro</h3>
        </div>
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
                <div className="ride-overlay">
                  <div className="ride-difficulty">{ride.difficulty}</div>
                </div>
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
            <button className="cta-btn secondary">Download Route Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRides;
