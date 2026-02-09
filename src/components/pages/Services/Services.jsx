import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: Code,
      description: 'Build powerful, scalable web applications with cutting-edge technologies and best practices.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'API Development & Integration',
        'Performance Optimization'
      ],
      link: '/services/web-development',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Create stunning, user-centric designs that captivate your audience and drive engagement.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Prototyping & Wireframing',
        'Design System Development'
      ],
      link: '/services/ui-ux-design',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: TrendingUp,
      description: 'Grow your brand with data-driven marketing strategies that deliver measurable results.',
      features: [
        'SEO & Content Strategy',
        'Social Media Marketing',
        'PPC Campaigns',
        'Analytics & Reporting'
      ],
      link: '/services/digital-marketing',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--cd-bg)] text-[var(--cd-text)]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-70 pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-[340px] w-[820px] -translate-x-1/2 rounded-full cd-gradient blur-3xl opacity-20"></div>
          <div className="absolute -bottom-28 left-1/2 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,var(--cd-accent3),var(--cd-accent2))] blur-3xl opacity-15"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="cd-gradient-text text-sm font-semibold uppercase tracking-wider mb-3">
            Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="cd-gradient-text">Services</span>
          </h1>
          <p className="text-xl text-[var(--cd-muted)] max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and achieve your goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative cd-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[var(--cd-text)] mb-4 group-hover:cd-gradient-text transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--cd-muted)] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-[var(--cd-muted)]">
                        <CheckCircle className="h-5 w-5 text-[var(--cd-accent)] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center cd-gradient-text font-semibold hover:opacity-80 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {/* Decorative gradient border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative cd-card rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-15 cd-gradient"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cd-text)] mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-[var(--cd-muted)] text-lg mb-8">
                Let's discuss how we can help transform your digital presence
              </p>
              <Link
                to="/contact"
                className="inline-block cd-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-colors shadow-lg shadow-indigo-600/15"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;