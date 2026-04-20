import { Router } from 'express';
import healthCheck from './health-check.js';
import contactRouter from './contact.js';
import testEmailRouter from './test-email.js';

const router = Router();

export default () => {
  router.get('/health', healthCheck);
  router.use('/contact', contactRouter);
  router.use('/test-email', testEmailRouter);

  return router;
};