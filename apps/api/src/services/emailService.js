import 'dotenv/config';
import nodemailer from 'nodemailer';
import logger from '../utils/logger.js';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (to, subject, html) => {
  const timestamp = new Date().toISOString();
  logger.info(`[${timestamp}] Sending email to ${to} with subject: "${subject}"`);

  const result = await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to,
    subject,
    html,
  });

  const successTimestamp = new Date().toISOString();
  logger.info(`[${successTimestamp}] Email sent successfully to ${to}. Message ID: ${result.messageId}`);

  return {
    success: true,
    messageId: result.messageId,
  };
};