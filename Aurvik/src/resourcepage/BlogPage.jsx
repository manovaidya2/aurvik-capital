import React, { useState } from "react";

const BlogPage = () => {
  const [email, setEmail] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to UAE Business Setup for Indian MSMEs",
      description:
        "Everything you need to know about setting up your business in UAE - from choosing the right structure to opening bank accounts.",
      date: "March 15, 2025",
      readTime: "8 min read",
      
    },
    {
      id: 2,
      title: "Tax Optimization Strategies: Save Crores Legally",
      description:
        "Discover proven strategies that Indian businesses use to reduce tax burden through compliant international structures.",
      date: "March 10, 2025",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Mainland vs Free Zone: Which is Right for Your Business?",
      description:
        "A detailed comparison to help you make the right decision for your UAE business structure based on your specific needs.",
      date: "March 5, 2025",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Banking in UAE: Complete Guide for Indian Entrepreneurs",
      description:
        "Navigate UAE's banking landscape with confidence. Learn about documentation, requirements, and best practices.",
      date: "February 28, 2025",
      readTime: "7 min read",
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
      {/* Knowledge Hub Banner */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Knowledge Hub
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Expert insights, case studies, and free tools to help you make
            informed decisions about your global business expansion
          </p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
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

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* Icon and Read Time */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.description}
        </p>

        {/* Footer: Date and Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">{post.date}</span>
          <a
            href={`#post-${post.id}`}
            className="text-blue-900 font-medium flex items-center hover:text-blue-700 transition-colors"
          >
            Read More
            <svg
              className="w-4 h-4 ml-1"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
