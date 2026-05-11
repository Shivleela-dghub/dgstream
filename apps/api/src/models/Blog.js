import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
  heading: { type: String },
  body:    { type: String }
});

const blogSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  author:      { type: String, required: true },
  category:    { type: String },
  readTime:    { type: String },
  content:     { type: String, required: true }, 
  sections:    [sectionSchema],                  
  coverImage:  { type: String, default: null },
  status:      { type: String, enum: ['draft', 'published'], default: 'draft' },
  isDeleted:  { type: Boolean, default: false },  
  deletedAt:  { type: Date, default: null },       
  createdAt:   { type: Date, default: Date.now },
  updatedAt:   { type: Date, default: Date.now }
});

export default mongoose.model('Blog', blogSchema);