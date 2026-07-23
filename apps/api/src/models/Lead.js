import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: false, trim: true },
 services: {
    type: [String],
    required: [true, 'Please select at least 1 service'],
    validate: [arr => arr.length > 0, 'Please select at least 1 service'] // this is the key
  },
   budget:{
    type:String,
    required:true,
     enum: ['$500 - $1,000', '$1,000 - $2,000', '$2,000+']
   },
   about_project:{
    type:String,
    required:false,
   },
  status: { type: String, default: 'New', enum: ['New', 'Contacted', 'Closed'] },
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;
