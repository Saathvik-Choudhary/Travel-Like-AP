import React from 'react';
import { Footer } from '../components';

const PreviousRides = () => {
  const previousRides = [
    {
      id: 1,
      title: "Ride to Coorg Coffee Estate",
      date: "15th June 2025",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Explored the beautiful coffee plantations of Coorg with an amazing group of riders.",
      participants: 12,
      distance: "280 km",
      duration: "2 Days"
    },
    {
      id: 2,
      title: "Mysore Palace Heritage Ride",
      date: "8th June 2025",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Cultural ride through the historic city of Mysore with palace visits.",
      participants: 8,
      distance: "150 km",
      duration: "1 Day"
    },
    {
      id: 3,
      title: "Ooty Hill Station Adventure",
      date: "1st June 2025",
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop",
      description: "Challenging uphill ride to the beautiful hill station of Ooty.",
      participants: 15,
      distance: "320 km",
      duration: "3 Days"
    }
  ];

  return (
    <div className="previous-rides">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Past Adventures</h1>
          <p className="page-subtitle">Relive the memories of our completed rides and adventures</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Completed Rides</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Happy Riders</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Kilometers Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Months of Adventure</div>
          </div>
        </div>
      </div>

      {/* Rides Section */}
      <div className="rides-section">
        <div className="section-header">
          <h2 className="section-title">Completed Rides</h2>
          <p className="section-subtitle">Each ride tells a story of adventure, friendship, and discovery</p>
        </div>
        <div className="rides-grid">
          {previousRides.map((ride) => (
            <div key={ride.id} className="ride-card past-ride">
              <div className="ride-image">
                <img src={ride.image} alt={ride.title} />
                <div className="ride-badge">Completed</div>
              </div>
              <div className="ride-content">
                <div className="ride-meta">
                  <span className="ride-duration">{ride.duration}</span>
                  <span className="ride-distance">{ride.distance}</span>
                </div>
                <h3 className="ride-title">{ride.title}</h3>
                <p className="ride-date">{ride.date}</p>
                <p className="ride-description">{ride.description}</p>
                <div className="ride-stats">
                  <span className="stat">
                    <strong>{ride.participants}</strong> Riders
                  </span>
                  <span className="stat">
                    <strong>{ride.distance}</strong> Total
                  </span>
                </div>
                <div className="ride-actions">
                  <button className="view-gallery-btn">View Gallery</button>
                  <button className="share-ride-btn">Share Story</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memories Section */}
      <div className="memories-section">
        <div className="memories-content">
          <h2>Share Your Memories</h2>
          <p>Upload photos and share stories from your rides with our community</p>
          <button className="upload-btn">Upload Photos</button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PreviousRides;
