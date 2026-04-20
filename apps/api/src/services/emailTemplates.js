/**
 * Get admin email template for form submissions
 * @param {string} inquiryType - 'healthcare' or 'retail'
 * @param {Object} formData - Form submission data
 * @returns {Object} - { subject, htmlContent }
 */
export const getAdminEmailTemplate = (inquiryType, formData) => {
	const isHealthcare = inquiryType === 'healthcare';
	const subject = isHealthcare
		? `New Healthcare Inquiry - ${formData.name}`
		: `New Retail Business Inquiry - ${formData.name}`;

	const headerColor = isHealthcare ? '#3498db' : '#27ae60';
	const borderColor = isHealthcare ? '#3498db' : '#27ae60';

	let detailsHtml = '';

	if (isHealthcare) {
		detailsHtml = `
			<div style="margin: 20px 0;">
				<h3 style="color: #2c3e50;">Healthcare Details</h3>
				<p><strong>Clinic Type:</strong> ${formData.clinicType}</p>
				<p><strong>Looking For:</strong> ${formData.lookingFor}</p>
			</div>
		`;
	} else {
		detailsHtml = `
			<div style="margin: 20px 0;">
				<h3 style="color: #2c3e50;">Business Details</h3>
				<p><strong>Business Category:</strong> ${formData.businessCategory}</p>
				<p><strong>Business Model:</strong> ${formData.businessModel}</p>
				<p><strong>Where Do You Sell:</strong> ${formData.whereDoYouSell}</p>
				<p><strong>Current Business Stage:</strong> ${formData.currentBusinessStage}</p>
			</div>
		`;
	}

	const htmlContent = `
<html>
	<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
		<h2 style="color: #2c3e50;">${isHealthcare ? 'New Healthcare Inquiry' : 'New Retail Business Inquiry'}</h2>
		<hr style="border: none; border-top: 2px solid ${borderColor};">
		
		<div style="background-color: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0;">
			<h3 style="margin-top: 0; color: #2c3e50;">Contact Information</h3>
			<p><strong>Name:</strong> ${formData.name}</p>
			<p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: ${headerColor}; text-decoration: none;">${formData.email}</a></p>
			<p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: ${headerColor}; text-decoration: none; font-weight: bold;">${formData.phone}</a></p>
		</div>
		
		${detailsHtml}
		
		<div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid ${borderColor}; margin: 20px 0;">
			<h3 style="margin-top: 0; color: #2c3e50;">Message</h3>
			<p>${formData.message.replace(/\n/g, '<br>')}</p>
		</div>
		
		<hr style="border: none; border-top: 1px solid #bdc3c7;">
		<p style="color: #7f8c8d; font-size: 12px;">Submitted on ${new Date().toLocaleString()}</p>
	</body>
</html>
	`;

	return { subject, htmlContent };
};

/**
 * Get customer response email template
 * @param {string} inquiryType - 'healthcare' or 'retail'
 * @param {string} customerName - Customer's name
 * @param {string} customerPhone - Contact phone number
 * @returns {Object} - { subject, htmlContent }
 */
export const getCustomerResponseTemplate = (inquiryType, customerName, customerPhone) => {
	const isHealthcare = inquiryType === 'healthcare';

	const subject = isHealthcare
		? 'Thank You for Contacting DG Stream - Healthcare Solutions'
		: 'Thank You for Contacting DG Stream - Retail Growth Solutions';

	const headerColor = isHealthcare ? '#3498db' : '#27ae60';

	let bodyContent = '';

	if (isHealthcare) {
		bodyContent = `
			<p>Dear ${customerName},</p>
			
			<p>Thank you for reaching out to DG Stream regarding our healthcare digital marketing solutions. We appreciate your interest in our services and the information you've shared with us.</p>
			
			<p>Our team has received your inquiry and will review your requirements carefully. We understand the importance of finding the right solution for your healthcare facility, and we're committed to providing you with the best possible support.</p>
			
			<p>We will get back to you within 24 hours with more information tailored to your specific needs. If you have any urgent questions in the meantime, please don't hesitate to contact us.</p>
			
			<p><strong>Contact Information:</strong></p>
			<ul style="list-style: none; padding: 0;">
				<li>📧 Email: <a href="mailto:contact@dgstream.in" style="color: ${headerColor}; text-decoration: none;">contact@dgstream.in</a></li>
				<li>📞 Phone: <a href="tel:9731361100" style="color: ${headerColor}; text-decoration: none;">9731361100</a></li>
				<li>🌐 Website: <a href="https://dgstream.in" style="color: ${headerColor}; text-decoration: none;">https://dgstream.in</a></li>
			</ul>
			
			<p>Best regards,<br><strong>DG Stream Team</strong></p>
		`;
	} else {
		bodyContent = `
			<p>Dear ${customerName},</p>
			
			<p>Thank you for reaching out to DG Stream regarding our retail and e-commerce growth solutions. We're excited to learn more about your business and how we can help you achieve your goals.</p>
			
			<p>Your inquiry has been received and our team will carefully review the details you've provided. We understand the unique challenges of the retail industry and are ready to offer solutions that drive growth and success for your business.</p>
			
			<p>You can expect to hear from us within 24 hours with personalized recommendations and next steps. If you have any additional information to share or questions before we connect, please feel free to reach out.</p>
			
			<p><strong>Contact Information:</strong></p>
			<ul style="list-style: none; padding: 0;">
				<li>📧 Email: <a href="mailto:contact@dgstream.in" style="color: ${headerColor}; text-decoration: none;">contact@dgstream.in</a></li>
				<li>📞 Phone: <a href="tel:9731361100" style="color: ${headerColor}; text-decoration: none;">9731361100</a></li>
				<li>🌐 Website: <a href="https://dgstream.in" style="color: ${headerColor}; text-decoration: none;">https://dgstream.in</a></li>
			</ul>
			
			<p>Best regards,<br><strong>DG Stream Team</strong></p>
		`;
	}

	const htmlContent = `
<html>
	<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
		<div style="max-width: 600px; margin: 0 auto; padding: 20px;">
			<div style="background-color: ${headerColor}; color: white; padding: 20px; border-radius: 5px 5px 0 0; text-align: center;">
				<h1 style="margin: 0; font-size: 24px;">DG Stream</h1>
			</div>
			
			<div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 5px 5px;">
				${bodyContent}
			</div>
			
			<hr style="border: none; border-top: 1px solid #bdc3c7; margin: 20px 0;">
			<p style="color: #7f8c8d; font-size: 12px; text-align: center;">© 2024 DG Stream. All rights reserved.</p>
		</div>
	</body>
</html>
	`;

	return { subject, htmlContent };
};