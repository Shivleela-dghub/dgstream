import rateLimit from 'express-rate-limit';

export const testEmailRateLimit = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 3, // 3 requests per hour per IP
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: 'Too many test email requests. Please try again later.' },
	validate: { trustProxy: false },
	skip: (req) => req.method === 'OPTIONS',
});