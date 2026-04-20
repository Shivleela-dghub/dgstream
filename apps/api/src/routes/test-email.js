import express from 'express';
import { sendEmail } from '../services/emailService.js';
import logger from '../utils/logger.js';
import { testEmailRateLimit } from '../middleware/test-email-rate-limit.js';

const router = express.Router();

router.get('/', testEmailRateLimit, async (req, res) => {
  const testEmail = 'contact@dgstream.in';
  const timestamp = new Date().toISOString();
  logger.info(`[${timestamp}] GET /test-email endpoint called`);
  logger.info(`  Recipient: ${testEmail}`);
  logger.info(`  Purpose: SMTP Configuration Test`);

  const testSubject = 'SMTP Configuration Test';
  const testHtmlContent = `
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #2c3e50;">SMTP Configuration Test</h2>
    <p>Testing Gmail SMTP with new app password</p>
    <div style="background-color: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #2c3e50;">Test Details</h3>
      <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>From:</strong> ${process.env.SMTP_EMAIL}</p>
      <p><strong>To:</strong> ${testEmail}</p>
      <p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</p>
      <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</p>
      <p><strong>Protocol:</strong> TLS (STARTTLS)</p>
    </div>
    <p style="color: #27ae60; font-weight: bold;">✓ SMTP configuration is working correctly!</p>
  </body>
</html>
  `;

  const sendAttemptTimestamp = new Date().toISOString();
  logger.info(`[${sendAttemptTimestamp}] Sending test email via TLS SMTP...`);

  await sendEmail(testEmail, testSubject, testHtmlContent);

  const successTimestamp = new Date().toISOString();
  logger.info(`[${successTimestamp}] ✓ Test email sent successfully`);
  logger.info(`  Recipient: ${testEmail}`);
  logger.info(`  Subject: ${testSubject}`);
  logger.info(`  Status: SUCCESS`);

  res.json({
    success: true,
    message: `Test email sent successfully to ${testEmail}. Check your inbox to verify SMTP configuration.`,
  });
});

export default router;