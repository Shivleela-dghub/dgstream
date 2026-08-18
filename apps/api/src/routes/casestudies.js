import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import CaseStudy from '../models/CaseStudy.js';
import upload from '../middleware/case-study-upload.js';

const router = express.Router();

function makeSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// GET /casestudies/all — public, published only
router.get('/all', async (req, res) => {
  try {
    const studies = await CaseStudy.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json(studies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /casestudies/admin/all — admin, published AND drafts
router.get('/admin/all', async (req, res) => {
  try {
    const studies = await CaseStudy.find().sort({ createdAt: -1 });
    res.json(studies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /casestudies — create with title + PDF upload
router.post('/', upload.single('pdfFile'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'PDF file is required' });
    }

    let slug = makeSlug(title);
    const existing = await CaseStudy.findOne({ slug });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const study = await CaseStudy.create({
      title: title.trim(),
      slug,
      pdfFile: req.file.path,
      pdfFileName: req.file.originalname,
      cloudinaryPublicId: req.file.filename, // multer-storage-cloudinary puts the public_id here — needed to unlink later
      isPublished: req.body.isPublished === 'true' || req.body.isPublished === true,
    });

    res.json(study);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /casestudies/:id/publish — quick publish/unpublish toggle
router.patch('/:id/publish', async (req, res) => {
  try {
    const study = await CaseStudy.findByIdAndUpdate(
      req.params.id,
      { isPublished: req.body.isPublished },
      { new: true }
    );
    if (!study) return res.status(404).json({ error: 'Case study not found' });
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /casestudies/:id — update title and/or replace the PDF
router.put('/:id', upload.single('pdfFile'), async (req, res) => {
  try {
    const study = await CaseStudy.findById(req.params.id);
    if (!study) return res.status(404).json({ error: 'Case study not found' });

    if (req.body.title && req.body.title.trim()) {
      study.title = req.body.title.trim();
    }
    if (req.body.isPublished !== undefined) {
      study.isPublished = req.body.isPublished === 'true' || req.body.isPublished === true;
    }

    // If a new PDF was uploaded, unlink the OLD one from Cloudinary, then swap in the new one
    if (req.file) {
      if (study.cloudinaryPublicId) {
        try {
          await cloudinary.uploader.destroy(study.cloudinaryPublicId, { resource_type: 'image' });
        } catch (cloudErr) {
          console.error('Cloudinary delete (old file) failed:', cloudErr.message);
        }
      }
      study.pdfFile = req.file.path;
      study.pdfFileName = req.file.originalname;
      study.cloudinaryPublicId = req.file.filename;
    }

    await study.save();
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /casestudies/:id — remove case study and unlink its PDF from Cloudinary
router.delete('/:id', async (req, res) => {
  try {
    const study = await CaseStudy.findById(req.params.id);
    if (!study) return res.status(404).json({ error: 'Case study not found' });

    if (study.cloudinaryPublicId) {
      try {
        await cloudinary.uploader.destroy(study.cloudinaryPublicId, { resource_type: 'image' });
      } catch (cloudErr) {
        // Don't block deletion of the DB record if Cloudinary cleanup fails —
        // log it so you can clean up the orphaned file manually if needed.
        console.error('Cloudinary delete failed:', cloudErr.message);
      }
    }

    await CaseStudy.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /casestudies/id/:id — for admin editing
router.get('/id/:id', async (req, res) => {
  try {
    const study = await CaseStudy.findById(req.params.id);
    if (!study) return res.status(404).json({ error: 'Case study not found' });
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /casestudies/:slug — public detail view (published only)
router.get('/:slug', async (req, res) => {
  try {
    const study = await CaseStudy.findOne({ slug: req.params.slug, isPublished: true });
    if (!study) {
      return res.status(404).json({ error: 'Case study not found' });
    }
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;