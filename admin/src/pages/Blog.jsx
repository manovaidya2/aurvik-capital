import { useState, useEffect } from "react";
import { Plus, Eye, Edit2, Trash2, ChevronUp, ChevronDown, X } from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api";

const Blog = () => {

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "technology",
    author: "Admin",
    image: null,
    imagePreview: null,
    status: "draft",
  });

  const [blogs, setBlogs] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterStatus, setFilterStatus] = useState("all");
  const [previewBlog, setPreviewBlog] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch Blogs from Backend
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/blogs`);
      // console.log("api hit");
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      alert(" Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);
      
      const blogData = {
        title: formData.title,
        description: formData.description,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        image: formData.imagePreview || "https://via.placeholder.com/400x300?text=Blog",
        status: formData.status
      };

      let response;
      if (editingId) {
        // Update Blog
        response = await fetch(`${API_BASE_URL}/blogs/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogData)
        });
      } else {
        // Create Blog
        response = await fetch(`${API_BASE_URL}/blogs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogData)
        });
      }

      if (!response.ok) throw new Error("Failed to save blog");

      alert(editingId ? "✅ Blog updated successfully!" : "✅ Blog created successfully!");
      
      // Reset Form
      setFormData({
        title: "",
        description: "",
        content: "",
        category: "technology",
        author: "Admin",
        image: null,
        imagePreview: null,
        status: "draft",
      });
      setShowForm(false);
      setEditingId(null);
      
      // Refresh Blogs
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("❌ Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) throw new Error("Failed to delete blog");
      
      alert("✅ Blog deleted successfully!");
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("❌ Failed to delete blog");
    } finally {
      setLoading(false);
    }
  };

  const handleEditBlog = (blog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      category: blog.category,
      author: blog.author,
      image: null,
      imagePreview: blog.image,
      status: blog.status,
    });
    setEditingId(blog._id);
    setShowForm(true);
    setPreviewBlog(null);
  };

  const filteredBlogs = blogs
    .filter(blog => filterStatus === "all" || blog.status === filterStatus)
    .sort((a, b) => {
      let aVal, bVal;
      
      if (sortBy === "title") {
        aVal = a.title.toLowerCase();
        bVal = b.title.toLowerCase();
      } else if (sortBy === "date") {
        aVal = new Date(a.createdAt);
        bVal = new Date(b.createdAt);
      } else if (sortBy === "category") {
        aVal = a.category;
        bVal = b.category;
      }

      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      technology: "bg-blue-100 text-blue-800",
      development: "bg-purple-100 text-purple-800",
      design: "bg-pink-100 text-pink-800",
      business: "bg-green-100 text-green-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status) => {
    return status === "published"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-1">Create, manage and publish your blog posts</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setShowForm(true);
          }}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg transition-all disabled:opacity-50"
        >
          <Plus className="w-5 h-5" />
          Add New Blog
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm font-semibold">Total Blogs</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{blogs.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <p className="text-gray-600 text-sm font-semibold">Published</p>
          <p className="text-3xl font-bold text-green-600 mt-1">{blogs.filter(b => b.status === "published").length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <p className="text-gray-600 text-sm font-semibold">Drafts</p>
          <p className="text-3xl font-bold text-yellow-600 mt-1">{blogs.filter(b => b.status === "draft").length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold mb-2">Filter by Status</p>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Blogs</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
          </select>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <p className="text-blue-700 font-semibold">⏳ Loading...</p>
        </div>
      )}

      {/* Blogs Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-900">
            Blog Posts ({filteredBlogs.length})
          </h3>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-600 text-lg">📝 No blogs yet. Create your first blog post!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => toggleSort("title")}
                      className="flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900"
                    >
                      Title
                      {sortBy === "title" && (
                        sortOrder === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => toggleSort("category")}
                      className="flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900"
                    >
                      Category
                      {sortBy === "category" && (
                        sortOrder === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => toggleSort("date")}
                      className="flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900"
                    >
                      Date
                      {sortBy === "date" && (
                        sortOrder === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-center font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog, index) => (
                  <tr key={blog._id} className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={blog.image} alt={blog.title} className="w-12 h-12 rounded object-cover" />
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">{blog.title}</p>
                          <p className="text-sm text-gray-600 line-clamp-1">{blog.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(blog.category)}`}>
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(blog.status)}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{formatDate(blog.createdAt)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setPreviewBlog(blog)}
                          disabled={loading}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                          title="View"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleEditBlog(blog)}
                          disabled={loading}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Edit"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog._id)}
                          disabled={loading}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Blog Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingId ? "Edit Blog Post" : "Create New Blog Post"}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Blog Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter an engaging blog title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Short Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Write a brief description of your blog"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Write your full blog content here"
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                ></textarea>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Featured Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors bg-gray-50 hover:bg-blue-50">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                    id="imageInput"
                  />
                  <label htmlFor="imageInput" className="cursor-pointer block">
                    {formData.imagePreview ? (
                      <div className="space-y-2">
                        <img src={formData.imagePreview} alt="Preview" className="h-32 w-32 mx-auto object-cover rounded" />
                        <p className="text-sm text-blue-600 font-semibold">Click to change image</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-4xl">📸</div>
                        <p className="text-gray-600 font-semibold">Click to upload image</p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Category & Status */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="technology">Technology</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-4 border-t">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? "Saving..." : editingId ? "Update Blog" : "Publish Blog"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewBlog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 line-clamp-1">{previewBlog.title}</h3>
              <button
                onClick={() => setPreviewBlog(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Featured Image */}
              {previewBlog.image && (
                <img 
                  src={previewBlog.image} 
                  alt={previewBlog.title} 
                  className="w-full rounded-lg h-80 object-cover border-2 border-gray-200" 
                />
              )}

              {/* Blog Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm pb-4 border-b">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Category:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(previewBlog.category)}`}>
                    {previewBlog.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(previewBlog.status)}`}>
                    {previewBlog.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Author:</span>
                  <span className="text-gray-600">{previewBlog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Date:</span>
                  <span className="text-gray-600">📅 {formatDate(previewBlog.createdAt)}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Overview</h4>
                <p className="text-gray-700 leading-relaxed text-base">{previewBlog.description}</p>
              </div>

              {/* Full Content */}
              {previewBlog.content && (
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Full Content</h4>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
                      {previewBlog.content}
                    </p>
                  </div>
                </div>
              )}

              {/* Footer with Buttons */}
              <div className="flex gap-4 pt-4 border-t">
                <button
                  onClick={() => setPreviewBlog(null)}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Close Preview
                </button>
                <button
                  onClick={() => {
                    handleEditBlog(previewBlog);
                    setPreviewBlog(null);
                  }}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Edit Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
