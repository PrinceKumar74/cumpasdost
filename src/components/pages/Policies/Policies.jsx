import React, { useState, useEffect } from 'react';


const Introduction =()=>(
    <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Introduction</h2>
      <p className="text-gray-600 leading-relaxed">
        These Terms and Conditions ("Terms") govern the use of the website and services provided by CumpasDost. 
        By accessing or using our website and services, you agree to comply with and be bound by these Terms. 
        If you do not agree with these Terms, please refrain from using our website and services.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
)



const Services = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Services</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed mb-4">
        CumpasDost offers a comprehensive range of digital marketing services, including but not limited to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
        <li>Website Development</li>
        <li>Digital Marketing Services</li>
        <li>Advertising Campaigns</li>
        <li>Content Writing & Copywriting</li>
        <li>Designing & Branding</li>
      </ul>
      <p className="text-gray-600 leading-relaxed">
        Each service is subject to specific terms outlined in separate agreements, and we tailor our services to meet the unique needs of our clients.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);

const Responsibilities = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Client Responsibilities</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed mb-4">
        To ensure the successful execution of services, Clients agree to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
        <li>Provide accurate and complete information necessary for us to perform our obligations.</li>
        <li>Grant access to platforms, websites, or any required third-party accounts, where applicable.</li>
        <li>Cooperate with us in a timely manner to avoid any delays in project execution.</li>
      </ul>
      <p className="text-gray-600 leading-relaxed">
        Failure to provide the required materials or information in a timely manner may result in delays, and we will not be held responsible for such delays.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);

const Payment = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Payment Terms</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed">
        All payments for services rendered by CumpasDost are due according to the terms outlined in the individual service agreement or invoice. Payments must be made in full or as agreed, and failure to make timely payments may result in a suspension of services. Prices are subject to change, and you will be notified in advance of any price adjustments.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);

const Confidentiality = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Confidentiality</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed">
        CumpasDost is committed to maintaining the confidentiality of all client information. We will not disclose or share any sensitive or proprietary information without your consent, except where required by law. Both parties agree to maintain confidentiality regarding all aspects of the services and deliverables.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);

const Property = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Intellectual Property</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed mb-4">
        Upon full payment for services, the Client will retain ownership of the final deliverables, including but not limited to designs, content, and digital assets, unless otherwise agreed upon in writing. However, CumpasDost retains the right to use the Client's project for portfolio purposes or marketing materials, unless explicitly stated otherwise in the agreement.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);
const Liability = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Limitation of Liability</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed mb-4">
        While we strive to deliver exceptional services, CumpasDost does not guarantee specific outcomes, such as increased traffic, sales, or rankings, as results depend on various factors outside our control.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Our liability for any claims arising out of the use of our services is limited to the total amount paid for the service that gave rise to the claim. We are not responsible for any indirect, incidental, or consequential damages.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);
const Termination = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Termination</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed mb-4">
        Both parties may terminate the agreement at any time with written notice. In the event of termination, the Client agrees to pay for all work completed up to the termination date.
      </p>
      <p className="text-gray-600 leading-relaxed">
        CumpasDost reserves the right to terminate services immediately if the Client breaches any material term of the agreement.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);
const Amendments = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Amendments to Terms</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed">
        CumpasDost reserves the right to modify or update these Terms at any time. The revised Terms will be posted on our website and will become effective upon publication. Clients are encouraged to review these Terms periodically to stay informed of any changes.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);
const Law = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Governing Law</h1>

    <section className="mb-8">
      <p className="text-gray-600 leading-relaxed">
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of our services or these Terms shall be resolved in the competent courts of India, and both parties submit to the exclusive jurisdiction of such courts.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions or concerns about our privacy policy, please contact us at{' '}
        <a href="mailto:info@cumpasdost.com" className="text-blue-600 hover:underline">
          info@cumpasdost.com
        </a>{' '}
        or call us at <strong>+91-9990597240</strong>.
      </p>
    </section>
  </div>
);








const PoliciesPage = () => {
    
    const policyTabs = [
        { id: 'introduction', name: 'Introduction', component: <Introduction /> },
        { id: 'services', name: 'Service Provided', component: <Services /> },
        { id: 'responsibilities', name: 'Client Responsibility', component: <Responsibilities /> },
        { id: 'payment', name: 'Payment Terms', component: <Payment /> },
         { id: 'confidentiality', name: 'Confidentiality', component: <Confidentiality /> },
        { id: 'property', name: 'Intellectual Property', component: <Property /> },
        { id: 'liability', name: 'Limitation of Liability', component: <Liability /> },
        { id: 'termination', name: 'Termination', component: <Termination /> },
         { id: 'amendments', name: 'Amendments', component: <Amendments /> },
        { id: 'law', name: 'Governing Law', component: <Law /> },
    ];

    const [activeTab, setActiveTab] = useState(policyTabs[0].id);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash && policyTabs.some(tab => tab.id === hash)) {
            setActiveTab(hash);
        }
    }, []);

    const ActiveComponent = policyTabs.find(tab => tab.id === activeTab)?.component;

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="md:flex md:space-x-12">

                    <aside className="md:w-1/4 mb-8 md:mb-0">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Policies</h1>
                        <nav className="space-y-2">
                            {policyTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left px-4 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                                        activeTab === tab.id
                                            ? 'bg-orange-100 text-orange-700'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    <main className="md:w-3/4">
                        <div className="prose max-w-none lg:prose-lg prose-headings:text-gray-800 prose-a:text-orange-600 hover:prose-a:text-orange-700">
                           {ActiveComponent}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default PoliciesPage;