
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './pages/Portfolio';
import SolutionList from './pages/SolutionList';
import SolutionDetail from './pages/SolutionDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLink = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <div className="app">
      <ScrollToTop />
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <Link to="/" className="logo gradient-text" style={{ textDecoration: 'none' }}>
            <img src="/portfolio/logo.svg" alt="GT" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} />
            ANDERSON
          </Link>
          <div className="nav-links">
            <a href={getLink("#about")}>About</a>
            <a href={getLink("#milestones")}>Career</a>
            <a href={getLink("#skills")}>Skills</a>
            <Link to="/products" className={location.pathname.startsWith('/products') ? 'active' : ''}>Products</Link>
            <a href={getLink("#projects")}>Work</a>
            <a href={getLink("#contact")}>Contact</a>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/products" element={<SolutionList />} />
          <Route path="/products/:id" element={<SolutionDetail />} />
        </Routes>
      </AnimatePresence>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Anderson Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
