import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import logger from '../utils/logger.js';

const router = express.Router();

/**
 * Comprehensive email system diagnostic test
 * Tests SMTP connection, authentication, and email sending
 */
router.post('/', async (req, res) => {
	const diagnosticResults = {
		success: false,
		connection: { status: 'pending', error: null },
		authentication: { status: 'pending', error: null },
		emailSending: { status: 'pending', error: null },
		overallStatus: 'not working',
		details: '',
	};

	const timestamp = new Date().toISOString();
	logger.info(`[${timestamp}] Starting comprehensive email diagnostic test`);

	let transporter;

	// STEP 1: TEST SMTP CONNECTION
	const connectionTimestamp = new Date().toISOString();
	logger.info(`[${connectionTimestamp}] STEP 1: Testing SMTP connection...`);
	logger.info(`  Host: ${process.env.SMTP_HOST}`);
	logger.info(`  Port: ${process.env.SMTP_PORT}`);

	try {
		transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT || '587', 10),
			secure: false,
			requireTLS: true,
			auth: {
				user: process.env.GMAIL_EMAIL,
				pass: process.env.GMAIL_APP_PASSWORD,
			},
			logger: false,
			debug: false,
		});

		const verifyTimestamp = new Date().toISOString();
		logger.info(`[${verifyTimestamp}] Verifying SMTP connection...`);

		await transporter.verify();

		const successTimestamp = new Date().toISOString();
		logger.info(`[${successTimestamp}] ✓ SMTP connection successful`);
		diagnosticResults.connection.status = 'success';
	} catch (error) {
		const errorTimestamp = new Date().toISOString();
		logger.error(`[${errorTimestamp}] ✗ SMTP connection failed`);
		logger.error(`  Error Code: ${error.code || 'UNKNOWN'}`);
		logger.error(`  Error Message: ${error.message}`);

		diagnosticResults.connection.status = 'failed';
		diagnosticResults.connection.error = error.message;

		const failureTimestamp = new Date().toISOString();
		logger.error(`[${failureTimestamp}] Diagnostic test halted - cannot proceed without SMTP connection`);

		diagnosticResults.overallStatus = 'not working';
		diagnosticResults.details = `SMTP connection failed: ${error.message}. Cannot proceed with authentication and email sending tests.`;

		return res.json(diagnosticResults);
	}

	// STEP 2: TEST AUTHENTICATION
	const authTimestamp = new Date().toISOString();
	logger.info(`[${authTimestamp}] STEP 2: Testing authentication...`);
	logger.info(`  Email: ${process.env.GMAIL_EMAIL}`);

	try {
		const authVerifyTimestamp = new Date().toISOString();
		logger.info(`[${authVerifyTimestamp}] Verifying authentication credentials...`);

		// The verify() call already tested authentication, but we'll do it again explicitly
		await transporter.verify();

		const authSuccessTimestamp = new Date().toISOString();
		logger.info(`[${authSuccessTimestamp}] ✓ Authentication successful`);
		diagnosticResults.authentication.status = 'success';
	} catch (error) {
		const authErrorTimestamp = new Date().toISOString();
		logger.error(`[${authErrorTimestamp}] ✗ Authentication failed`);
		logger.error(`  Error Code: ${error.code || 'UNKNOWN'}`);
		logger.error(`  Error Message: ${error.message}`);

		diagnosticResults.authentication.status = 'failed';
		diagnosticResults.authentication.error = error.message;

		const authFailureTimestamp = new Date().toISOString();
		logger.error(`[${authFailureTimestamp}] Diagnostic test halted - authentication failed`);

		diagnosticResults.overallStatus = 'not working';
		diagnosticResults.details = `Authentication failed: ${error.message}. Check email and app password credentials.`;

		return res.json(diagnosticResults);
	}

	// STEP 3: TEST EMAIL SENDING
	const sendTimestamp = new Date().toISOString();
	logger.info(`[${sendTimestamp}] STEP 3: Testing email sending...`);
	logger.info(`  To: ${process.env.GMAIL_EMAIL}`);
	logger.info(`  Subject: Test Email from DG Stream Website`);

	try {
		const mailOptions = {
			from: process.env.GMAIL_EMAIL,
			to: process.env.GMAIL_EMAIL,
			subject: 'Test Email from DG Stream Website',
			html: `
<html>
	<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
		<h2 style="color: #2c3e50;">Email Diagnostic Test</h2>
		<p>This is a test email to verify SMTP configuration is working correctly.</p>
		<div style="background-color: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0;">
			<h3 style="margin-top: 0; color: #2c3e50;">Test Details</h3>
			<p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
			<p><strong>From:</strong> ${process.env.GMAIL_EMAIL}</p>
			<p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</p>
			<p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</p>
		</div>
		<p style="color: #27ae60; font-weight: bold;">✓ Email system is working correctly!</p>
	</body>
</html>
		`,
		};

		const sendAttemptTimestamp = new Date().toISOString();
		logger.info(`[${sendAttemptTimestamp}] Sending test email...`);

		const result = await transporter.sendMail(mailOptions);

		const sendSuccessTimestamp = new Date().toISOString();
		logger.info(`[${sendSuccessTimestamp}] ✓ Email sent successfully`);
		logger.info(`  Message ID: ${result.messageId}`);
		logger.info(`  Response: ${result.response}`);

		diagnosticResults.emailSending.status = 'success';
		diagnosticResults.success = true;
		diagnosticResults.overallStatus = 'working';
		diagnosticResults.details = 'All email system components are working correctly. SMTP connection established, authentication successful, and test email sent successfully.';
	} catch (error) {
		const sendErrorTimestamp = new Date().toISOString();
		logger.error(`[${sendErrorTimestamp}] ✗ Email sending failed`);
		logger.error(`  Error Code: ${error.code || 'UNKNOWN'}`);
		logger.error(`  Error Message: ${error.message}`);

		diagnosticResults.emailSending.status = 'failed';
		diagnosticResults.emailSending.error = error.message;
		diagnosticResults.overallStatus = 'not working';
		diagnosticResults.details = `Email sending failed: ${error.message}. SMTP connection and authentication are working, but email delivery failed.`;

		const finalErrorTimestamp = new Date().toISOString();
		logger.error(`[${finalErrorTimestamp}] Diagnostic test completed with errors`);

		return res.json(diagnosticResults);
	}

	// STEP 4: RETURN DETAILED RESPONSE
	const finalTimestamp = new Date().toISOString();
	logger.info(`[${finalTimestamp}] ✓ Diagnostic test completed successfully`);
	logger.info(`  Overall Status: ${diagnosticResults.overallStatus}`);
	logger.info(`  Connection: ${diagnosticResults.connection.status}`);
	logger.info(`  Authentication: ${diagnosticResults.authentication.status}`);
	logger.info(`  Email Sending: ${diagnosticResults.emailSending.status}`);

	res.json(diagnosticResults);
});

export default router;