import React, { useState, useEffect } from 'react';
import { statsManager } from '../../utils/dataManager';

const StatsManagement = () => {
  const [stats, setStats] = useState({
    completedRides: 25,
    happyRiders: 150,
    kilometersCovered: 5000,
    monthsOfAdventure: 12
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = () => {
    const savedStats = statsManager.getStats();
    setStats(savedStats);
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleInputChange = (field, value) => {
    setStats(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      const success = statsManager.updateStats(stats);
      if (success) {
        showMessage('success', 'Statistics updated successfully!');
      } else {
        showMessage('error', 'Failed to update statistics');
      }
    } catch (error) {
      showMessage('error', 'An error occurred');
    }
  };

  const StatCard = ({ title, value, icon, description }) => (
    <div className="admin-card stat-preview-card">
      <div className="stat-preview-header">
        <span className="stat-preview-icon">{icon}</span>
        <h4>{title}</h4>
      </div>
      <div className="stat-preview-value">{value}</div>
      <div className="stat-preview-description">{description}</div>
    </div>
  );

  return (
    <div className="stats-management">
      <div className="admin-section">
        <h2>Statistics Management</h2>
        <p>Update the statistics displayed on your website's previous rides page.</p>
        
        {message.text && (
          <div className={`message message-${message.type}`}>
            {message.text}
          </div>
        )}
      </div>

      <div className="admin-section">
        <h3>Current Statistics Preview</h3>
        <div className="admin-grid-4">
          <StatCard
            title="Completed Rides"
            value={`${stats.completedRides}+`}
            icon="🚴"
            description="Total number of completed cycling adventures"
          />
          <StatCard
            title="Happy Riders"
            value={`${stats.happyRiders}+`}
            icon="👥"
            description="Total number of satisfied participants"
          />
          <StatCard
            title="Kilometers Covered"
            value={`${stats.kilometersCovered.toLocaleString()}+`}
            icon="🛣️"
            description="Total distance covered in all rides"
          />
          <StatCard
            title="Months of Adventure"
            value={stats.monthsOfAdventure}
            icon="📅"
            description="Duration of your adventure business"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="admin-card">
          <h3>Update Statistics</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="completedRides">Completed Rides</label>
              <input
                type="number"
                id="completedRides"
                value={stats.completedRides}
                onChange={(e) => handleInputChange('completedRides', e.target.value)}
                min="0"
                placeholder="25"
              />
              <small>Total number of completed cycling adventures</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="happyRiders">Happy Riders</label>
              <input
                type="number"
                id="happyRiders"
                value={stats.happyRiders}
                onChange={(e) => handleInputChange('happyRiders', e.target.value)}
                min="0"
                placeholder="150"
              />
              <small>Total number of satisfied participants</small>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="kilometersCovered">Kilometers Covered</label>
              <input
                type="number"
                id="kilometersCovered"
                value={stats.kilometersCovered}
                onChange={(e) => handleInputChange('kilometersCovered', e.target.value)}
                min="0"
                placeholder="5000"
              />
              <small>Total distance covered in all rides</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="monthsOfAdventure">Months of Adventure</label>
              <input
                type="number"
                id="monthsOfAdventure"
                value={stats.monthsOfAdventure}
                onChange={(e) => handleInputChange('monthsOfAdventure', e.target.value)}
                min="0"
                placeholder="12"
              />
              <small>Duration of your adventure business</small>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Update Statistics
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StatsManagement;
