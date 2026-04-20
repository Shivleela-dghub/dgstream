import express from 'express';
import validator from 'validator';
import xss from 'xss';
import { sendEmail } from '../services/emailService.js';
import logger from '../utils/logger.js';
import { contactRateLimit } from '../middleware/contact-rate-limit.js';

const router = express.Router();

// Sanitization options for XSS
const xssOptions = {
	whiteList: {},
	stripIgnoredTag: true,
	stripLeadingAndTrailingWhitespace: true,
};

/**
 * Validate and sanitize input
 * @param {string} fieldName - Name of the field being validated
 * @param {any} value - Value to validate
 * @param {string} type - Type of validation: 'name', 'email', 'phone', 'inquiryType', 'message', 'text'
 * @returns {Object} - { valid: boolean, value: sanitized value, error: error message }
 */
const validateInput = (fieldName, value, type) => {
	const timestamp = new Date().toISOString();

	// Check if required field is missing
	if (value === undefined || value === null || value === '') {
		logger.warn(`[${timestamp}] Validation failed: ${fieldName} is required`);
		return { valid: false, error: `${fieldName} is required` };
	}

	// Convert to string and trim
	let stringValue = String(value).trim();

	switch (type) {
		case 'name':
			if (stringValue.length > 100) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} exceeds 100 characters`);
				return { valid: false, error: `${fieldName} must not exceed 100 characters` };
			}
			if (!/^[a-zA-Z\s'-]+$/.test(stringValue)) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} contains invalid characters`);
				return { valid: false, error: `${fieldName} contains invalid characters` };
			}
			stringValue = xss(stringValue, xssOptions);
			return { valid: true, value: stringValue };

		case 'email':
			if (!validator.isEmail(stringValue)) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} is not a valid email`);
				return { valid: false, error: `${fieldName} is not a valid email address` };
			}
			stringValue = validator.normalizeEmail(stringValue);
			return { valid: true, value: stringValue };

		case 'phone':
			if (!validator.isMobilePhone(stringValue, 'any', { strictMode: false })) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} is not a valid phone number`);
				return { valid: false, error: `${fieldName} is not a valid phone number` };
			}
			stringValue = xss(stringValue, xssOptions);
			return { valid: true, value: stringValue };

		case 'inquiryType':
			if (!['healthcare', 'retail'].includes(stringValue)) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} must be 'healthcare' or 'retail'`);
				return { valid: false, error: `${fieldName} must be 'healthcare' or 'retail'` };
			}
			return { valid: true, value: stringValue };

		case 'message':
			if (stringValue.length > 1000) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} exceeds 1000 characters`);
				return { valid: false, error: `${fieldName} must not exceed 1000 characters` };
			}
			if (stringValue.length < 10) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} is too short`);
				return { valid: false, error: `${fieldName} must be at least 10 characters` };
			}
			stringValue = xss(stringValue, xssOptions);
			return { valid: true, value: stringValue };

		case 'text':
			if (stringValue.length > 100) {
				logger.warn(`[${timestamp}] Validation failed: ${fieldName} exceeds 100 characters`);
				return { valid: false, error: `${fieldName} must not exceed 100 characters` };
			}
			stringValue = xss(stringValue, xssOptions);
			return { valid: true, value: stringValue };

		default:
			return { valid: false, error: 'Unknown validation type' };
	}
};

router.post('/', contactRateLimit, async (req, res) => {
	const { name, email, phone, inquiryType, message, clinicType, businessCategory, lookingFor } = req.body;
	const timestamp = new Date().toISOString();

	// Validate required fields
	const nameValidation = validateInput('name', name, 'name');
	if (!nameValidation.valid) {
		return res.status(400).json({ error: `Invalid input: ${nameValidation.error}` });
	}

	const emailValidation = validateInput('email', email, 'email');
	if (!emailValidation.valid) {
		return res.status(400).json({ error: `Invalid input: ${emailValidation.error}` });
	}

	const phoneValidation = validateInput('phone', phone, 'phone');
	if (!phoneValidation.valid) {
		return res.status(400).json({ error: `Invalid input: ${phoneValidation.error}` });
	}

	const inquiryTypeValidation = validateInput('inquiryType', inquiryType, 'inquiryType');
	if (!inquiryTypeValidation.valid) {
		return res.status(400).json({ error: `Invalid input: ${inquiryTypeValidation.error}` });
	}

	const messageValidation = validateInput('message', message, 'message');
	if (!messageValidation.valid) {
		return res.status(400).json({ error: `Invalid input: ${messageValidation.error}` });
	}

	// Validate optional fields
	let validatedClinicType = null;
	let validatedBusinessCategory = null;
	let validatedLookingFor = null;

	if (clinicType) {
		const clinicValidation = validateInput('clinicType', clinicType, 'text');
		if (!clinicValidation.valid) {
			return res.status(400).json({ error: `Invalid input: ${clinicValidation.error}` });
		}
		validatedClinicType = clinicValidation.value;
	}

	if (businessCategory) {
		const categoryValidation = validateInput('businessCategory', businessCategory, 'text');
		if (!categoryValidation.valid) {
			return res.status(400).json({ error: `Invalid input: ${categoryValidation.error}` });
		}
		validatedBusinessCategory = categoryValidation.value;
	}

	if (lookingFor) {
		const lookingForValidation = validateInput('lookingFor', lookingFor, 'text');
		if (!lookingForValidation.valid) {
			return res.status(400).json({ error: `Invalid input: ${lookingForValidation.error}` });
		}
		validatedLookingFor = lookingForValidation.value;
	}

	// All validations passed - use sanitized values
	const sanitizedData = {
		name: nameValidation.value,
		email: emailValidation.value,
		phone: phoneValidation.value,
		inquiryType: inquiryTypeValidation.value,
		message: messageValidation.value,
		clinicType: validatedClinicType,
		businessCategory: validatedBusinessCategory,
		lookingFor: validatedLookingFor,
	};

	logger.info(`[${timestamp}] New ${sanitizedData.inquiryType} form submission from ${sanitizedData.name} (${sanitizedData.email}, ${sanitizedData.phone})`);

	// Build admin email HTML
	let adminHtmlContent = `
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #2c3e50;">New Contact Form Submission - ${sanitizedData.inquiryType}</h2>
    <hr style="border: none; border-top: 2px solid #3498db;">
    
    <div style="background-color: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #2c3e50;">Contact Information</h3>
      <p><strong>Name:</strong> ${sanitizedData.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}" style="color: #3498db; text-decoration: none;">${sanitizedData.email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${sanitizedData.phone}" style="color: #3498db; text-decoration: none; font-weight: bold;">${sanitizedData.phone}</a></p>
      <p><strong>Inquiry Type:</strong> ${sanitizedData.inquiryType}</p>
    </div>
  `;

	// Add inquiry-specific fields
	if (sanitizedData.inquiryType === 'healthcare' && sanitizedData.clinicType) {
		adminHtmlContent += `
    <div style="margin: 20px 0;">
      <h3 style="color: #2c3e50;">Healthcare Details</h3>
      <p><strong>Clinic Type:</strong> ${sanitizedData.clinicType}</p>
      ${sanitizedData.lookingFor ? `<p><strong>Looking For:</strong> ${sanitizedData.lookingFor}</p>` : ''}
    </div>
    `;
	} else if (sanitizedData.inquiryType === 'retail' && sanitizedData.businessCategory) {
		adminHtmlContent += `
    <div style="margin: 20px 0;">
      <h3 style="color: #2c3e50;">Business Details</h3>
      <p><strong>Business Category:</strong> ${sanitizedData.businessCategory}</p>
    </div>
    `;
	}

	adminHtmlContent += `
    <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #3498db; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #2c3e50;">Message</h3>
      <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
    </div>
    
    <hr style="border: none; border-top: 1px solid #bdc3c7;">
    <p style="color: #7f8c8d; font-size: 12px;">Submitted on ${new Date().toLocaleString()}</p>
  </body>
