import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartPulse, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>DG Stream - Digital Marketing Solutions for Healthcare & Retail</title>
        <meta name="description" content="DG Stream - Healthcare Marketing Expert. Digital marketing solutions for clinics, hospitals, and healthcare providers. Patient acquisition, engagement, and trust building." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden bg-background">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-healthcare via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-retail via-transparent to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl">
                  Digital Marketing Solutions for <br className="hidden md:block" />
                  <span className="text-healthcare">Healthcare</span> & <span className="text-retail">Retail</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  Scale your business with industry-specific growth strategies designed to acquire customers, build trust, and maximize revenue.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-healthcare text-white hover:bg-healthcare-dark text-lg px-8 py-7 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                    <Link to="/healthcare">
                      Healthcare Solutions
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-retail text-white hover:bg-retail-dark text-lg px-8 py-7 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                    <Link to="/retail">
                      Retail Solutions
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INDUSTRY SHOWCASE SECTION */}
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
                  <div className="h-48 bg-healthcare/10 relative overflow-hidden flex items-center justify-center">
                    <HeartPulse className="w-24 h-24 text-healthcare/20 absolute" />
                    <h2 className="relative z-10 text-3xl text-healthcare">Healthcare Marketing</h2>
                  </div>
                  <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Empower your medical practice with data-driven patient acquisition, engagement, and trust-building strategies. We bridge the gap between exceptional care and patients actively searching for it.
                    </p>
                    
                    <div className="space-y-4 mb-10 flex-1">
                      {[
                        'Patient Acquisition via SEO',
                        'Patient Engagement & Trust Building',
                        'High-Intent Lead Generation',
                        'Conversion-Focused Patient Funnels'
                      ].map((item, i) => (
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
                  <div className="h-48 bg-retail/10 relative overflow-hidden flex items-center justify-center">
                    <ShoppingBag className="w-24 h-24 text-retail/20 absolute" />
                    <h2 className="relative z-10 text-3xl text-retail">Retail & E-commerce Marketing</h2>
                  </div>
                  <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Scale revenue for your lifestyle, fashion, or apparel brand through performance marketing, branding, and conversion-focused strategies designed to turn traffic into sales.
                    </p>
                    
                    <div className="space-y-4 mb-10 flex-1">
                      {[
                        'Performance Marketing (Sales Focused)',
                        'E-commerce SEO & Organic Growth',
                        'Social Media & Brand Building',
                        'Conversion Optimization & Funnels',
                        'Website Development (E-commerce)'
                      ].map((item, i) => (
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
      </main>

      <Footer />
    </>
  );
}

export default HomePage;