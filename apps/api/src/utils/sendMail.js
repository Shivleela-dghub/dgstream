import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection on startup
transporter.verify((err, success) => {
  if (err) console.error('❌ Mail config error:', err.message);
  else console.log('✅ Mail server ready');
});

// Email 1 — Notify you
const sendLeadNotification = async (lead) => {
  const isHealthcare = lead.industryType === 'healthcare';

  await transporter.sendMail({
    from: `"Lead Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Lead - ${lead.name} (${lead.industryType})`,
    html: `
      <h2>New Lead Received</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <tr><td><b>Name</b></td><td>${lead.name}</td></tr>
        <tr><td><b>Email</b></td><td>${lead.email}</td></tr>
        <tr><td><b>Phone</b></td><td>${lead.phone}</td></tr>
        <tr><td><b>Industry</b></td><td>${lead.industryType}</td></tr>
        ${isHealthcare ? `
          <tr><td><b>Clinic Type</b></td><td>${lead.clinicType || 'N/A'}</td></tr>
          <tr><td><b>Looking For</b></td><td>${lead.lookingFor || 'N/A'}</td></tr>
        ` : `
          <tr><td><b>Business Category</b></td><td>${lead.businessCategory || 'N/A'}</td></tr>
          <tr><td><b>Business Model</b></td><td>${lead.businessModel || 'N/A'}</td></tr>
          <tr><td><b>Where Do You Sell</b></td><td>${lead.whereDoYouSell || 'N/A'}</td></tr>
          <tr><td><b>Current Stage</b></td><td>${lead.currentStage || 'N/A'}</td></tr>
          
        `}
        <tr><td><b>Message</b></td><td>${lead.message || 'N/A'}</td></tr>
        <tr><td><b>Submitted At</b></td><td>${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td></tr>
      </table>
    `,
  });
};

