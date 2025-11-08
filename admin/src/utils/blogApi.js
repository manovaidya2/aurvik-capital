import axiosInstance from "../utils/axiosInstance";

// ✅ Get all blogs
export const getBlogs = async () => {
  const res = await axiosInstance.get("/blogs");
  return res.data;
};

// ✅ Add new blog
export const addBlog = async (blogData) => {
  const res = await axiosInstance.post("/blogs", blogData);
  return res.data;
};

// ✅ Update blog
export const updateBlog = async (id, blogData) => {
  const res = await axiosInstance.put(`/blogs/${id}`, blogData);
  return res.data;
};

// ✅ Delete blog
export const deleteBlog = async (id) => {
  const res = await axiosInstance.delete(`/blogs/${id}`);
  return res.data;
};

// ✅ Get single blog
export const getBlogById = async (id) => {
  const res = await axiosInstance.get(`/blogs/${id}`);
  return res.data;
};
