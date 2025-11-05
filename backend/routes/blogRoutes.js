import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Get All Blogs
router.get('/', async (req, res, next) => {
  try {
    console.log('📖 Fetching blogs...');
    
    // Check if Blog model is working
    console.log('📊 Blog model:', Blog ? '✅' : '❌');
    
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${blogs.length} blogs`);
    
    res.json(blogs);
  } catch (error) {
    console.error('❌ Error in GET /blogs:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    next(error);
  }
});

// Other routes...
router.get('/:id', async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    console.error('❌ Error in GET /:id:', error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, description, content, category, author, image, status } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and Description required' });
    }

    const blog = new Blog({
      title,
      description,
      content,
      category,
      author,
      image,
      status
    });

    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    console.error('❌ Error in POST /blogs:', error);
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    console.error('❌ Error in PUT /:id:', error);
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('❌ Error in DELETE /:id:', error);
    next(error);
  }
});

export default router;
