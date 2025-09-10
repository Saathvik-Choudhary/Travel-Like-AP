import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import UpcomingRides from './pages/UpcomingRides';
import PreviousRides from './pages/PreviousRides';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={
          <div className="App">
            <Navigation />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<UpcomingRides />} />
                <Route path="/upcoming" element={<UpcomingRides />} />
                <Route path="/previous" element={<PreviousRides />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
