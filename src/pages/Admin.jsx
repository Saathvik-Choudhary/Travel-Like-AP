import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import './Admin.css';

// Admin Components
import AdminDashboard from '../components/admin/AdminDashboard';
import RideManagement from '../components/admin/RideManagement';
import HeroManagement from '../components/admin/HeroManagement';
import ContactManagement from '../components/admin/ContactManagement';
import StatsManagement from '../components/admin/StatsManagement';
import AdminLogin from '../components/admin/AdminLogin';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/rides', label: 'Ride Management', icon: '🚴' },
    { path: '/admin/hero', label: 'Hero Section', icon: '🎯' },
    { path: '/admin/contact', label: 'Contact Info', icon: '📞' },
    { path: '/admin/stats', label: 'Statistics', icon: '📈' }
  ];

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin' || location.pathname === '/admin/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="admin-layout">
      {/* Admin Header */}
      <header className="admin-header">
        <div className="admin-header-content">
          <div className="admin-brand">
            <h1>Travel Like AP - Admin Portal</h1>
          </div>
          <div className="admin-actions">
            <Link to="/" className="view-site-btn" target="_blank">
              View Site
            </Link>
            <button 
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem('admin_authenticated');
                window.location.href = '/admin/login';
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="admin-container">
        {/* Admin Sidebar */}
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <ul className="admin-nav-list">
              {menuItems.map((item) => (
                <li key={item.path} className="admin-nav-item">
                  <Link
                    to={item.path}
                    className={`admin-nav-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Admin Main Content */}
        <main className="admin-main">
          <div className="admin-content">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('admin_authenticated');
    setIsAuthenticated(authStatus === 'true');
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Loading Admin Portal...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/rides" element={<RideManagement />} />
        <Route path="/hero" element={<HeroManagement />} />
        <Route path="/contact" element={<ContactManagement />} />
        <Route path="/stats" element={<StatsManagement />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
