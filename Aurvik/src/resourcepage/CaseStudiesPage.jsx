import React, { useState } from "react";

const CaseStudiesPage = () => {
  const [email, setEmail] = useState("");

  const caseStudies = [
    {
      id: 1,
      icon: "📖",
      title: "₹2.4 Cr Annual Savings: Manufacturing MSME Success Story",
      subtitle: "Industrial Equipment Manufacturer",
      challenge: "High tax burden limiting reinvestment capacity",
      solution: "UAE Free Zone structure with optimized transfer pricing",
      result: "Saved ₹2.4 Cr annually, expanded to 3 new markets",
      downloadLink: "#",
    },
    {
      id: 2,
      icon: "📖",
      title: "From Local to Global: IT Services Firm Transformation",
      subtitle: "Software Development Company",
      challenge: "Limited global presence and high GST impact",
      solution: "UAE mainland company with India subsidiary model",
      result: "₹1.8 Cr tax savings, 5x revenue growth in 2 years",
      downloadLink: "#",
    },
    {
      id: 3,
      icon: "📖",
      title: "Export Business Optimization Through UAE Structure",
      subtitle: "Textile Export Business",
      challenge: "GST and customs challenges affecting margins",
      solution: "Offshore UAE entity for international trade",
      result: "₹3.2 Cr savings, simplified compliance, 0% GST",
      downloadLink: "#",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Real results from Indian MSMEs who transformed their business with
            UAE structures
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Get weekly insights on UAE business, tax optimization, and global
            expansion strategies
          </p>

          {/* Email Subscription Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-900 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Social Proof */}
          <p className="text-sm text-gray-500">
            Join 10,000+ entrepreneurs receiving our newsletter
          </p>
        </div>
      </div>
    </div>
  );
};

const CaseStudyCard = ({ study }) => {
  const handleDownload = () => {
    // Add your download logic here
    console.log("Downloading case study:", study.title);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-6 md:p-8">
        {/* Header with Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
            {study.icon}
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {study.title}
            </h2>
            <p className="text-sm text-gray-600">{study.subtitle}</p>
          </div>
        </div>

        {/* Three Column Layout: Challenge, Solution, Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Challenge Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Challenge
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Solution
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Result Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Result
            </h3>
            <p className="text-yellow-600 font-medium text-sm leading-relaxed">
              {study.result}
            </p>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Full Case Study
        </button>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
