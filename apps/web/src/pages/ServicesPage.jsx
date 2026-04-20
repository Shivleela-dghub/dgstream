import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, HeartPulse, Target, MousePointerClick, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';

function ServicesPage() {
  const services = [
    {
      id: 'seo',
      icon: Search,
      title: 'Patient Acquisition via SEO',
      description: 'Rank your practice on Google for high-intent patient searches. Drive consistent organic inquiries. Dominate local search and Google Maps.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      alt: 'Doctor analyzing SEO data on a tablet',
      benefits: [
        'Healthcare-specific keyword research and targeting',
        'Google Business Profile optimization for local dominance',
        'Medical content creation and on-page SEO',
        'Technical website audits for speed and compliance',
        'High-quality backlink building in healthcare niches'
      ]
    },
    {
      id: 'social',
      icon: HeartPulse,
      title: 'Patient Engagement & Trust Building',
      description: 'Build strong brand presence on social media. Educate and engage patients with content. Increase credibility and recall.',
      benefits: [
        'Strategic content calendar for Instagram, Facebook & LinkedIn',
        'Professional medical graphics and video editing',
        'Patient education campaigns and myth-busting',
        'Community management and review monitoring',
        'Influencer and local partnership collaborations'
      ]
    },
    {
      id: 'ads',
      icon: Target,
      title: 'High-Intent Lead Generation Campaigns',
      description: 'Run Google & Meta ads for immediate patient leads. Optimize campaigns for conversions, not clicks. Reduce cost per lead and increase ROI.',
      benefits: [
        'Google Search Ads targeting specific treatments/conditions',
        'Meta (Facebook/Instagram) Ads for visual specialties',
        'Retargeting campaigns to capture lost website visitors',
        'A/B testing of ad copy and creative assets',
        'Continuous ROI tracking and budget optimization'
      ]
    },
    {
      id: 'funnels',
      icon: MousePointerClick,
      title: 'Conversion-Focused Patient Funnels',
      description: 'High-performing websites and landing pages. Designed to convert visitors into patients. Mobile-first and fast-loading experience.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      alt: 'High-converting medical website on a laptop',
      benefits: [
        'Custom landing pages for specific medical campaigns',
        'HIPAA-compliant lead capture forms',
        'Mobile-first, lightning-fast website development',
        'Clear calls-to-action and user journey mapping',
        'Integration with your practice management software'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | DG Stream - Healthcare Marketing</title>
        <meta name="description" content="Patient Acquisition & Growth Services for Healthcare Brands. Explore our SEO, performance marketing, and digital strategies." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="pt-20">
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-white mb-6">
                Patient Acquisition & Growth Services for Healthcare Brands
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                We provide end-to-end digital marketing solutions designed specifically for medical practices to attract, engage, and convert high-value patients.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container">
            <div className="space-y-24 lg:space-y-32">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                if (!service.image) {
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="max-w-5xl mx-auto bg-card rounded-[2.5rem] p-8 md:p-16 border border-border shadow-premium"
                    >
                      <div className="text-center mb-10">
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 mx-auto">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="mb-6">{service.title}</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="bg-muted/30 rounded-3xl p-8 md:p-10 mb-10 border border-border">
                        <h4 className="text-lg font-bold mb-8 text-center">Key Implementation Details:</h4>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                              <span className="font-medium text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-center">
                        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl px-8">
                          <Link to="/contact">Start Growing My Practice</Link>
                        </Button>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <div key={service.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={!isEven ? 'lg:order-2' : ''}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="mb-6">{service.title}</h2>
                      <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="bg-muted/30 rounded-3xl p-8 mb-10 border border-border">
                        <h4 className="text-lg font-bold mb-6">Key Implementation Details:</h4>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                              <span className="font-medium text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl px-8">
                        <Link to="/contact">Start Growing My Practice</Link>
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-premium bg-muted ${!isEven ? 'lg:order-1' : ''}`}
                    >
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30 border-t border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-8">Our Approach to Healthcare Marketing</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We don't believe in one-size-fits-all. Every medical specialty has unique patient journeys, compliance requirements, and conversion triggers. We build custom strategies based on data, not guesswork.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl px-10 py-7 text-lg">
                <Link to="/contact">Get Your Custom Growth Plan</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;