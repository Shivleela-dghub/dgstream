import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),  // store in memory, upload to cloudinary manually
  limits: { fileSize: 10 * 1024 * 1024 }
});

export default upload;