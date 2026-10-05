import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import College from './pages/College';
import Lycee from './pages/Lycee';
import Superieur from './pages/Superieur';
import Reserver from './pages/Reserver';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        
        {/* REALISTIC EDITORIAL PAPER TEXTURE OVERLAYS */}
        <div className="paper-texture-overlay" />
        <div className="paper-grain" />

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/college" element={<College />} />
              <Route path="/lycee" element={<Lycee />} />
              <Route path="/superieur" element={<Superieur />} />
              <Route path="/reserver" element={<Reserver />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
