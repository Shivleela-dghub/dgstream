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

  await transporter.sendMail({
    from: `"Lead Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Lead - ${lead.name} (${lead.services})`,
    html: `
      <h2>New Lead Received</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <tr><td><b>Name</b></td><td>${lead.name}</td></tr>
        <tr><td><b>Email</b></td><td>${lead.email}</td></tr>
        <tr><td><b>Phone</b></td><td>${lead.phone}</td></tr>
        <tr><td><b>Industry</b></td><td>${lead.services}</td></tr>
        <tr><td><b>Message</b></td><td>${lead.about_project || 'N/A'}</td></tr>
        <tr><td><b>Submitted At</b></td><td>${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td></tr>
      </table>
    `,
  });
};

// Email 2 — Auto reply to lead
const sendAutoReply = async (lead) => {
  
  const header = {
    bg: '#D9F99D',         
    title: 'DG Stream',
    subtitle: 'AI Visual Growth Studio',
    banner: 'Your Business Growth Partner',
  } 
const cap = (str) => {
  const s = String(str || '').trim(); // 1. handle null/undefined 2. convert to string 3. remove spaces
  return s? s.charAt(0).toUpperCase() + s.slice(1) : '';
}
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
                <h1 style="color:#0A0A0F; margin:0; font-size:26px; letter-spacing:1px;">${header.title}</h1>
                <p style="color:#0A0A0F; margin:6px 0 0; font-size:14px; opacity:0.9;">${header.subtitle}</p>
                <div style="margin-top:12px; background-color:#BEF264; padding:8px 16px; border-radius:20px; display:inline-block;">
                  <p style="color:#0A0A0F; margin:0; font-size:13px;">${header.banner}</p>
                </div>
              </td>
            </tr>
  
            <!-- Body -->
            <tr>
              <td style="padding:32px 24px;">
                <h2 style="color:#8AB300; margin:0 0 16px;">Hi ${cap(lead.name)},</h2>
  
                ${`
                    <p style="color:#0A0A0F; line-height:1.6; margin:0 0 24px;">
                    Thank you for contacting <b>DG Stream</b>. We help <b>businesses</b> 
                    scale their brand and reach more customers through targeted digital strategies.
                    Our team will get back to you within <b>24 hours</b>.
                  </p>
                `}
  
                <!-- Summary Table -->
                <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
                  <tr style="background-color:${'#D9F99D'};">
                    <td style="border:1px solid ${'#8AB300'}; font-weight:bold; width:40%;">Name</td>
                    <td style="border:1px solid ${'#8AB300'};">${cap(lead.name)}</td>
                  </tr>
                  <tr>
                    <td style="border:1px solid ${'#8AB300'}; font-weight:bold;">Phone</td>
                    <td style="border:1px solid ${'#8AB300'};">${lead.phone}</td>
                  </tr>
                  <tr style="background-color:${'#D9F99D'};">
                    <td style="border:1px solid ${'#8AB300'}; font-weight:bold;">Services</td>
                    <td style="border:1px solid ${'#8AB300'};">${cap(lead.services)}</td>
                  </tr>
  
                  <tr>
                    <td style="border:1px solid ${'#0A0A0F'}; font-weight:bold;">Submitted At</td>
                    <td style="border:1px solid ${'#0A0A0F'};">${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                  </tr>
                </table>
  
                <!-- Note -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                  <tr>
                    <td style="background-color:${'#D9F99D'}; border-left:4px solid ${header.bg}; padding:14px 16px; border-radius:4px;">
                      <p style="color:#0A0A0F; margin:0; font-size:14px;">💬 Our team typically responds within 24 hours on business days.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  
            <!-- Footer -->
            <tr>
              <td style="background-color:${header.bg}; padding:20px 24px; text-align:center;">
                <p style="color:#0A0A0F; font-size:13px; margin:0;">
                  © ${new Date().getFullYear()} DG Stream. All rights reserved.
                </p>
                <p style="margin:8px 0 0;">
                  <a href="https://dgstream.in/" style="color:#0A0A0F; font-size:13px; text-decoration:underline;">dgstream.in</a>
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
