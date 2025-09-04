import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import UpcomingRides from './pages/UpcomingRides';
import PreviousRides from './pages/PreviousRides';
import Contact from './pages/Contact';
import ResponsiveTest from './components/ResponsiveTest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<UpcomingRides />} />
            <Route path="/previous" element={<PreviousRides />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
