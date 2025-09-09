import React, { useState, useEffect } from 'react';
import { rideManager, statsManager } from '../../utils/dataManager';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalRides: 0,
    upcomingRides: 0,
    completedRides: 0,
    totalParticipants: 0
  });

  useEffect(() => {
    loadDashboardStats();
  }, []);

  const loadDashboardStats = () => {
    const upcomingRides = rideManager.getUpcomingRides();
    const previousRides = rideManager.getPreviousRides();
    const websiteStats = statsManager.getStats();

    const totalParticipants = [...upcomingRides, ...previousRides]
      .reduce((sum, ride) => sum + (ride.participants || 0), 0);

    setStats({
      totalRides: upcomingRides.length + previousRides.length,
      upcomingRides: upcomingRides.length,
      completedRides: previousRides.length,
      totalParticipants: totalParticipants
    });
  };

  const StatCard = ({ title, value, icon, color }) => (
    <div className="admin-card stat-card">
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <div className="admin-section">
        <h2>Dashboard Overview</h2>
        <p>Welcome to the Travel Like AP admin portal. Here's a quick overview of your website content.</p>
      </div>

      <div className="admin-grid-4">
        <StatCard
          title="Total Rides"
          value={stats.totalRides}
          icon="🚴"
          color="#4CAF50"
        />
        <StatCard
          title="Upcoming Rides"
          value={stats.upcomingRides}
          icon="📅"
          color="#2196F3"
        />
        <StatCard
          title="Completed Rides"
          value={stats.completedRides}
          icon="✅"
          color="#FF9800"
        />
        <StatCard
          title="Total Participants"
          value={stats.totalParticipants}
          icon="👥"
          color="#9C27B0"
        />
      </div>

      <div className="admin-grid-2">
        <div className="admin-card">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <a href="/admin/rides" className="btn btn-primary">
              Add New Ride
            </a>
            <a href="/admin/hero" className="btn btn-secondary">
              Update Hero Section
            </a>
            <a href="/admin/contact" className="btn btn-secondary">
              Update Contact Info
            </a>
            <a href="/admin/stats" className="btn btn-secondary">
              Update Statistics
            </a>
          </div>
        </div>

        <div className="admin-card">
          <h3>Recent Activity</h3>
          <div className="recent-activity">
            <div className="activity-item">
              <span className="activity-icon">📝</span>
              <div className="activity-content">
                <p>Admin portal initialized</p>
                <small>Just now</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">🚴</span>
              <div className="activity-content">
                <p>Ready to manage rides</p>
                <small>System ready</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <h3>Getting Started</h3>
        <div className="getting-started">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Add Your First Ride</h4>
              <p>Go to Ride Management to add upcoming cycling adventures with details, images, and dates.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Customize Hero Section</h4>
              <p>Update the main banner slides with your own content, images, and call-to-action messages.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Update Contact Information</h4>
              <p>Keep your contact details, social media links, and business information up to date.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