// Email 2 — Auto reply to lead
const sendAutoReply = async (lead) => {
  const isHealthcare = lead.industryType === 'healthcare';
  const header = isHealthcare ? {
    bg: '#16a34a',         // green for healthcare
    title: 'DG Stream',
    subtitle: 'Healthcare Digital Marketing',
    banner: '🏥 Your Healthcare Growth Partner',
  } : {
    bg: '#0ea5e9',         // blue for retail
    title: 'DG Stream',
    subtitle: 'Retail Digital Marketing',
    banner: '🛍️ Your Retail Growth Partner',
  };
  const cap = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  await transporter.sendMail({
    from: `"DG Stream" <${process.env.EMAIL_USER}>`,
    to: lead.email,
    subject: `Thanks for reaching out, ${lead.name}!`,
    html:`
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:32px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; font-family:Arial, sans-serif;">
  
            <!-- Header -->
            <tr>
              <td style="background-color:${header.bg}; padding:28px 24px; text-align:center;">
                <h1 style="color:#ffffff; margin:0; font-size:26px; letter-spacing:1px;">${header.title}</h1>
                <p style="color:#ffffff; margin:6px 0 0; font-size:14px; opacity:0.9;">${header.subtitle}</p>
                <div style="margin-top:12px; background-color:rgba(255,255,255,0.15); padding:8px 16px; border-radius:20px; display:inline-block;">
                  <p style="color:#ffffff; margin:0; font-size:13px;">${header.banner}</p>
                </div>
              </td>
            </tr>
  
            <!-- Body -->
            <tr>
              <td style="padding:32px 24px;">
                <h2 style="color:${header.bg}; margin:0 0 16px;">Hi ${cap(lead.name)},</h2>
  
                ${isHealthcare ? `
                  <p style="color:#475569; line-height:1.6; margin:0 0 24px;">
                  Great choice! You’ve taken the first step towards growing your healthcare practice online with <b>DG Stream</b>.
                  Your enquiry has been received, and our healthcare marketing experts are preparing the right strategy to boost your visibility, attract more patients, and build a strong digital presence
                  </p>
                ` : `
                  <p style="color:#475569; line-height:1.6; margin:0 0 24px;">
                    Thank you for contacting <b>DG Stream</b>. We help <b>retail businesses</b> 
                    scale their brand and reach more customers through targeted digital strategies.
                    Our team will get back to you within <b>24 hours</b>.
                  </p>
                `}
  
                <!-- Summary Table -->
                <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
                  <tr style="background-color:${isHealthcare ? '#f0fdf4' : '#f0f9ff'};">
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'}; font-weight:bold; width:40%;">Name</td>
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'};">${cap(lead.name)}</td>
                  </tr>
                  <tr>
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'}; font-weight:bold;">Phone</td>
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'};">${lead.phone}</td>
                  </tr>
                  <tr style="background-color:${isHealthcare ? '#f0fdf4' : '#f0f9ff'};">
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'}; font-weight:bold;">Industry</td>
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'};">${cap(lead.industryType)}</td>
                  </tr>
  
                  ${isHealthcare ? `
                    <tr>
                      <td style="border:1px solid #bbf7d0; font-weight:bold;">Clinic Type</td>
                      <td style="border:1px solid #bbf7d0;">${cap(lead.clinicType) || 'N/A'}</td>
                    </tr>
                    <tr style="background-color:#f0fdf4;">
                      <td style="border:1px solid #bbf7d0; font-weight:bold;">Looking For</td>
                      <td style="border:1px solid #bbf7d0;">${cap(lead.lookingFor) || 'N/A'}</td>
                    </tr>
                  ` : `
                    <tr>
                      <td style="border:1px solid #bae6fd; font-weight:bold;">Business Category</td>
                      <td style="border:1px solid #bae6fd;">${cap(lead.businessCategory) || 'N/A'}</td>
                    </tr>
                    <tr style="background-color:#f0f9ff;">
                      <td style="border:1px solid #bae6fd; font-weight:bold;">Business Model</td>
                      <td style="border:1px solid #bae6fd;">${cap(lead.businessModel) || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td style="border:1px solid #bae6fd; font-weight:bold;">Where Do You Sell</td>
                      <td style="border:1px solid #bae6fd;">${cap(lead.whereDoYouSell) || 'N/A'}</td>
                    </tr>
                    <tr style="background-color:#f0f9ff;">
                      <td style="border:1px solid #bae6fd; font-weight:bold;">Current Stage</td>
                      <td style="border:1px solid #bae6fd;">${cap(lead.currentStage) || 'N/A'}</td>
                    </tr>
                  `}
  
                  <tr>
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'}; font-weight:bold;">Submitted At</td>
                    <td style="border:1px solid ${isHealthcare ? '#bbf7d0' : '#bae6fd'};">${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                  </tr>
                </table>
  
                <!-- Note -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                  <tr>
                    <td style="background-color:${isHealthcare ? '#f0fdf4' : '#f0f9ff'}; border-left:4px solid ${header.bg}; padding:14px 16px; border-radius:4px;">
                      <p style="color:${header.bg}; margin:0; font-size:14px;">💬 Our team typically responds within 24 hours on business days.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  
            <!-- Footer -->
            <tr>
              <td style="background-color:${header.bg}; padding:20px 24px; text-align:center;">
                <p style="color:#ffffff; font-size:13px; margin:0;">
                  © ${new Date().getFullYear()} DG Stream. All rights reserved.
                </p>
                <p style="margin:8px 0 0;">
                  <a href="https://dgstream.in/" style="color:#ffffff; font-size:13px; text-decoration:underline;">dgstream.in</a>
                </p>
              </td>
            </tr>
  
          </table>
        </td>
      </tr>
    </table>
  `
  });
}

// Export — sends both simultaneously
export const sendLeadEmail = async (lead) => {
  await Promise.all([
    sendLeadNotification(lead),
    sendAutoReply(lead),
  ]);
};