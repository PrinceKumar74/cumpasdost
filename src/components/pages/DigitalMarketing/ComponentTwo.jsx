import React from 'react';
import img1 from '../../../assets/marketingPics/one.png';
import img2 from '../../../assets/marketingPics/two.png';
import img3 from '../../../assets/marketingPics/three.png';
import img4 from '../../../assets/marketingPics/four.png';
import img5 from '../../../assets/marketingPics/five.png';


// A reusable component for the feature cards
const FeatureCard = ({ imgSrc, title, description }) => (
  <div className="cd-card overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img 
      src={imgSrc} 
      alt={title} 
      className="w-full h-56 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/ff0000?text=Image+Error'; }}
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-[var(--cd-text)] mb-2">{title}</h3>
      <p className="text-[var(--cd-muted)] text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

// The main component built from the series of images
export default function ComponentTwo() {
  const features = [
    {
      imgSrc: img1,
      title: "Know Your Unique Requirements",
      description: "It starts with really understanding your business goals and problems. This creates a custom solution for your organization to match with your vision and objectives."
    },
    {
      imgSrc: img2,
      title: "Building a Custom Plan",
      description: "Our Team is Highly Focus on a step-by-step plan with the Help of Digital Marketing, Development, and design services. Each Solution is Carefully aligned to Ensure Maximum Impact for your Business."
    },
    {
      imgSrc: img3,
      title: "Executing Plan with Accuracy",
      description: "We Highly Focus on the Quality and Details that we have gathered Then We Execute the plan Well. With the Use of the Latest and Upcoming Tools and Techniques. Our team focuses on every single moment."
    },
    {
      imgSrc: img4,
      title: "Transforming For Your Business Growth",
      description: "We Continuously monitor and Adjust the Strategies to Give the Best Results. Our Data-driven Approach Helps us to Optimize Campaigns and Give Maximum ROI and Sustainable Growth."
    },
    {
      imgSrc: img5,
      title: "Building Long-term Success",
      description: "We do not stop after the success is achieved. We primarily focus on long-term growth, building lasting relationships, and providing continuous support to keep your business up to date."
    }
  ];

  return (
    <section className="font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Hero Section --- */}
        <div className="py-20 lg:py-32 text-center">
           <span className="inline-block cd-surface text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 cd-gradient-text">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--cd-text)]">
            Unlock Your <span className="cd-gradient-text">Brand's Full</span>
            <br />
            <span className="cd-gradient-text">Potential</span> with our Expertise
          </h1>
          <p className="text-[var(--cd-muted)] mt-6 text-lg max-w-3xl mx-auto">
            We Specialize In Delivering High Quality, Scalable Digital Marketing, web Development and IT solutions. Our Innovative Strategy which Helps Your Business to Grow On Digital Platform.
          </p>
          <div className="mt-8">
            <button className="cd-gradient hover:opacity-95 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg shadow-indigo-600/15">
              Primary Action
            </button>
          </div>
        </div>

        {/* --- Features Grid Section --- */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                imgSrc={feature.imgSrc}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
