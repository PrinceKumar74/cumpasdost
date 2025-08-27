import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-15 w-auto"
                src={logo}
                alt='logo'
              />
            </div>
          </div>

          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    Web Development
                  </Link>
                  
                  <Link to="/services/ui-ux-design" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    UI/UX Design
                  </Link>
                  <Link to="/services/digital-marketing" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    Digital Marketing
                  </Link>
                </div>
              </div>
            </div>

            
            {/*  Resources Dropdown
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  
                 <Link to="/resources/coming-soon" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    coming soon
                  </Link>
                  
                  <Link to="/resources/support" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    Support
                  </Link>
                </div>
              </div>
            </div> */}
          </nav>

          {/* Schedule Call Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact"><button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Schedule Call
            </button></Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                About
              </Link>
              <div className="pl-4 space-y-2">
                <p className="text-gray-900 font-medium">Services</p>
                <Link to="/services/web-development" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  Web Development
                </Link>
                
                <Link to="/services/ui-ux-design" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  UI/UX Design
                </Link>
                <Link to="/services/digital-marketing" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  Digital Marketing
                </Link>
              </div>
              {/* <Link to="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Blog
              </Link>
              <div className="pl-4 space-y-2">
                <p className="text-gray-900 font-medium">Resources</p>
                <Link to="/resources/coming-soon" className="block text-gray-600 hover:text-orange-600 transition-colors">
                    coming soon
                  </Link>
                <Link to="/resources/support" className="block text-gray-600 hover:text-orange-600 transition-colors">
                  Support
                </Link>
              </div> */}
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center justify-center mt-4">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;