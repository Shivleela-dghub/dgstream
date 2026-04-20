import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | DG Stream</title>
        <meta name="description" content="Terms of Service for DG Stream. Read our terms and conditions for using our digital marketing services." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="container max-w-4xl">
          <h1 className="mb-8 text-4xl md:text-5xl">Terms of Service</h1>
          <p className="text-muted-foreground mb-12 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-12 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl mb-4 text-primary">1. Acceptance of Terms</h2>
              <p>By accessing our website or engaging DG Stream for digital marketing services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">2. Services Offered</h2>
              <p className="mb-4">DG Stream provides digital marketing solutions tailored to specific industries:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Healthcare:</strong> Patient acquisition, SEO, performance marketing, social media management, and website development.</li>
                <li><strong>Retail:</strong> E-commerce growth, performance marketing, social media branding, conversion optimization, and website/funnel development.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">3. Client Responsibilities</h2>
              <p>Clients are expected to provide accurate information, timely access to necessary platforms (e.g., website CMS, ad accounts, social media profiles), and general cooperation to ensure the successful execution of campaigns. Clients must also ensure their business operations and provided materials comply with all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">4. Payments & Pricing</h2>
              <p>Service fees will be outlined in custom proposals or contracts. Payments must be made according to the agreed-upon timelines. Revision rights and scope of work will be explicitly defined in the individual service agreements.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">5. No Guaranteed Results</h2>
              <p>While DG Stream employs performance-driven strategies and industry best practices, we do not guarantee specific results such as exact search engine rankings, a fixed number of leads, or guaranteed sales figures. Results vary based on market competition, industry trends, budget allocations, and third-party platform algorithm changes.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">6. Third-Party Platforms</h2>
              <p>DG Stream utilizes third-party platforms (e.g., Google, Meta, LinkedIn) to execute campaigns. We are not responsible for any platform changes, account suspensions, policy updates, or algorithm changes implemented by these third parties that may affect campaign performance.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">7. Intellectual Property</h2>
              <p>DG Stream retains ownership of all proprietary content, strategies, methodologies, and materials developed during the service period unless explicitly agreed otherwise in writing. Clients may not reproduce, distribute, or repurpose these materials without prior written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">8. Confidentiality</h2>
              <p>We respect client confidentiality. DG Stream will not disclose sensitive business information, trade secrets, or proprietary data to unauthorized third parties without explicit consent, except as required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">9. Limitation of Liability</h2>
              <p>DG Stream shall not be held liable for any indirect, incidental, or consequential losses, including but not limited to loss of revenue, data loss, or damages arising from third-party platform performance or service interruptions.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">10. Termination of Services</h2>
              <p>DG Stream reserves the right to suspend or terminate services in cases of non-compliance with these terms, non-payment, or unethical business practices. Clients may terminate services according to the notice period specified in their individual contracts.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">11. Modifications to Services & Terms</h2>
              <p>We reserve the right to modify our services, pricing, and these Terms of Service at any time. Significant changes will be communicated to active clients in a timely manner.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">12. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the appropriate courts in India.</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-primary">13. Contact Information</h2>
              <p className="mb-4">For any questions regarding these Terms of Service, please contact us:</p>
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

export default TermsOfServicePage;