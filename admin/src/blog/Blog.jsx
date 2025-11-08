import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import BlogStats from "./BlogStats";
import BlogTable from "./BlogTable";
import BlogForm from "./BlogForm";
import BlogPreview from "./BlogPreview";
import axiosInstance from "../utils/axiosInstance"; // 👈 import axios instance
import { toast, Toaster } from "react-hot-toast";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [previewBlog, setPreviewBlog] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/blogs");
      const data = Array.isArray(res.data)
        ? res.data
        : res.data.blogs || res.data.data || [];
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add or Update blog
  const handleAddOrUpdate = async (data) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });

    if (editingBlog) {
      await axiosInstance.put(`/blogs/${editingBlog._id}`, formData);
      toast.success("Blog updated successfully!");
    } else {
      await axiosInstance.post("/blogs", formData);
      toast.success("Blog added successfully!");
    }

    setShowForm(false);
    setEditingBlog(null);
    fetchBlogs();
  } catch (error) {
    console.error("Error saving blog:", error);
    toast.error("Error saving blog");
  }
};

  // ✅ Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axiosInstance.delete(`/blogs/${id}`);
      toast.success("Blog deleted successfully!");
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  // ✅ Sorting toggle
  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  // ✅ Filtering + Sorting
  const filteredBlogs =
    filterStatus === "all"
      ? blogs
      : blogs.filter((b) => b.status === filterStatus);

  const sortedBlogs = [...(filteredBlogs || [])].sort((a, b) => {
    const valA = a[sortBy] || "";
    const valB = b[sortBy] || "";
    return sortOrder === "asc"
      ? valA.toString().localeCompare(valB.toString())
      : valB.toString().localeCompare(valA.toString());
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Toaster position="top-right" />

      {/* ===== Header ===== */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">📰 Blog Dashboard</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Add Blog
        </button>
      </div>

      {/* ===== Stats ===== */}
      <BlogStats
        blogs={blogs}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {/* ===== Table or Loader ===== */}
      {loading ? (
        <div className="text-center py-12 text-gray-500 text-lg">
          Loading blogs...
        </div>
      ) : (
        <BlogTable
          blogs={sortedBlogs}
          sortBy={sortBy}
          sortOrder={sortOrder}
          toggleSort={toggleSort}
          handleDelete={handleDelete}
          handleEdit={(blog) => {
            setEditingBlog(blog);
            setShowForm(true);
          }}
          setPreviewBlog={setPreviewBlog}
        />
      )}

      {/* ===== Add/Edit Form ===== */}
      {showForm && (
        <BlogForm
          onSubmit={handleAddOrUpdate}
          onClose={() => {
            setShowForm(false);
            setEditingBlog(null);
          }}
          editingBlog={editingBlog}
        />
      )}

      {/* ===== Preview Modal ===== */}
      {previewBlog && (
        <BlogPreview blog={previewBlog} onClose={() => setPreviewBlog(null)} />
      )}
    </div>
  );
};

export default Blog;