</html>
  `;

	// Send admin email
	const adminEmailTimestamp = new Date().toISOString();
	logger.info(`[${adminEmailTimestamp}] Sending admin notification email...`);
	await sendEmail('contact@dgstream.in', `New Contact Form Submission - ${sanitizedData.inquiryType}`, adminHtmlContent);
	logger.info(`[${adminEmailTimestamp}] Admin notification email sent successfully`);

	// Build customer auto-reply HTML
	const customerHtmlContent = `
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #3498db; color: white; padding: 20px; border-radius: 5px 5px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">DG Stream</h1>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 5px 5px;">
        <p>Hi ${sanitizedData.name},</p>
        
        <p>Thank you for contacting DG Stream. We have received your message and appreciate your interest in our services.</p>
        
        <p>Our team will review your inquiry and get back to you as soon as possible. We look forward to connecting with you!</p>
        
        <p><strong>Contact Information:</strong></p>
        <ul style="list-style: none; padding: 0;">
          <li>📧 Email: <a href="mailto:contact@dgstream.in" style="color: #3498db; text-decoration: none;">contact@dgstream.in</a></li>
          <li>📞 Phone: <a href="tel:9731361100" style="color: #3498db; text-decoration: none;">9731361100</a></li>
          <li>🌐 Website: <a href="https://dgstream.in" style="color: #3498db; text-decoration: none;">https://dgstream.in</a></li>
        </ul>
        
        <p>Best regards,<br><strong>DG Stream Team</strong></p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #bdc3c7; margin: 20px 0;">
      <p style="color: #7f8c8d; font-size: 12px; text-align: center;">© 2024 DG Stream. All rights reserved.</p>
    </div>
  </body>
</html>
  `;

	// Send customer auto-reply
	const customerEmailTimestamp = new Date().toISOString();
	logger.info(`[${customerEmailTimestamp}] Sending customer confirmation email...`);
	await sendEmail(sanitizedData.email, 'Thanks for contacting DG Stream', customerHtmlContent);
	logger.info(`[${customerEmailTimestamp}] Customer confirmation email sent successfully`);

	const successTimestamp = new Date().toISOString();
	logger.info(`[${successTimestamp}] Contact form processed successfully for ${sanitizedData.name} (${sanitizedData.email})`);

	res.json({
		success: true,
		message: `Thank you! We've sent a confirmation email to ${sanitizedData.email}. Our team will contact you soon.`,
	});
});

export default router;