import React, { useState } from "react";

const FreeToolsPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    turnover: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    // Handle download logic here
    console.log("Downloading blueprint with data:", formData);
    // Reset form
    setFormData({ email: "", turnover: "" });
  };

  const includedItems = [
    "Tax Savings Calculator (Excel template)",
    "UAE Structure Comparison Guide",
    "Documentation Checklist",
    "Cost Estimation Worksheet",
    "Implementation Timeline Template",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Free Business Tools
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive resources to kickstart your UAE business journey
          </p>
        </div>
      </div>

      {/* Main Content - Download Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            {/* Title and Description */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Download UAE Tax Saving Blueprint
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Get our comprehensive guide with tax calculators, checklists,
                and templates to start your UAE business journey
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - What's Included */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  What's Included:
                </h3>
                <div className="space-y-3">
                  {includedItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
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

              {/* Right Column - Form */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Get Free Access:
                </h3>
                <form onSubmit={handleDownload} className="space-y-5">
                  {/* Business Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>

                  {/* Annual Turnover Field */}
                  <div>
                    <label
                      htmlFor="turnover"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Annual Turnover (₹ Crores)
                    </label>
                    <input
                      type="number"
                      id="turnover"
                      name="turnover"
                      placeholder="10"
                      value={formData.turnover}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>

                  {/* Download Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors flex items-center justify-center"
                  >
                    Download Now
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </form>

                {/* Social Proof */}
                <p className="text-sm text-gray-500 text-center mt-6">
                  Over 5,000 MSMEs have downloaded this blueprint
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Get weekly insights on UAE business, tax optimization, and global
          expansion strategies
        </p>

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

        <p className="text-sm text-gray-500">
          Join 10,000+ entrepreneurs receiving our newsletter
        </p>
      </div>
    </div>
  );
};

export default FreeToolsPage;
