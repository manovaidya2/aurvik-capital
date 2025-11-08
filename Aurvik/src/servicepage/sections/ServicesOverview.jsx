import React from "react";

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white border rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ServicesOverview = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Core Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Tailored for business owners, startups, and investors to unlock growth
        through strategic UAE setups.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ServiceCard icon="🏢" title="Business Setup" description="Complete UAE company formation" />
      <ServiceCard icon="💰" title="Tax Planning" description="Strategic international tax optimization" />
      <ServiceCard icon="💎" title="Wealth Management" description="Global asset protection & consolidation" />
      <ServiceCard icon="🤝" title="Partner Program" description="Join hands to help Indian MSMEs expand" />
    </div>
  </section>
);

export default ServicesOverview;
