import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import logger from './utils/logger.js';
import { BodyLimit } from './constants/common.js';

const app = express();

app.set('trust proxy', true);

process.on('uncaughtException', (error) => {
	logger.error('Uncaught exception:', error);
});
  
process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled rejection at:', promise, 'reason:', reason);
});

process.on('SIGINT', async () => {
	logger.info('Interrupted');
	process.exit(0);
});

process.on('SIGTERM', async () => {
	logger.info('SIGTERM signal received');

	await new Promise(resolve => setTimeout(resolve, 3000));

	logger.info('Exiting');
	process.exit();
});

// Security middleware - Helmet must be applied first
app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			defaultSrc: ["'self'"],
			scriptSrc: ["'self'", "'unsafe-inline'"],
			styleSrc: ["'self'", "'unsafe-inline'"],
		},
	},
	frameguard: {
		action: 'deny',
	},
	noSniff: true,
	hsts: {
		maxAge: 31536000,
		includeSubDomains: true,
		preload: true,
	},
	xssFilter: true,
	referrerPolicy: {
		policy: 'strict-origin-when-cross-origin',
	},
}));

// CORS protection - only allow specific origins
app.use(cors({
	origin: (origin, callback) => {
		const allowedOrigins = ['https://dgstream.in', 'https://www.dgstream.in'];
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('CORS not allowed'), false);
		}
	},
	credentials: true,
	methods: ['GET', 'POST'],
	allowedHeaders: ['Content-Type'],
}));

app.use(morgan('combined'));
app.use(globalRateLimit);

// Request size limits - prevent large payload attacks
app.use(express.json({
	limit: '10kb',
}));
app.use(express.urlencoded({ 
	extended: true,
	limit: '10kb',
}));

// Request timeout configuration
app.use((req, res, next) => {
	req.setTimeout(30000);
	res.setTimeout(30000);
	next();
});

// Content-Type validation for POST requests
app.use((req, res, next) => {
	if (req.method === 'POST') {
		const contentType = req.get('Content-Type');
		if (contentType && !['application/json', 'application/x-www-form-urlencoded'].some(ct => contentType.includes(ct))) {
			return res.status(400).json({ error: 'Invalid Content-Type. Only application/json and application/x-www-form-urlencoded are allowed.' });
		}
	}
	next();
});

// Disable unnecessary HTTP methods
app.use((req, res, next) => {
	if (!['GET', 'POST', 'OPTIONS'].includes(req.method)) {
		return res.status(405).json({ error: 'Method not allowed' });
	}
	next();
});

app.use('/', routes());

app.use(errorMiddleware);

app.use((req, res) => {
	res.status(404).json({ error: 'Route not found' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	logger.info(`🚀 API Server running on http://localhost:${port}`);
});

export default app;