import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[var(--cd-surface)] backdrop-blur-md shadow-lg border-b border-[var(--cd-border)]'
        : 'bg-[var(--cd-surface)] shadow-sm border-b border-[var(--cd-border)]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Go to home">
            <img className="h-10 w-auto" src={logo} alt="Cumpas Dost" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="cd-surface rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? 'cd-gradient text-white shadow-md shadow-indigo-600/15'
                      : 'text-[var(--cd-text)]/75 hover:text-[var(--cd-text)] hover:bg-black/5'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? 'cd-gradient text-white shadow-md shadow-indigo-600/15'
                      : 'text-[var(--cd-text)]/75 hover:text-[var(--cd-text)] hover:bg-black/5'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/ai"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? 'cd-gradient text-white shadow-md shadow-indigo-600/15'
                      : 'text-[var(--cd-text)]/75 hover:text-[var(--cd-text)] hover:bg-black/5'
                  }`
                }
              >
                AI
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="px-3 py-2 rounded-full text-sm font-semibold text-[var(--cd-text)]/75 hover:text-[var(--cd-text)] hover:bg-black/5 transition-all flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-2xl shadow-xl border border-[var(--cd-border)] bg-white/90 backdrop-blur opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                  <div className="p-2">
                    <Link to="/services/web-development" className="block px-4 py-3 rounded-xl text-[var(--cd-text)]/80 hover:bg-black/5 hover:text-[var(--cd-text)] transition-colors">
                      Web Development
                    </Link>
                    <Link to="/services/ui-ux-design" className="block px-4 py-3 rounded-xl text-[var(--cd-text)]/80 hover:bg-black/5 hover:text-[var(--cd-text)] transition-colors">
                      UI/UX Design
                    </Link>
                    <Link to="/services/digital-marketing" className="block px-4 py-3 rounded-xl text-[var(--cd-text)]/80 hover:bg-black/5 hover:text-[var(--cd-text)] transition-colors">
                      Digital Marketing
                    </Link>
                    <div className="my-2 border-t border-black/5" />
                    <Link to="/services" className="block px-4 py-3 rounded-xl font-semibold cd-gradient-text hover:bg-black/5 transition-colors">
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Schedule Call Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <button className="cd-gradient hover:opacity-95 text-white px-6 py-2 rounded-full font-semibold flex items-center shadow-lg shadow-indigo-600/15">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Call
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cd-surface rounded-full p-2 text-[var(--cd-text)]/80 hover:text-[var(--cd-text)] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--cd-border)] py-4 relative z-50">
            <div className="flex flex-col space-y-4">
              <NavLink onClick={closeMenu} to="/" className="text-[var(--cd-text)]/80 hover:text-[var(--cd-text)] font-semibold transition-colors">Home</NavLink>
              <NavLink onClick={closeMenu} to="/about" className="text-[var(--cd-text)]/80 hover:text-[var(--cd-text)] font-semibold transition-colors">About</NavLink>
              <NavLink onClick={closeMenu} to="/ai" className="text-[var(--cd-text)]/80 hover:text-[var(--cd-text)] font-semibold transition-colors">AI</NavLink>
              <div className="pl-4 space-y-2">
                <p className="text-[var(--cd-text)] font-medium">Services</p>
                <Link onClick={closeMenu} to="/services/web-development" className="block text-[var(--cd-text)]/70 hover:text-[var(--cd-text)] transition-colors">Web Development</Link>
                <Link onClick={closeMenu} to="/services/ui-ux-design" className="block text-[var(--cd-text)]/70 hover:text-[var(--cd-text)] transition-colors">UI/UX Design</Link>
                <Link onClick={closeMenu} to="/services/digital-marketing" className="block text-[var(--cd-text)]/70 hover:text-[var(--cd-text)] transition-colors">Digital Marketing</Link>
                <Link onClick={closeMenu} to="/services" className="block cd-gradient-text font-semibold transition-colors">View all</Link>
              </div>

              {/* Mobile Schedule Call Button */}
              <Link to="/contact" className="w-full">
                <button onClick={closeMenu} className="cd-gradient hover:opacity-95 text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center mt-4 w-full shadow-lg shadow-indigo-600/15">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Call
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
