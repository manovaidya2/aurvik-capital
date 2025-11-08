import React, { useState, useEffect } from "react";
import { X, ImagePlus } from "lucide-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./tiptap.css";

const BlogForm = ({ onSubmit, onClose, editingBlog }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: null,
    category: "",
    status: "draft",
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editingBlog) {
      setFormData({
        ...editingBlog,
        image: null,
      });
      setPreview(editingBlog.image || null);
    }
  }, [editingBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit(formData); // send plain object
};


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto">
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative my-10 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-bold mb-4">
          {editingBlog ? "Edit Blog" : "Add New Blog"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
              className="w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Blog Details</label>
            <div className="border rounded-md mt-2 min-h-[200px] p-2">
              <CKEditor
                editor={ClassicEditor}
                data={formData.content}
                onChange={(_, editor) => {
                  const data = editor.getData();
                  setFormData((prev) => ({ ...prev, content: data }));
                }}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <ImagePlus size={18} /> Featured Image
            </label>
            <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full sm:w-auto border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded border"
                />
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="technology">Technology</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {editingBlog ? "Update Blog" : "Add Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
