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
    const { title, industry, resultLabel, result } = req.body;
    const slug = title.toLowerCase().replace(/ /g, '-');
    const study = await CaseStudy.create({ title, slug, industry, resultLabel, result });
    res.json(study);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;