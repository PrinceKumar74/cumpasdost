import React from 'react';
import img1 from '../../../assets/design/gridone.png';
import img2 from '../../../assets/design/gridtwo.png';
import img3 from '../../../assets/design/gridthree.png';
import img4 from '../../../assets/design/gridfour.png';
import img5 from '../../../assets/design/gridfive.png';
import img6 from '../../../assets/design/gridsix.png';

// Data for the service cards. This makes it easy to add, remove, or modify services.
const servicesData = [
  {
    title: 'Web Design',
    description: 'A website is often the first impression of your brand — and we make it a lasting one. We design visually engaging, user-friendly websites tailored to your goals. Whether it\'s a simple landing page or a full-scale e-commerce platform, we handle every design detail to bring your vision to life.',
    imageUrl: img1,
    altText: 'Person typing on a laptop keyboard, representing web design.',
  },
  {
    title: 'PPT Design',
    description: 'Whether for clients or internal teams, PowerPoint remains a business essential. Our PPT and Animated PPT design services turn ordinary slides into impactful visual stories. We work closely with you to ensure your message is clear, engaging, and effective.',
    imageUrl: img2,
    altText: 'Laptop screen showing a presentation slide with "Click to add title".',
  },
  {
    title: 'Animated Design',
    description: 'Custom designs, animations, and transitions make your presentation stand out from the first slide to the last. We collaborate with you to create clear, persuasive, and visually striking slides—whether it’s a few pages or a full deck to inform and impress your audience.',
    imageUrl: img3,
    altText: 'Hand holding a smartphone displaying a beauty product package design.',
  },
  {
    title: 'UI/UX Design',
    description: 'UI/UX design can make or break your success. Our services focus on creating visually appealing, intuitive interfaces that balance user needs with business goals—whether for an app or a website.',
    imageUrl: img4,
    altText: 'Paper with UI/UX wireframe sketches on a desk.',
  },
  {
    title: 'Logo Design',
    description: 'A logo is the face of your brand—one of the first things people notice and remember. Our logo design service crafts unique, memorable logos that reflect your brand’s vision, values, and audience, ensuring it’s both meaningful and impactful.',
    imageUrl: img5,
    altText: 'Hand holding a disposable coffee cup with a creative logo on it.',
  },
   {
    title: 'Banner Design',
    description: 'Capture attention and drive clicks with stunning banner designs. We create eye-catching visuals for your website, social media, and advertising campaigns that are optimized for performance and brand consistency.',
    imageUrl: img6,
    altText: 'Tablet computer displaying a fashion website with a large banner.',
  },
];


export default function ComponentTwo() {
  return (
    <div className="bg-[#212121] text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* --- Hero Section --- */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Let us Shape Your Story.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Get started with our free-of-charge, personalized support. Create your custom design plan with us.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Primary Action
          </button>
        </div>

        {/* --- Services Introduction --- */}
        <div className="text-center max-w-4xl mx-auto mt-20 mb-12">
            <span className="text-xs font-semibold bg-gray-700/50 text-white py-1 px-3 rounded-full inline-flex items-center mb-4">
               DIGITAL EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-orange-500">Elevate</span> your digital presence with engaging, user focused designs that drive interaction.
            </h2>
        </div>

        {/* --- Services Cards Section --- */}
        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Image Section */}
                <div className="p-6">
                   <img 
                    src={service.imageUrl} 
                    alt={service.altText} 
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image'; }}
                   />
                </div>

                {/* Text Content Section */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-orange-600 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
