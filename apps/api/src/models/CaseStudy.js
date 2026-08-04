import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema({
  title: String,
  slug: { type: String, required: true, unique: true },
  industry: String,       // e.g. "CornDog Store" — used as a tag
  location: String,       // e.g. "Bengaluru, India"
  resultLabel: String,
  result: String,
  tagline: String,        // e.g. "Premium corndogs, unforgettable flavors..."
  heroImage: String,
  websiteUrl: String,

  about: [String],        // paragraphs, rendered as two-column text

  challenge: {
    heading: String,       // e.g. "How do you build a food brand in the digital age?"
    intro: String,
    points: [String],
  },

  solution: {
    heading: String,       // e.g. "DG Stream changes the Digital Presence of Dirty Dogs"
    intro: String,
    points: [String],
  },

  testimonial: {
    quote: String,
    author: String,
    role: String,
  },

  isPublished: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('CaseStudy', caseStudySchema);