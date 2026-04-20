import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, CheckCircle2, TrendingUp, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Performance-Driven',
      description: 'We make decisions based on analytics and performance metrics, ensuring every marketing dollar is optimized for acquisition.'
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'We understand the unique challenges, compliance, and psychology of marketing in both healthcare and retail sectors.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear reporting, honest communication, and full visibility into how your campaigns are performing.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead of digital trends to provide cutting-edge strategies that keep you ahead of the competition.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We act as an extension of your team, fully invested in your long-term success and brand reputation.'
    }
  ];

  const healthcareTypes = [
    'Individual Practitioner', 'Multi-Specialty Clinic', 'Polyclinic', 'Nursing Home',
    'Multi-Specialty Hospital', 'Super-Specialty Hospital', 'Diagnostic Center / Lab',
    'Dental Clinic', 'Dermatology / Aesthetic Clinic', 'Fertility / IVF Center',
    'Cosmetic / Plastic Surgery Clinic', 'Mental Health Clinic', 'Alternative Medicine Clinic',
    'Clinic Chain / Healthcare Network', 'Physiotherapy / Rehab Center'
  ];

  const retailTypes = [
    'Lifestyle Brands', 'Fashion Brands', 'Apparel Brands', 'D2C Brands', 'E-commerce Stores'
  ];

  return (
    <>
      <Helmet>
        <title>About Us | DG Stream</title>
        <meta name="description" content="DG Stream is a growth-focused digital marketing partner dedicated to helping healthcare and retail brands build visibility, trust, and consistent revenue." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6">About DG Stream</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
                  Digital Marketing Excellence for <span className="text-healthcare font-semibold">Healthcare</span> & <span className="text-retail font-semibold">Retail</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION SECTION */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm"
              >
                <h2 className="text-white mb-6">Our Mission</h2>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  To empower healthcare and retail brands with data-driven strategies that drive measurable growth. We bridge the gap between exceptional services/products and the customers actively searching for them.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm"
              >
                <h2 className="text-white mb-6">Our Vision</h2>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  To be the most trusted digital growth partner globally, creating a landscape where quality practices and brands are easily discoverable, enabling consumers to make informed decisions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide our strategies and client partnerships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 justify-center">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-3" : ""}
                  >
                    <Card className="h-full bg-card border-border shadow-sm hover:shadow-premium transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl mb-4">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DUAL INDUSTRY OVERVIEW SECTION */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Healthcare Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full bg-card border-border shadow-premium hover:shadow-premium-hover transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="h-64 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1666056445151-57949bacdd60?auto=format&fit=crop&q=80" alt="Healthcare Professional" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-healthcare/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-3xl text-white font-bold">Healthcare Marketing</h2>
                    </div>
                  </div>
                  <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Empower your medical practice with data-driven patient acquisition, engagement, and trust-building strategies.
                    </p>
                    <div className="space-y-4 mb-10 flex-1">
                      {['Patient Acquisition via SEO', 'Patient Engagement & Trust Building', 'High-Intent Lead Generation', 'Conversion-Focused Patient Funnels'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-healthcare shrink-0" />
                          <span className="font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-healthcare text-white hover:bg-healthcare-dark font-bold rounded-xl py-6 text-lg mt-auto">
                      <Link to="/healthcare">Explore Healthcare Solutions</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Retail Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-card border-border shadow-premium hover:shadow-premium-hover transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="h-64 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1651326848981-349fd8aadb37?auto=format&fit=crop&q=80" alt="Retail E-commerce" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-retail/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-3xl text-white font-bold">Retail & E-commerce</h2>
                    </div>
                  </div>
                  <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Scale revenue for your lifestyle, fashion, or apparel brand through performance marketing and conversion-focused strategies.
                    </p>
                    <div className="space-y-4 mb-10 flex-1">
                      {['Performance Marketing (Sales Focused)', 'E-commerce SEO & Organic Growth', 'Social Media & Brand Building', 'Conversion Optimization & Funnels'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-retail shrink-0" />
                          <span className="font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-retail text-white hover:bg-retail-dark font-bold rounded-xl py-6 text-lg mt-auto">
                      <Link to="/retail">Explore Retail Solutions</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH SECTION */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Who We Work With</h2>
              <p className="text-xl text-muted-foreground">
                We partner with growth-oriented brands ready to dominate their market.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl text-healthcare mb-8 text-center">Healthcare Clients</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {healthcareTypes.map((type, index) => (
                  <div key={index} className="bg-healthcare/10 border border-healthcare/20 text-healthcare px-5 py-2.5 rounded-full text-sm font-semibold">
                    {type}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-retail mb-8 text-center">Retail Clients</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {retailTypes.map((type, index) => (
                  <div key={index} className="bg-retail/10 border border-retail/20 text-retail px-5 py-2.5 rounded-full text-sm font-semibold">
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container max-w-3xl">
            <h2 className="text-white mb-6 text-4xl md:text-5xl">Ready to Partner With Us?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Let's build a growth strategy that drives consistent results for your business.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-xl px-10 py-7 text-xl shadow-xl hover:-translate-y-1 transition-all">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;