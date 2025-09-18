import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const AppContent = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  // Reset scroll state when navigating to a new page
  useEffect(() => {
    setShowHeader(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll detection at App level
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      console.log('App scroll detection:', window.scrollY, 'Should show header:', scrolled || isMobile);
      setShowHeader(scrolled || isMobile);
    };

    // Check initial scroll position and screen size
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const shouldShowSidebar = !showHeader;
  const shouldShowHeader = showHeader;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      {shouldShowHeader && <Header />}
      {shouldShowSidebar && (
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      )}
      
      <main className={`
        transition-all duration-300
        ${shouldShowSidebar ? 'lg:mr-80' : ''}
        ${shouldShowHeader ? 'pt-20' : ''}
      `}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
