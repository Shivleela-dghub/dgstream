import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  industry: String,
  resultLabel: String, // "LIFT IN ONLINE CONVERSION"
  result: String,      // "+38%"
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('CaseStudy', caseStudySchema);