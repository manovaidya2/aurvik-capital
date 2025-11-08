import React from "react";
import { X } from "lucide-react";
import {
  formatDate,
  getCategoryColor,
  getStatusColor,
} from "../utils/blogHelpers";

const BlogPreview = ({ blog, onClose }) => {
  if (!blog) return null;

  // ✅ Helper to fix image path
  const getImageUrl = (path) => {
    if (!path) return "/no-image.png"; // fallback image in /public
    if (path.startsWith("http")) return path;
    return `http://localhost:5000${path}`; // backend URL
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      {/* Outer container with scrollable modal */}
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden relative max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 z-10"
        >
          <X size={22} />
        </button>

        {/* ✅ Scrollable content inside modal */}
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {/* Image */}
          <img
            src={getImageUrl(blog.image)}
            alt={blog.title}
            onError={(e) => (e.target.src = "/no-image.png")}
            className="w-full h-56 object-cover border-b"
          />

          <div className="p-6">
            {/* Category & Status */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                  blog.category
                )}`}
              >
                {blog.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                  blog.status
                )}`}
              >
                {blog.status}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {blog.title}
            </h2>

            {/* Short Description */}
            <p className="text-gray-700 mb-4">{blog.description}</p>

            {/* Full Content */}
            {blog.content && (
              <div
                className="prose max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            )}

            {/* Date */}
            <p className="text-sm text-gray-500 mt-4">
              Published on: {formatDate(blog.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
