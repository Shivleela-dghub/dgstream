import Lead from '../models/Lead.js';
import { sendLeadEmail } from '../utils/sendMail.js';
import validator from 'validator'

export const submitLead = async(req,res)=>{
  console.log(req.body);
  const {name, email,phone,company,services,budget,about_project,city} = req.body;
  if (!validator.isEmail(email)) {
  return res.status(400).json({ success: false, message: 'Invalid email format' });
}

 const phoneRegex = /^[6-9]\d{9}$/;

// 1. Clean the input first - remove spaces, +, -
const cleanPhone = phone ? phone.replace(/\D/g, "") : "";

// 2. Only validate if user actually entered something
if (cleanPhone) {
  if (!phoneRegex.test(cleanPhone)) {
    return res.status(400).json({ success: false, message: 'Invalid phone number. Must be 10 digits starting with 6-9' });
  }
}

// 3. Save the cleaned version to DB
const phoneToSave = cleanPhone; // save null if empty
  if(!name || !email || !company || !services || !budget || !city) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }
  try {
    const lead = await Lead.create({ 
      name, 
      email, 
      phone:phoneToSave, 
      company,
      city, 
      services,
      budget,
      about_project
    });
    try {
      await sendLeadEmail(lead);
      console.log('✅ Emails sent successfully');
    } catch (emailErr) {
      console.error('❌ Email error:', JSON.stringify(emailErr, null, 2)); // ← full object
      console.error('❌ Email error string:', String(emailErr));
      console.error('❌ Email error keys:', Object.keys(emailErr));
    }
    res.status(200).json({ success: true, data: lead });
  } catch (err) {
    console.error('Lead submit error:', err);
    res.status(500).json({ success: false, error: err.message }); // ← shows exact mongoose error
  }
}

