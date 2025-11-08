// controllers/blogController.js
import Blog from "../models/Blog.js";

// 🟢 Create Blog
export const createBlog = async (req, res) => {
  try {
    const { title, description, content, category, status } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const blog = await Blog.create({
      title,
      description,
      content,
      category,
      status,
      image,
    });

    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟡 Get All Blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟠 Get Single Blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔵 Update Blog
export const updateBlog = async (req, res) => {
  try {
    const { title, description, content, category, status } = req.body;
    const updateData = { title, description, content, category, status };

    if (req.file) updateData.image = `/uploads/${req.file.filename}`;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({ success: true, blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔴 Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
