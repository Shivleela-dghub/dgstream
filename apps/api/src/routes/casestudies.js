import express from 'express';
import CaseStudy from '../models/CaseStudy.js';
const router = express.Router();

// GET /casestudies/all
router.get('/all', async (req, res) => {
  const studies = await CaseStudy.find({ isPublished: true }).sort({ createdAt: -1 });
  res.json(studies);
});

// POST /casestudies
router.post('/', async (req, res) => {
  try {
    const {
      title, industry, location, resultLabel, result, tagline, heroImage, websiteUrl,
      about, challenge, solution, testimonial,
    } = req.body;
    const slug = title.toLowerCase().replace(/ /g, '-');
    const study = await CaseStudy.create({
      title, slug, industry, location, resultLabel, result, tagline, heroImage, websiteUrl,
      about, challenge, solution, testimonial,
    });
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT — update a case study
router.put('/:id', async (req, res) => {
  try {
    const study = await CaseStudy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!study) return res.status(404).json({ error: 'Case study not found' });
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE — remove a case study
router.delete('/:id', async (req, res) => {
  try {
    const study = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!study) return res.status(404).json({ error: 'Case study not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single case study by Mongo _id (for admin editing)
router.get('/id/:id', async (req, res) => {
  try {
    const study = await CaseStudy.findById(req.params.id);
    if (!study) return res.status(404).json({ error: 'Case study not found' });
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single case study by slug
router.get('/:slug', async (req, res) => {
  try {
    const study = await CaseStudy.findOne({ slug: req.params.slug });
    if (!study) {
      return res.status(404).json({ error: 'Case study not found' });
    }
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;