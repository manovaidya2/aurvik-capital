import React from "react";
import { Eye, Edit2, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { getCategoryColor, getStatusColor, formatDate } from "../utils/blogHelpers";

const BlogTable = ({
  blogs,
  sortBy,
  sortOrder,
  toggleSort,
  handleDelete,
  handleEdit,
  setPreviewBlog,
}) => {
  if (blogs.length === 0)
    return (
      <div className="p-12 text-center text-gray-600 text-lg">
        📝 No blogs yet. Create your first blog post!
      </div>
    );

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-900">
          Blog Posts ({blogs.length})
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                <button onClick={() => toggleSort("title")} className="flex items-center gap-1 font-semibold text-gray-700">
                  Title
                  {sortBy === "title" &&
                    (sortOrder === "asc" ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    ))}
                </button>
              </th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
  <div className="flex items-center gap-3">
    <img
      src={blog.image ? `http://localhost:5000${blog.image}` : "/no-image.png"}
      alt={blog.title}
      onError={(e) => (e.target.src = "/no-image.png")}
      className="w-12 h-12 rounded object-cover"
    />
    <div>
      <p className="font-medium text-gray-900 line-clamp-1">{blog.title}</p>
      <p className="text-sm text-gray-600 line-clamp-1">{blog.description}</p>
    </div>
  </div>
</td>

                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(blog.status)}`}>
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700 text-sm">
                  {formatDate(blog.createdAt)}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setPreviewBlog(blog)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleEdit(blog)}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;
