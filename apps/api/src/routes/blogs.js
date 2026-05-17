import express          from 'express';
import Blog             from '../models/Blog.js';
import { requireAuth }  from '../middleware/auth.js';
import upload           from '../utils/upload.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

const router = express.Router();

// PUBLIC — all published + not deletedblogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({status: 'published', isDeleted: { $ne: true } }).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ADMIN — all blogs
router.get('/all', requireAuth, async (req, res) => {
  try {
    const blogs = await Blog.find({ isDeleted: { $ne: true } }).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUBLIC — single blog
router.get('/:id', async (req, res) => {
  try {
	console.log("Looking for id:", req.params.id);
    //const blog = await Blog.findById(_id:req.params.id,isDeleted: false);
    const blog = await Blog.findOne({ 
    _id: req.params.id, 
    isDeleted: { $ne: true } 
});
console.log("Found:", blog);
    if (!blog) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ADMIN — create blog
router.post('/', requireAuth, upload.single('coverImage'), async (req, res) => {
  try {
    console.log('body:', req.body);
    console.log('file:', req.file ? req.file.originalname : 'no file');

    const { title, author, category, readTime, status, content, sections } = req.body;

    // upload to cloudinary if image provided
    let coverImage = null;
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      coverImage   = result.secure_url;
      console.log('coverImage URL:', coverImage);
    }

    let parsedSections = [];
    try {
      parsedSections = sections ? JSON.parse(sections) : [];
    } catch (e) {
      return res.status(400).json({ message: 'Invalid sections format' });
    }

    const blog = await Blog.create({
      title, author, category, readTime, content,
      status:     status || 'draft',
      sections:   parsedSections,
      coverImage
    });

    res.status(201).json({ success: true, blog });
  } catch (err) {
    console.log('Create blog error:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// ADMIN — update blog
router.put('/:id', requireAuth, upload.single('coverImage'), async (req, res) => {
  try {
    const { title, author, category, readTime, status, content, sections } = req.body;

    const update = {
      title, author, category, readTime, content, status,
      sections:  sections ? JSON.parse(sections) : [],
      updatedAt: Date.now()
    };

    if (req.file) {
      const result    = await uploadToCloudinary(req.file.buffer);
      update.coverImage = result.secure_url;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, update, { returnDocument: 'after' });
    res.json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ADMIN — delete blog
router.delete('/:id', requireAuth, async (req, res) => {
  try {
  	await Blog.findByIdAndUpdate(req.params.id, { 
  		isDeleted: true, 
  		deletedAt: Date.now() 
	});
    res.json({ success: true, message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
