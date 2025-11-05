import React, { useState } from "react";

const ServicesPage = () => {
  const [calculatorData, setCalculatorData] = useState({
    turnover: "10",
    taxRate: "30",
  });

  const calculateSavings = () => {
    const turnover = parseFloat(calculatorData.turnover) || 0;
    const taxRate = parseFloat(calculatorData.taxRate) || 0;
    const savings = (turnover * taxRate) / 100;
    return savings.toFixed(2);
  };

  const handleCalculatorChange = (e) => {
    const { name, value } = e.target;
    setCalculatorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comprehensive UAE Business & Financial Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            End-to-end services designed specifically for Indian MSMEs looking
            to expand globally and optimize taxes legally
          </p>
        </div>
      </div>

      {/* Services Overview Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5H9.116l3.64-10h2.128l-3.64 10z"/>
                </svg>
              }
              title="Business Setup"
              description="Complete UAE entity formation"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h10V4H7zm2 2h6v2H9V6zm0 4h6v2H9v-2zm0 4h4v2H9v-2z"/>
                </svg>
              }
              title="Tax Planning"
              description="Strategic tax optimization"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              }
              title="Wealth Management"
              description="Global wealth consolidation"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              }
              title="Partner Program"
              description="Join our growth network"
            />
          </div>
        </div>
      </div>

      {/* Tax Savings Calculator Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Calculator */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tax Savings Calculator
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Annual Turnover (₹ Crores)
                  </label>
                  <input
                    type="number"
                    name="turnover"
                    value={calculatorData.turnover}
                    onChange={handleCalculatorChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Current Tax Rate (%)
                  </label>
                  <input
                    type="number"
                    name="taxRate"
                    value={calculatorData.taxRate}
                    onChange={handleCalculatorChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-600 mb-2">
                    Estimated Annual Savings
                  </p>
                  <p className="text-4xl font-bold text-yellow-600">
                    ₹ {calculateSavings()} Cr+
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    With optimized UAE structure
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Financial Planning */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h10V4H7zm2 2h6v2H9V6zm0 4h6v2H9v-2zm0 4h4v2H9v-2z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Financial Planning & Taxation
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our tax optimization strategies are 100% legal and compliant
                with international tax laws. We help you restructure your
                business to minimize tax leakage while maintaining full
                regulatory compliance.
              </p>

              <div className="space-y-3">
                {[
                  "Tax Leakage Analysis",
                  "Corporate Tax Planning (0-9%)",
                  "Cross-Border Tax Optimization",
                  "GST & Indirect Tax Savings",
                  "Transfer Pricing Strategy",
                  "Compliance & Audit Support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UAE Business Establishment Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5H9.116l3.64-10h2.128l-3.64 10z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    UAE Business Establishment
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                From company formation to banking, we handle every aspect of
                your UAE business setup. Choose from mainland, free zone, or
                offshore structures based on your business needs.
              </p>

              <div className="space-y-3">
                {[
                  "Mainland Company Formation",
                  "Free Zone Company Setup",
                  "Offshore Company Structure",
                  "Trade License Processing",
                  "Corporate Bank Account Opening",
                  "Visa & Immigration Support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Package Inclusions */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Package Inclusions
              </h3>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Initial Consultation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Business structure analysis and recommendation
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Complete Documentation
                  </h4>
                  <p className="text-sm text-gray-600">
                    All required paperwork and approvals
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Banking Support
                  </h4>
                  <p className="text-sm text-gray-600">
                    Corporate account opening with major UAE banks
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Ongoing Support
                  </h4>
                  <p className="text-sm text-gray-600">
                    12 months compliance and operational guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Wealth Consolidation Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Global Wealth Consolidation
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Build, protect, and grow your wealth across borders. Our family
                office services help you create a sustainable wealth management
                strategy for generations to come.
              </p>

              <div className="space-y-3">
                {[
                  "Family Office Services",
                  "Global Investment Portfolio",
                  "Succession Planning",
                  "Asset Protection Strategies",
                  "Multi-Currency Management",
                  "Estate Planning",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Benefits with Progress Bars */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Wealth Management Benefits
              </h3>

              <div className="space-y-6">
                <ProgressBar label="Asset Protection" level="High" percent={95} />
                <ProgressBar label="Tax Efficiency" level="Optimal" percent={90} />
                <ProgressBar label="Global Access" level="Excellent" percent={100} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Program Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Join our Global Business Partner Program and help Indian MSMEs
            achieve financial freedom while building your own revenue stream
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Program Benefits Card */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Program Benefits
              </h3>
              <div className="space-y-3">
                {[
                  "Freelancer Partnership Program",
                  "Franchise Opportunities",
                  "Revenue Sharing Model",
                  "Training & Certification",
                  "Lead Generation Support",
                  "Co-branded Marketing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Can Join Card */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Who Can Join?
              </h3>
              <ul className="space-y-3">
                {[
                  "Financial consultants and tax advisors",
                  "Business coaches and mentors",
                  "CA/CS professionals",
                  "Business development professionals",
                  "Entrepreneurs with strong networks",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors flex items-center justify-center">
                Apply for Partnership
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book your financial assessment for just ₹1,499 and discover how
            much you could save
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Book Financial Assessment
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ label, level, percent }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-900">{label}</span>
        <span className="text-sm font-semibold text-yellow-600">{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ServicesPage;
