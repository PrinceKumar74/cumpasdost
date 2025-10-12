import React from 'react';
// Assuming lucide-react is installed for these icons
import { Mail, Phone, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
// Assuming react-router-dom is installed for Link
import { Link } from 'react-router-dom';
// Restoring the local logo import path
import logo from '../../../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Company Info Section */}
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center mb-4">
            {/* Reverted back to using the local logo variable */}
            <img
              className="h-12 w-auto mr-2"
              src={logo}
              alt='logo'
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x50?text=Logo'; }}
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Focused on driving your success and helping you outperform competitors with cutting-edge solutions.
          </p>
          <p className="text-gray-500 text-xs mt-8">
            Cumpas Dost © 2024. All Rights Reserved
          </p>
        </div>

        {/* Services Links Section */}
        <div className="col-span-1">
          <h3 className="text-orange-600 font-semibold text-lg mb-4">Service</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            {/*<li><Link to="/services/illustration" className="hover:text-orange-600 transition-colors">Illustration</Link></li>
            <li><Link to="/services/mobile-design" className="hover:text-orange-600 transition-colors">Mobile Design</Link></li>
            <li><Link to="/services/motion-graphic" className="hover:text-orange-600 transition-colors">Motion Graphic</Link></li>*/}
            <li><Link to="/services/ui-ux-design" className="hover:text-orange-600 transition-colors">Web Design</Link></li>
            <li><Link to="/services/web-development" className="hover:text-orange-600 transition-colors">Development</Link></li>
            <li><Link to="/services/seo" className="hover:text-orange-600 transition-colors">SEO</Link></li>
            <li><Link to="/about" className="hover:text-orange-600 transition-colors">About</Link></li>
          </ul>
        </div>

        {/* About Links Section */}
        <div className="col-span-1">
          <h3 className="text-orange-600 font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-gray-600 text-sm">




            <li><Link to="/contact" className="hover:text-orange-600 transition-colors">Contact Us</Link></li>
            <li><Link to="/policies" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Follow Us Section */}
        <div className="col-span-1">
          <h3 className="text-orange-600 font-semibold text-lg mb-4">CONTACT</h3>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="break-all">+91 9990597240</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="break-all">info@CumpasDost.com</span>
          </div>

          <h3 className="text-orange-600 font-semibold text-lg mb-4">FOLLOW US</h3>
          <div className="flex space-x-3 mb-8">
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors p-2 rounded-full border border-gray-300 hover:border-orange-600"><Linkedin className="h-5 w-5" /></a>
            <a
              href="https://www.instagram.com/cumpasdost.private.limited?igsh=Z3VteDc0YXQ5cnI3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition-colors p-2 rounded-full border border-gray-300 hover:border-orange-600"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors p-2 rounded-full border border-gray-300 hover:border-orange-600"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors p-2 rounded-full border border-gray-300 hover:border-orange-600"><Facebook className="h-5 w-5" /></a>
          </div>

          <h3 className="text-orange-600 font-semibold text-lg mb-4">Stay Connected</h3>
          <p className="text-gray-600 text-sm mb-4">
            Get latest updates to your mailbox directly!
          </p>
          {/* FIX: The container is now a simple flex container, which is more predictable. */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              // FIX: 'w-full' ensures it takes all available space. 'min-w-0' is a safeguard for flex containers.
              className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
