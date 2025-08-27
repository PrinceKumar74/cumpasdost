import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// --- Icon Components ---
const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

function ContactUs() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    agree: false,
  });

  const [status, setStatus] = useState({
    message: '',
    type: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // --- Form Input Handler ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // --- Form Submission Handler ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous status
    setStatus({ message: '', type: '' });

    // Basic validation
    if (!formData.agree) {
      setStatus({ message: 'You must agree to the privacy policy.', type: 'error' });
      return;
    }
    
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ message: 'Please fill out all required fields.', type: 'error' });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ message: 'Please enter a valid email address.', type: 'error' });
      return;
    }
    
    // Check if EmailJS is properly imported
    if (!emailjs) {
      console.error("EmailJS not properly imported.");
      setStatus({ 
        message: 'Email service is currently unavailable. Please try again later or contact us directly.', 
        type: 'error' 
      });
      return;
    }

    setIsLoading(true);

    // EmailJS configuration
    const serviceID = 'service_g9nhcqe';
    const templateID = 'template_00qh1b1';
    const publicKey = 'V8UdzlCNIr0JaZWfs';
    
    // Validate that credentials are set
    if (serviceID.includes('YOUR_') || templateID.includes('YOUR_') || publicKey.includes('YOUR_')) {
      setIsLoading(false);
      setStatus({ 
        message: 'Email service configuration is incomplete. Please contact the administrator.', 
        type: 'error' 
      });
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setStatus({ message: 'Message sent successfully! We\'ll get back to you soon.', type: 'success' });
          
          // Reset form data
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
            agree: false,
          });
      })
      .catch((error) => {
          console.error('Failed to send email:', error);
          setStatus({ 
            message: 'Failed to send message. Please try again or contact us directly.', 
            type: 'error' 
          });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-16">
            
            {/* --- Contact Form Section --- */}
            <div>
              <h2 className="text-4xl font-extrabold text-gray-800">Get in touch</h2>
              <p className="text-sm text-gray-500 mt-4">
                We'd love to hear from you. Please fill out this form.
              </p>
              
              <form ref={form} onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 block mb-2">
                      First name *
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full text-sm text-gray-800 px-4 py-3 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-500 transition-all" 
                      placeholder="First name" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 block mb-2">
                      Last name *
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full text-sm text-gray-800 px-4 py-3 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-500 transition-all" 
                      placeholder="Last name" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm text-gray-800 px-4 py-3 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-500 transition-all" 
                    placeholder="you@company.com" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 block mb-2">
                    Phone number
                  </label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full text-sm text-gray-800 px-4 py-3 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-500 transition-all" 
                    placeholder="+91 (000) 000-0000" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 block mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="6" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-sm text-gray-800 px-4 py-3 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-500 transition-all resize-vertical" 
                    placeholder="Leave us a message..." 
                    required
                  />
                </div>

                <div className="flex items-start">
                  <input 
                    id="agree" 
                    name="agree" 
                    type="checkbox" 
                    checked={formData.agree}
                    onChange={handleChange}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1" 
                    required
                  />
                  <div className="ml-3 text-sm">
                    <label htmlFor="agree" className="font-medium text-gray-700">
                      You agree to our friendly privacy policy. *
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-3 px-6 text-sm font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                
                {status.message && (
                  <div className={`p-4 rounded-md ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}
              </form>
            </div>

            {/* --- Contact Info Section --- */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-gray-800">We'd love to hear from you</h2>
              <p className="text-sm text-gray-500 mt-4">
                Need something cleared up? Here are our most frequently asked questions.
              </p>
              
              <div className="mt-12 space-y-10">
                <div className="flex items-start">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-full flex-shrink-0">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-500 mt-2">Our friendly team is here to help.</p>
                    <a 
                      href="mailto:info@cumpasdost.com" 
                      className="text-orange-600 font-semibold mt-2 block hover:underline transition-all"
                    >
                      info@cumpasdost.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-full flex-shrink-0">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-500 mt-2">Mon-Fri from 8am to 5pm.</p>
                    <a 
                      href="tel:+919990597240" 
                      className="text-orange-600 font-semibold mt-2 block hover:underline transition-all"
                    >
                      +91-9990597240
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;