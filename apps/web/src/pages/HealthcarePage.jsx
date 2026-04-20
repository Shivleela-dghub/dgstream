import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, HeartPulse, Target, MousePointerClick, CheckCircle2, TrendingUp, Activity } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function HealthcarePage() {
  const services = [
    {
      icon: Search,
      title: 'Patient Acquisition via SEO',
      description: 'Rank your practice on Google for high-intent patient searches. Drive consistent organic inquiries. Dominate local search and Google Maps.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      alt: 'Doctor analyzing SEO data on a tablet'
    },
    {
      icon: HeartPulse,
      title: 'Patient Engagement & Trust Building',
      description: 'Build strong brand presence on social media. Educate and engage patients with content. Increase credibility and recall.',
      image: 'https://horizons-cdn.hostinger.com/e44a4e70-03b5-4831-8a3e-3511764de6f4/f2aa0c252cfee45852a3a48d4bdd35b2.png',
      alt: 'Healthcare professionals and patients engaging in digital consultation and appointment booking'
    },
    {
      icon: Target,
      title: 'High-Intent Lead Generation Campaigns',
      description: 'Run Google & Meta ads for immediate patient leads. Optimize campaigns for conversions, not clicks. Reduce cost per lead and increase ROI.',
      image: 'https://horizons-cdn.hostinger.com/e44a4e70-03b5-4831-8a3e-3511764de6f4/a9fdf642e4467a29c4ddd138ce506ead.png',
      alt: 'Doctor with laptop showing digital marketing analytics, targeting, and conversion metrics'
    },
    {
      icon: MousePointerClick,
      title: 'Conversion-Focused Patient Funnels',
      description: 'High-performing websites and landing pages. Designed to convert visitors into patients. Mobile-first and fast-loading experience.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      alt: 'High-converting medical website on a laptop'
    }
  ];

  const caseStudies = [
    {
      type: 'Multi-Specialty Clinic Growth',
      metrics: [
        { label: 'Leads', value: '30→120/mo' },
        { label: 'Cost per lead', value: '-40%' },
        { label: 'ROI', value: '3.5x' }
      ],
      span: 'md:col-span-2'
    },
    {
      type: 'Dental Clinic',
      metrics: [
        { label: 'Appointments', value: '15→65/mo' },
        { label: 'Organic traffic', value: '+250%' },
        { label: 'Acquisition cost', value: '-35%' }
      ],
      span: 'md:col-span-1'
    },
    {
      type: 'Diagnostic Center',
      metrics: [
        { label: 'Test bookings', value: '+180%' },
        { label: 'Cost per booking', value: '-45%' },
        { label: 'Revenue', value: '2.8x' }
      ],
      span: 'md:col-span-1'
    },
    {
      type: 'Fertility Center',
      metrics: [
        { label: 'Consultations', value: '8→35/mo' },
        { label: 'Lead quality', value: '+60%' },
        { label: 'Conversion rate', value: '2.2x' }
      ],
      span: 'md:col-span-2'
    }
  ];

  const scrollToCaseStudies = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Healthcare Marketing Solutions | DG Stream</title>
        <meta name="description" content="DG Stream helps clinics, hospitals, and healthcare brands generate high-quality patient leads through SEO, performance marketing, and high-converting digital strategies." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?auto=format&fit=crop&q=80" 
              alt="Healthcare professionals in a modern clinic setting"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-white mb-6">
                  Get More Patients, <br/>
                  <span className="text-healthcare">Not Just Traffic</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                  DG Stream helps clinics, hospitals, and healthcare brands generate high-quality patient leads through SEO, performance marketing, and high-converting digital strategies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-healthcare text-white hover:bg-healthcare-dark text-lg px-8 py-7 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <a href="#contact-section">Get Patient Growth Plan</a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-7 rounded-xl bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm font-semibold transition-all"
                    onClick={scrollToCaseStudies}
                  >
                    See How We Deliver Results
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="mb-6">Outcome-Driven Healthcare Marketing</h2>
              <p className="text-xl text-muted-foreground">
                We don't just build campaigns; we build patient acquisition engines tailored for medical practices.
              </p>
            </div>

            <div className="space-y-24">
              {services.map((service, index) => {
                const isEven = index % 2 === 0;
                const Icon = service.icon;
                
                return (
                  <div key={index} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={!isEven ? 'md:order-2' : ''}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-healthcare/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-healthcare" />
                      </div>
                      <h3 className="mb-4">{service.title}</h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {['Data-driven approach', 'Healthcare compliant', 'Measurable ROI'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                            <CheckCircle2 className="w-5 h-5 text-healthcare" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="bg-healthcare text-white hover:bg-healthcare-dark font-bold rounded-xl px-8">
                        <a href="#contact-section">Start Growing My Practice</a>
                      </Button>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`relative ${!isEven ? 'md:order-1' : ''}`}
                    >
                      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium bg-muted">
                        <img 
                          src={service.image} 
                          alt={service.alt}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-healthcare/20 rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HEALTHCARE SPECIALTIES SECTION */}
        <section className="py-24 lg:py-32 bg-muted/30 border-y border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">We Work With Growth-Focused Healthcare Brands</h2>
              <p className="text-xl text-muted-foreground">
                We partner with healthcare practices that are ready to invest in growth and scale patient acquisition.
              </p>
            </div>

            <Tabs defaultValue="dental" className="w-full max-w-5xl mx-auto">
              <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
                <TabsList className="h-auto p-1.5 bg-background border shadow-sm rounded-2xl inline-flex flex-wrap justify-center gap-2">
                  <TabsTrigger value="dental" className="px-5 py-2.5 rounded-xl text-sm font-semibold data-[state=active]:bg-healthcare data-[state=active]:text-white">Dental Clinics</TabsTrigger>
                  <TabsTrigger value="derma" className="px-5 py-2.5 rounded-xl text-sm font-semibold data-[state=active]:bg-healthcare data-[state=active]:text-white">Dermatology & Aesthetic</TabsTrigger>
                  <TabsTrigger value="ivf" className="px-5 py-2.5 rounded-xl text-sm font-semibold data-[state=active]:bg-healthcare data-[state=active]:text-white">Fertility & IVF</TabsTrigger>
                  <TabsTrigger value="hospital" className="px-5 py-2.5 rounded-xl text-sm font-semibold data-[state=active]:bg-healthcare data-[state=active]:text-white">Hospitals</TabsTrigger>
                  <TabsTrigger value="diagnostic" className="px-5 py-2.5 rounded-xl text-sm font-semibold data-[state=active]:bg-healthcare data-[state=active]:text-white">Diagnostics</TabsTrigger>
                  <TabsTrigger value="more" className="px-5 py-2.5 rounded-xl text-sm font-semibold data-[state=active]:bg-healthcare data-[state=active]:text-white">View More</TabsTrigger>
                  <TabsTrigger value="custom" className="px-5 py-2.5 rounded-xl text-sm font-semibold data-[state=active]:bg-healthcare data-[state=active]:text-white">Your Specialty</TabsTrigger>
                </TabsList>
              </div>

              {[
                { id: 'dental', metrics: 'Generate 40–120 appointment leads per month. Rank for high-intent dental keywords. Improve conversion rates significantly.', cta: 'Grow My Dental Practice' },
                { id: 'derma', metrics: 'Attract premium clients through visual marketing. Increase treatment bookings via ads. Build strong Instagram presence.', cta: 'Get More Aesthetic Clients' },
                { id: 'ivf', metrics: 'Generate high-value consultation leads. Build trust through emotional storytelling. Optimize lead nurturing funnels.', cta: 'Increase IVF Consultations' },
                { id: 'hospital', metrics: 'Strengthen brand authority. Multi-department marketing strategy. Increase patient inflow across services.', cta: 'Strengthen Hospital Brand' },
                { id: 'diagnostic', metrics: 'Increase test bookings through ads. Improve local visibility. Fast lead conversion funnels.', cta: 'Increase Test Bookings' }
              ].map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0 outline-none">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-3xl p-8 md:p-12 border shadow-premium text-center max-w-3xl mx-auto"
                  >
                    <Activity className="w-12 h-12 text-healthcare mx-auto mb-6" />
                    <p className="text-xl md:text-2xl font-medium text-foreground mb-10 leading-relaxed">
                      "{tab.metrics}"
                    </p>
                    <Button asChild size="lg" className="bg-healthcare text-white hover:bg-healthcare-dark font-bold rounded-xl px-8">
                      <a href="#contact-section">{tab.cta}</a>
                    </Button>
                  </motion.div>
                </TabsContent>
              ))}

              <TabsContent value="more" className="mt-0 outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-3xl p-8 md:p-12 border shadow-premium max-w-3xl mx-auto"
                >
                  <h3 className="text-center mb-8">Other Specialties We Serve</h3>
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    {['Orthopedic & Spine', 'Cosmetic & Plastic Surgery', 'Cardiology', 'Pediatrics', 'Ophthalmology', 'Psychiatry'].map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                        <CheckCircle2 className="w-5 h-5 text-healthcare" />
                        <span className="font-semibold">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button asChild size="lg" className="bg-healthcare text-white hover:bg-healthcare-dark font-bold rounded-xl px-8">
                      <a href="#contact-section">Grow My Practice</a>
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="custom" className="mt-0 outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 border shadow-premium text-center max-w-3xl mx-auto"
                >
                  <h3 className="text-white mb-6">Don't see your specialty?</h3>
                  <p className="text-xl text-primary-foreground/80 mb-10">
                    We build custom, high-converting growth strategies for all types of healthcare practices. Let's discuss your specific needs.
                  </p>
                  <Button asChild size="lg" className="bg-healthcare text-white hover:bg-healthcare-dark font-bold rounded-xl px-8">
                    <a href="#contact-section">Tell Us Your Specialty</a>
                  </Button>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section id="case-studies" className="py-24 lg:py-32 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">How We Grow Healthcare Brands</h2>
              <p className="text-xl text-muted-foreground">
                Real results from healthcare practices we've partnered with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {caseStudies.map((study, index) => (
                <Card key={index} className={`bg-card border-border shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden group ${study.span}`}>
                  <CardContent className="p-8 md:p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-healthcare/10 text-healthcare text-sm font-bold mb-6">
                        <TrendingUp className="w-4 h-4" />
                        {study.type}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="border-l-2 border-healthcare/30 pl-4">
                            <div className="text-3xl font-extrabold text-foreground mb-1">{metric.value}</div>
                            <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact-section" className="py-24 bg-muted/30 border-t border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-4xl md:text-5xl">Ready to grow your practice?</h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Let's build a custom digital strategy that drives real patient acquisition and revenue growth for your healthcare brand.
                </p>
                <div className="space-y-6">
                  {[
                    'Customized patient acquisition strategy',
                    'Transparent reporting and ROI tracking',
                    'HIPAA-compliant marketing practices',
                    'Dedicated healthcare marketing experts'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-healthcare/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-healthcare" />
                      </div>
                      <span className="text-lg font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactForm 
                  inquiryType="healthcare"
                  fieldLabels={{
                    name: 'Full Name',
                    email: 'Email Address',
                    phone: 'Phone Number',
                    clinicType: 'Clinic Type',
                    lookingFor: 'Looking for',
                    message: 'Message (Optional)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HealthcarePage;