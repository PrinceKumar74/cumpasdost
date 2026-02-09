import React from 'react';
import picFive from '../../../assets/homePics/picFive.png'; 

// Reusable Arrow Icon for navigation buttons
const ArrowIcon = ({ direction = 'left' }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={direction === 'left' ? 'M10 19l-7-7m0 0l7-7m-7 7h18' : 'M14 5l7 7m0 0l-7 7m7-7H3'}
    ></path>
  </svg>
);

// Main ComponentSeven
const ComponentSeven = () => {
  return (
    <section className="font-sans flex items-center justify-center p-8 py-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <span className="cd-gradient-text font-bold tracking-wider">
            JOIN THE REVOLUTION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-[var(--cd-text)]">
            The digital landscape is evolving. Are you ready to evolve with it? Let{" "}
            <span className="cd-gradient-text">Cumpas Dost</span> guide you to success.
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Testimonial Card */}
          <div className="lg:col-span-3">
            <div className="cd-card rounded-2xl p-8 h-full flex flex-col">
              <p className="text-[var(--cd-muted)] text-lg italic mb-8 flex-grow">
                “ We are really impressed with the amazing website. I really want to say big thanks to you Ronnen and to all the staff that they were part of our journey. Such a great company to work with and highly recommended to everyone... Thank you so much Ronnen again and again.”
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img 
                    src={picFive}
                    alt="Client Name"
                    className="w-16 h-16 rounded-full mr-4 border-2 border-black/10"
                  />
                  <div>
                    <h4 className="font-bold text-[var(--cd-text)]">Gagan Deep</h4>
                    <p className="text-[var(--cd-muted)] text-sm">Founder of Hairlyf</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Delivery Success Rate Card */}
            <div className="cd-card rounded-2xl p-8 flex flex-col justify-center h-full overflow-hidden relative">
              <div className="absolute inset-0 opacity-15 cd-gradient"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2 text-[var(--cd-text)]">Delivery Success Rate</h3>
                <p className="text-7xl font-bold text-[var(--cd-text)]">98%</p>
              </div>
            </div>

            {/* Repeat Customers Card */}
            <div className="cd-card rounded-2xl p-8 flex flex-col justify-center h-full overflow-hidden relative">
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,var(--cd-accent3),var(--cd-accent2))]"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2 text-[var(--cd-text)]">Repeat Customers</h3>
                <p className="text-[var(--cd-muted)]">
                An impressive 99% of our customers return to us time and time again for their floral needs. Whether it's for special occasions, everyday arrangements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComponentSeven;
