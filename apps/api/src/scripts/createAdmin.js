import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
console.log('MONGO_URI:', process.env.MONGO_URI);

import mongoose from 'mongoose';
import bcrypt   from 'bcryptjs';
import connectDB from "../utils/db.js"
import Admin    from '../models/Admin.js';

const createAdmin = async () => {
  try {
    await connectDB();

    // Check if admin already exists
    const existing = await Admin.findOne({ username: 'marketing@streamys.in' });
    if (existing) {
      console.log('Admin user already exists!');
      process.exit(0);
    }

    const password = await bcrypt.hash('marketing@123', 10);
    await Admin.create({
      username: 'marketing@streamys.in',
      password,
      role: 'admin'
    });

    console.log('✅ Admin user created!');
    console.log('   Username:',username);
    console.log('   Password:',password);
  } catch (err) {
    console.error('❌ Error creating admin:', err.message);
  } finally {
    process.exit(0);
  }
};

createAdmin();
