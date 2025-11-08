// src/pages/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";



const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Fetch blogs from backend
useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosInstance.get("/blogs"); // clean call
        if (data.success) setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-gray-600">
        Loading blogs...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Knowledge Hub
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Expert insights, case studies, and tools to help you make better business decisions.
          </p>
        </div>
      </div>

      {/* Blog List */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {blogs.length === 0 ? (
            <div className="text-center text-gray-600 text-lg">
              📝 No blogs available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  blog={blog}
                  onClick={() => navigate(`/blog/${blog._id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Get weekly insights on business and expansion strategies.
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
              className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
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
    </div>
  );
};

const BlogCard = ({ blog, onClick }) => {
  const imageUrl = blog.image?.startsWith("http")
    ? blog.image
    : `http://localhost:5000${blog.image}`;

  const readTime = blog.readTime || "8 min read"; // ✅ default static read time

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
    >
      {/* Optional Image */}
      {/* {blog.image && (
        <img
          src={imageUrl}
          alt={blog.title}
          className="w-full h-48 object-cover"
          onError={(e) => (e.target.src = "/no-image.png")}
        />
      )} */}

      <div className="p-6">
        {/* ✅ Icon and Read Time Row */}
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
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
          <span className="text-blue-900 font-medium hover:text-blue-700 transition">
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
