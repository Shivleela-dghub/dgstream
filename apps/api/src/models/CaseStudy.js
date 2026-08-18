import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },

  // Relative path served statically, e.g. "/uploads/case-studies/169999-advenzo.pdf"
  pdfFile: { type: String, required: true },
  // Original uploaded file name, e.g. "DG_-_Advenzo_Case_Study.pdf"
  pdfFileName: { type: String, required: true },
  // Cloudinary's public_id for this file — required to unlink/delete it from Cloudinary on removal or replacement
  cloudinaryPublicId: { type: String },

  isPublished: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('CaseStudy', caseStudySchema);