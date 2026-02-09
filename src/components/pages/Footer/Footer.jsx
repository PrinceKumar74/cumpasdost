import React from 'react';
// Assuming lucide-react is installed for these icons
import { Mail, Phone, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
// Assuming react-router-dom is installed for Link
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[var(--cd-bg)] py-10 font-sans border-t border-[var(--cd-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Company Info Section */}
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center mb-4">
            <img
              className="h-12 w-auto mr-2"
              src={logo}
              alt='logo'
            />
          </div>
          <p className="text-[var(--cd-muted)] text-sm leading-relaxed mb-4">
            Focused on driving your success and helping you outperform competitors with cutting-edge solutions.
          </p>
          <p className="text-[var(--cd-muted)]/80 text-xs mt-8">
            Cumpas Dost Pvt Ltd © 2024. All Rights Reserved
          </p>
        </div>

        {/* Services Links Section */}
        <div className="col-span-1">
          <h3 className="cd-gradient-text font-semibold text-lg mb-4">Service</h3>
          <ul className="space-y-2 text-[var(--cd-muted)] text-sm">
            {/*<li><Link to="/services/illustration" className="hover:text-orange-600 transition-colors">Illustration</Link></li>
            <li><Link to="/services/mobile-design" className="hover:text-orange-600 transition-colors">Mobile Design</Link></li>*/}
            <li><Link to="/ai" className="hover:text-[var(--cd-text)] transition-colors">AI</Link></li>
            <li><Link to="/services/ui-ux-design" className="hover:text-[var(--cd-text)] transition-colors">Web Design</Link></li>
            <li><Link to="/services/web-development" className="hover:text-[var(--cd-text)] transition-colors">Development</Link></li>
            <li><Link to="/services/seo" className="hover:text-[var(--cd-text)] transition-colors">SEO</Link></li>
            <li><Link to="/about" className="hover:text-[var(--cd-text)] transition-colors">About</Link></li>
          </ul>
        </div>

        {/* About Links Section */}
        <div className="col-span-1">
          <h3 className="cd-gradient-text font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-[var(--cd-muted)] text-sm">
            <li><Link to="/contact" className="hover:text-[var(--cd-text)] transition-colors">Contact Us</Link></li>
            <li><Link to="/policies" className="hover:text-[var(--cd-text)] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Follow Us Section */}
        <div className="col-span-1">
          <h3 className="cd-gradient-text font-semibold text-lg mb-4">CONTACT</h3>
          <div className="flex items-center text-[var(--cd-muted)] text-sm mb-2">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="break-all">+91 7479572862</span>
          </div>
          <div className="flex items-center text-[var(--cd-muted)] text-sm mb-6">
            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="break-all">info@CumpasDost.com</span>
          </div>

          <h3 className="cd-gradient-text font-semibold text-lg mb-4">FOLLOW US</h3>
          <div className="flex space-x-3 mb-8">
            <a href="#" className="text-[var(--cd-muted)] hover:text-[var(--cd-text)] transition-colors p-2 rounded-full border border-[var(--cd-border)] hover:border-[var(--cd-text)]/30"><Linkedin className="h-5 w-5" /></a>
            <a
              href="https://www.instagram.com/cumpasdost.private.limited?igsh=Z3VteDc0YXQ5cnI3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cd-muted)] hover:text-[var(--cd-text)] transition-colors p-2 rounded-full border border-[var(--cd-border)] hover:border-[var(--cd-text)]/30"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a href="#" className="text-[var(--cd-muted)] hover:text-[var(--cd-text)] transition-colors p-2 rounded-full border border-[var(--cd-border)] hover:border-[var(--cd-text)]/30"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-[var(--cd-muted)] hover:text-[var(--cd-text)] transition-colors p-2 rounded-full border border-[var(--cd-border)] hover:border-[var(--cd-text)]/30"><Facebook className="h-5 w-5" /></a>
          </div>

          <h3 className="cd-gradient-text font-semibold text-lg mb-4">Stay Connected</h3>
          <p className="text-[var(--cd-muted)] text-sm mb-4">
            Get latest updates to your mailbox directly!
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full min-w-0 px-4 py-2 border border-[var(--cd-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--cd-accent)] text-sm bg-white/70"
            />
            <button className="cd-gradient hover:opacity-95 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

