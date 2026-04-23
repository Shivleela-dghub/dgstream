// routes/lead.js
import express from 'express';
import { submitLead } from '../controllers/leadController.js';

const router = express.Router();

router.post('/', (req, res, next) => {
  console.log('✅ Lead route hit');
  next();
}, submitLead);

export default router;