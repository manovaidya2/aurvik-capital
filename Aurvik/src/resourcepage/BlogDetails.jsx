// src/pages/BlogDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/blogs/${id}`);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );

  if (!blog)
    return (
      <div className="h-screen flex flex-col items-center justify-center text-gray-600">
        <p>Blog not found</p>
        <button
          onClick={() => navigate("/blogs")}
          className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-md"
        >
          Back to Blogs
        </button>
      </div>
    );

  const imageUrl = blog.image?.startsWith("http")
    ? blog.image
    : `http://localhost:5000${blog.image}`;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {blog.image && (
          <img
            src={imageUrl}
            alt={blog.title}
            className="w-full h-96 object-cover"
            onError={(e) => (e.target.src = "/no-image.png")}
          />
        )}
        <div className="p-8">
          <button
            onClick={() => navigate("/blogs")}
            className="text-blue-900 font-medium mb-4 hover:underline"
          >
            ← Back to Blogs
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-600 mb-6">{blog.description}</p>

          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <p className="text-sm text-gray-500 mt-6">
            Published on:{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
