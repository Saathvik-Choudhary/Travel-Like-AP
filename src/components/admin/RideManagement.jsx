import React, { useState, useEffect } from 'react';
import { rideManager, imageManager } from '../../utils/dataManager';
import { defaultRideStructure } from '../../data/config';

const RideManagement = () => {
  const [rides, setRides] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingRide, setEditingRide] = useState(null);
  const [formData, setFormData] = useState({ ...defaultRideStructure });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    loadRides();
  }, []);

  const loadRides = () => {
    const upcomingRides = rideManager.getUpcomingRides();
    setRides(upcomingRides);
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validation = imageManager.validateImage(file);
    if (!validation.valid) {
      showMessage('error', validation.error);
      return;
    }

    setIsLoading(true);
    try {
      const imageUrl = await imageManager.uploadImage(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
      showMessage('success', 'Image uploaded successfully!');
    } catch (error) {
      showMessage('error', 'Failed to upload image');
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingRide) {
        // Update existing ride
        const success = rideManager.updateRide(editingRide.id, formData);
        if (success) {
          showMessage('success', 'Ride updated successfully!');
          setEditingRide(null);
        } else {
          showMessage('error', 'Failed to update ride');
        }
      } else {
        // Add new ride
        const success = rideManager.addRide(formData);
        if (success) {
          showMessage('success', 'Ride added successfully!');
          setShowAddForm(false);
        } else {
          showMessage('error', 'Failed to add ride');
        }
      }
      
      loadRides();
      resetForm();
    } catch (error) {
      showMessage('error', 'An error occurred');
    }
    
    setIsLoading(false);
  };

  const resetForm = () => {
    setFormData({ ...defaultRideStructure });
    setEditingRide(null);
    setShowAddForm(false);
  };

  const handleEdit = (ride) => {
    setFormData({ ...ride });
    setEditingRide(ride);
    setShowAddForm(true);
  };

  const handleDelete = (rideId) => {
    if (window.confirm('Are you sure you want to delete this ride?')) {
      const success = rideManager.deleteRide(rideId);
      if (success) {
        showMessage('success', 'Ride deleted successfully!');
        loadRides();
      } else {
        showMessage('error', 'Failed to delete ride');
      }
    }
  };

  const handleStatusChange = (rideId, newStatus) => {
    const success = rideManager.changeRideStatus(rideId, newStatus);
    if (success) {
      showMessage('success', 'Ride status updated successfully!');
      loadRides();
    } else {
      showMessage('error', 'Failed to update ride status');
    }
  };

  const RideCard = ({ ride }) => (
    <div className="admin-card ride-card">
      <div className="ride-card-header">
        <h3>{ride.title}</h3>
        <span className={`status-badge status-${ride.status}`}>
          {ride.status}
        </span>
      </div>
      
      {ride.image && (
        <div className="ride-image">
          <img src={ride.image} alt={ride.title} />
        </div>
      )}
      
      <div className="ride-details">
        <p><strong>Date:</strong> {ride.date}</p>
        <p><strong>Duration:</strong> {ride.duration}</p>
        <p><strong>Distance:</strong> {ride.distance}</p>
        <p><strong>Participants:</strong> {ride.participants}</p>
        <p><strong>Description:</strong> {ride.description}</p>
      </div>
      
      <div className="ride-actions">
        <button 
          className="btn btn-primary"
          onClick={() => handleEdit(ride)}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => handleDelete(ride.id)}
        >
          Delete
        </button>
        <select 
          value={ride.status}
          onChange={(e) => handleStatusChange(ride.id, e.target.value)}
          className="status-select"
        >
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="ride-management">
      <div className="admin-section">
        <div className="section-header">
          <h2>Ride Management</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddForm(true)}
          >
            Add New Ride
          </button>
        </div>
        
        {message.text && (
          <div className={`message message-${message.type}`}>
            {message.text}
          </div>
        )}
      </div>

      {showAddForm && (
        <div className="admin-card">
          <h3>{editingRide ? 'Edit Ride' : 'Add New Ride'}</h3>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Ride Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Ride to Kolli Hills from Bangalore"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 11th July to 13th July 2025"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="duration">Duration *</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 3 Days"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="distance">Distance *</label>
                <input
                  type="text"
                  id="distance"
                  name="distance"
                  value={formData.distance}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 450 km"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="participants">Participants</label>
                <input
                  type="number"
                  id="participants"
                  name="participants"
                  value={formData.participants}
                  onChange={handleInputChange}
                  placeholder="Number of participants"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="3"
                placeholder="Describe the ride experience, highlights, and what participants can expect..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Ride Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {formData.image && (
                <div className="image-preview">
                  <img src={formData.image} alt="Preview" />
                  <p>Image uploaded successfully!</p>
                </div>
              )}
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : (editingRide ? 'Update Ride' : 'Add Ride')}
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-section">
        <h3>Current Rides ({rides.length})</h3>
        {rides.length === 0 ? (
          <div className="admin-card">
            <p>No rides found. Add your first ride to get started!</p>
          </div>
        ) : (
          <div className="admin-grid">
            {rides.map(ride => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RideManagement;
