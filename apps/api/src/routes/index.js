// import { Router } from 'express';
// import healthCheck from './health-check.js';
// import contactRouter from './contact.js';
// import testEmailRouter from './test-email.js';
// import blogRouter from './blogs.js';        
// import authRouter from './auth.js';         


// const router = Router();

// export default () => {
//   router.get('/health',healthCheck);
//   router.use('/contact',contactRouter);
//   router.use('/test-email',testEmailRouter);
//   router.use('/blogs',blogRouter);          
//   router.use('/auth',authRouter);          

//   return router;
// };
import { Router } from 'express';
import healthCheck from './health-check.js';
import contactRouter from './contact.js';
import testEmailRouter from './test-email.js';
import blogRouter from './blogs.js';        
import authRouter from './auth.js';         

console.log('healthCheck:', !!healthCheck);
console.log('contactRouter:', !!contactRouter);
console.log('testEmailRouter:', !!testEmailRouter);
console.log('blogRouter:', !!blogRouter);
console.log('authRouter:', !!authRouter);

const router = Router();

export default () => {
  if (!healthCheck) throw new Error('healthCheck is undefined');
  if (!contactRouter) throw new Error('contactRouter is undefined');
  if (!testEmailRouter) throw new Error('testEmailRouter is undefined');
  if (!blogRouter) throw new Error('blogRouter is undefined');
  if (!authRouter) throw new Error('authRouter is undefined');

  router.get('/health', healthCheck);
  router.use('/contact', contactRouter);
  router.use('/test-email', testEmailRouter);
  router.use('/blogs', blogRouter);          
  router.use('/auth', authRouter);          

  return router;
};