import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DG Stream</title>
        <meta name="description" content="Privacy Policy for DG Stream. Learn how we collect, use, and protect your information." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="container max-w-4xl">
          <h1 className="mb-8 text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-12 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl mb-4 text-primary">1. Information We Collect</h2>
              <p className="mb-4">We collect both personal and non-personal information to provide and improve our services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Full Name, Phone Number, Email Address, Business/Clinic/Brand Name, Industry Type, Specialty/Category, and Service Requirements.</li>
                <li><strong>Non-Personal Information:</strong> Browser type, IP address, Device information, and Pages visited on our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">2. How We Use Your Information</h2>
              <p className="mb-4">The information we collect is used in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To understand your business requirements and provide tailored solutions.</li>
                <li>To respond to your inquiries and support requests.</li>
                <li>To improve our website, services, and marketing efforts.</li>
                <li>To communicate updates, offers, and relevant industry insights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">3. Data Sharing & Disclosure</h2>
              <p>We respect your privacy. We do not sell or rent your personal information to third parties. We may share your information only with our internal team, trusted third-party service providers who assist us in operating our business, or when required by law to comply with legal obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">4. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">5. Cookies & Tracking Technologies</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and optimize our marketing campaigns. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">6. Third-Party Services</h2>
              <p>We may use third-party services such as Google Analytics, Meta Pixel, and other marketing tools to analyze user behavior and improve our services. These third parties have their own privacy policies governing how they handle your data.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">7. Your Rights</h2>
              <p>You have the right to access, correct, or request the deletion of your personal information held by us. You may also opt-out of receiving marketing communications at any time by contacting us or using the unsubscribe link in our emails.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">8. Data Retention</h2>
              <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">9. Updates to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the "Last updated" date will be revised accordingly.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">10. Contact Us</h2>
              <p className="mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <ul className="space-y-2 font-medium">
                <li><strong>Company:</strong> DG Stream</li>
                <li><strong>Email:</strong> <a href="mailto:Contact@dgstream.in" className="text-secondary hover:underline">Contact@dgstream.in</a></li>
                <li><strong>Phone:</strong> <a href="tel:9731361100" className="text-secondary hover:underline">9731361100</a></li>
                <li><strong>Website:</strong> <a href="https://dgstream.in/" className="text-secondary hover:underline">https://dgstream.in/</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;