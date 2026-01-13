
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './pages/Portfolio';
import SolutionList from './pages/SolutionList';
import SolutionDetail from './pages/SolutionDetail';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Increase delay to account for framer-motion exit (0.4s) + entry
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 500); // Increased to 500ms to cover 0.4s animation

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

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
            <Link to={getLink("#about")}>About</Link>
            <Link to={getLink("#milestones")}>Career</Link>
            <Link to={getLink("#skills")}>Skills</Link>
            <Link to="/products" className={location.pathname.startsWith('/products') ? 'active' : ''}>Products</Link>
            <Link to={getLink("#projects")}>Work</Link>
            <Link to={getLink("#contact")}>Contact</Link>
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
