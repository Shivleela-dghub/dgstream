import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import mongoose from 'mongoose';
import connectDB from '../utils/db.js';
import Blog from '../models/Blog.js';

const blogsData = [
  {
    title:      '5 Proven Strategies to Increase Patient Acquisition in 2024',
    author:     'Dr. Sarah Chen',
    category:   'Healthcare',
    coverImage: 'https://images.unsplash.com/photo-1682514149196-e75fe2d1b899?auto=format&fit=crop&q=80&w=1200',
    readTime:   '6 min read',
    status:     'published',
    content:    'In 2024, patients are more digitally savvy than ever. Before booking an appointment, the average patient conducts extensive online research, reads reviews, and evaluates a provider\'s digital presence.',
    sections: [
      { heading: '1. Dominate Local SEO and Google Business Profile', body: 'When a patient searches for "cardiologist near me" or "best dental clinic," you need to appear in the top three map results. Optimize your Google Business Profile by ensuring your NAP data is consistent.' },
      { heading: '2. Implement High-Intent Paid Search Campaigns',    body: 'Google Ads remain one of the most effective ways to capture patients at the exact moment they need care. Focus on high-intent keywords rather than broad medical terms.' },
      { heading: '3. Develop Condition-Specific Landing Pages',       body: 'Don\'t send all your traffic to your homepage. Create dedicated, conversion-optimized landing pages for specific treatments or conditions.' },
      { heading: '4. Leverage Video Content for Trust Building',      body: 'Healthcare is deeply personal. Short-form videos introducing your doctors or explaining common procedures can dramatically reduce patient anxiety.' },
      { heading: '5. Streamline the Digital Booking Experience',      body: 'Your marketing efforts are wasted if your booking process is cumbersome. Implement online scheduling, offer WhatsApp communication, and ensure your website is lightning-fast on mobile.' }
    ]
  },
  {
    title:      'Building Patient Trust Through Digital Presence',
    author:     'Michael Roberts',
    category:   'Healthcare',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    readTime:   '5 min read',
    status:     'published',
    content:    'Trust is the currency of healthcare. Before a patient ever steps foot in your clinic, they have already formed an opinion about your practice based on your digital footprint.',
    sections: [
      { heading: 'The Anatomy of a Trust-Building Website', body: 'A modern healthcare website must do more than list services. It needs to project authority, empathy, and competence through professional photography, clear credentials, and an intuitive user interface.' },
      { heading: 'Proactive Reputation Management',         body: 'Online reviews are the digital equivalent of word-of-mouth. A proactive reputation management strategy involves automatically requesting reviews from satisfied patients post-appointment.' },
      { heading: 'Educational Content as a Trust Signal',   body: 'Publishing accurate, accessible medical information establishes your practice as a thought leader. When you answer the questions patients are actively searching for, you build a relationship before the first consultation.' },
      { heading: 'Transparency in Communication',           body: 'Clear communication about what patients can expect regarding wait times, insurance acceptance, and out-of-pocket costs builds immense trust.' }
    ]
  },
  {
    title:      'How to Increase E-commerce Conversion Rates by 40%',
    author:     'Elena Rodriguez',
    category:   'Retail',
    coverImage: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?auto=format&fit=crop&q=80&w=1200',
    readTime:   '7 min read',
    status:     'published',
    content:    'Driving traffic to your e-commerce store is expensive. If your conversion rate is hovering around the industry average of 1.5% to 2%, you are leaving massive amounts of revenue on the table.',
    sections: [
      { heading: '1. Frictionless Checkout is Non-Negotiable',      body: 'The number one reason for cart abandonment is a complicated checkout process. Implement guest checkout, offer multiple payment options, and reduce form fields to the absolute minimum.' },
      { heading: '2. High-Fidelity Product Visuals',                body: 'In e-commerce, your images are your storefront. Include high-resolution images, 360-degree views, video demonstrations, and user-generated content.' },
      { heading: '3. Strategic Use of Urgency and Scarcity',        body: 'Psychological triggers remain highly effective when used authentically. Low stock indicators or time-sensitive shipping cutoffs provide the necessary nudge for hesitant buyers.' },
      { heading: '4. Transparent Shipping and Return Policies',     body: 'Hidden costs at checkout are conversion killers. Display shipping costs and delivery estimates as early in the funnel as possible.' },
      { heading: '5. Site Speed Optimization',                      body: 'Every second of delay in page load time reduces conversions by up to 7%. Compress images, leverage browser caching, and utilize a CDN.' }
    ]
  },
  {
    title:      'Social Media Marketing Strategies for Fashion Brands',
    author:     'Marcus Thorne',
    category:   'Retail',
    coverImage: 'https://images.unsplash.com/photo-1642452222105-b2933e287da4?auto=format&fit=crop&q=80&w=1200',
    readTime:   '5 min read',
    status:     'published',
    content:    'Fashion is inherently visual and aspirational, making social media its natural habitat. However, the playbook has changed — highly polished feeds are being outperformed by authentic, community-driven content.',
    sections: [
      { heading: '1. Mastering Short-Form Video',        body: 'Instagram Reels and TikTok are currently the most powerful organic discovery engines for fashion brands. Focus on GRWM videos, styling tips, and behind-the-scenes looks.' },
      { heading: '2. The Micro-Influencer Advantage',    body: 'Micro-influencers (10k-50k followers) drive actual conversions. They possess highly engaged, niche audiences that trust their recommendations.' },
      { heading: '3. Social Commerce Integration',       body: 'Utilize Instagram Shopping and TikTok Shop to allow users to buy products directly within the app. Tag products in every relevant post and reel.' },
      { heading: '4. User-Generated Content (UGC)',      body: 'Encourage your customers to post photos wearing your products. Create a branded hashtag and feature the best UGC on your own profile and product pages.' },
      { heading: '5. Community Engagement',              body: 'Brands that win are those that actively engage with their audience in the comments, run polls on Instagram Stories, and create a sense of exclusivity among their followers.' }
    ]
  }
];

const migrate = async () => {
  try {
    await connectDB();

    // clear existing blogs
    await Blog.deleteMany({});
    console.log('🗑️  Cleared existing blogs');

    // insert all blogs
    const inserted = await Blog.insertMany(blogsData);
    console.log(`✅ Migrated ${inserted.length} blogs to MongoDB`);

    inserted.forEach(b => console.log(`   - ${b.title}`));
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
};

migrate();