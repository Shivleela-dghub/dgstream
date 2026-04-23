import Lead from '../models/Lead.js';
import { sendLeadEmail } from '../utils/sendMail.js';

export const submitLead = async (req, res) => {
  
  const { name, email, phone, industryType, message, ...rest } = req.body;
  // Validate common fields
  if (!name || !email || !phone || !industryType) {
    return res.status(400).json({ success: false, error: 'All fields required' });
  }

  // Validate conditionally
  if (industryType === 'healthcare') {
    if (!rest.clinicType || !rest.lookingFor) {
      return res.status(400).json({ success: false, error: 'All healthcare fields required' });
    }
  } else if (industryType === 'retail') {
    if (!rest.businessCategory || !rest.businessModel || !rest.whereDoYouSell || !rest.currentStage) {
      return res.status(400).json({ success: false, error: 'All retail fields required' });
    }
  }

  try {
    const lead = await Lead.create({ 
      name, 
      email, 
      phone, 
      industryType, 
      message,
      ...rest  // spreads clinic_type, service OR businessCategory, businessModel, etc.
    });
    try {
      await sendLeadEmail(lead);
      console.log('✅ Emails sent successfully');
    } catch (emailErr) {
      console.error('❌ Email error:', JSON.stringify(emailErr, null, 2)); // ← full object
  console.error('❌ Email error string:', String(emailErr));
  console.error('❌ Email error keys:', Object.keys(emailErr));
    }
    res.json({ success: true, data: lead });

  } catch (err) {
    console.error('Lead submit error:', err);
    res.status(500).json({ success: false, error: err.message }); // ← shows exact mongoose error
  }
};