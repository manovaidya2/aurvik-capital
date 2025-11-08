import React from "react";

const BlogStats = ({ blogs, filterStatus, setFilterStatus }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
        <p className="text-gray-600 text-sm font-semibold">Total Blogs</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{blogs.length}</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
        <p className="text-gray-600 text-sm font-semibold">Published</p>
        <p className="text-3xl font-bold text-green-600 mt-1">
          {blogs.filter((b) => b.status === "published").length}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
        <p className="text-gray-600 text-sm font-semibold">Drafts</p>
        <p className="text-3xl font-bold text-yellow-600 mt-1">
          {blogs.filter((b) => b.status === "draft").length}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <p className="text-gray-600 text-sm font-semibold mb-2">
          Filter by Status
        </p>
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
  );
};

export default BlogStats;
