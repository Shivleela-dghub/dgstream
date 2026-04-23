import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  clinicType: { 
    type: String, 
    enum: ['Dental Clinic', 'IVF Center', 'Hospital', 'Diagnostic Center','Individual Practitioner','Multi-Specialty Clinic','Other'],
    required: function() { return this.industryType === 'healthcare'; }
  },
  lookingFor: { type: String,
    enum:["Patient Acquisition", "SEO & Local Search", "Social Media Management", "Website Development"],
    required: function() { return this.industryType === 'healthcare'; }
   },
   industryType:{
     type:String,
     required:true
   },
   message:{
    type:String,
    required:false
   },
   // Retail specific fields
businessCategory: {
  type: String,
  required: function() { return this.industryType === 'retail'; }
},
businessModel: {
  type: String,
  required: function() { return this.industryType === 'retail'; }
},
whereDoYouSell: {
  type: String,
  required: function() { return this.industryType === 'retail'; }
},
currentStage: {
  type: String,
  required: function() { return this.industryType === 'retail'; }
},
  status: { type: String, default: 'New', enum: ['New', 'Contacted', 'Closed'] },
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;