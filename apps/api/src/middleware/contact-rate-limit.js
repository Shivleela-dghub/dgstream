import rateLimit from 'express-rate-limit';

export const contactRateLimit = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // 5 requests per 15 minutes per IP
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: 'Too many contact form submissions. Please try again later.' },
	validate: { trustProxy: false },
	skip: (req) => req.method === 'OPTIONS',
});