import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  TrendingDown, Filter, EyeOff, BarChart3, 
  Target, Search, Share2, Zap, Code, 
  ShoppingBag, Shirt, ShoppingCart, ArrowRight,
  Rocket, Settings, CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function RetailPage() {
  const services = [
    {
      icon: Target,
      title: 'Performance Marketing',
      description: 'Google & Meta ads optimized for conversions and ROAS. We scale what works and cut what doesn\'t.'
    },
    {
      icon: Search,
      title: 'E-commerce SEO',
      description: 'Rank for high-intent product and category searches to drive sustainable, free traffic.'
    },
    {
      icon: Share2,
      title: 'Social Media & Brand Building',
      description: 'Engaging Instagram content, reels, and influencer strategies that build a loyal community.'
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Improve website conversion rates, reduce cart abandonment, and increase average order value.'
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Build fast, mobile-first, high-converting e-commerce websites on Shopify or custom stacks.'
    }
  ];

  const caseStudies = [
    {
      title: 'Fashion Brand Growth',
      image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f?auto=format&fit=crop&q=80&w=800',
      metrics: [
        { label: 'Sales', value: '2.5x' },
        { label: 'ROAS', value: '3x' },
        { label: 'Conv. Rate', value: 'Doubled' }
      ]
    },
    {
      title: 'E-commerce Store Scaling',
      image: 'https://images.unsplash.com/photo-1641833278434-50f92b93d65a?auto=format&fit=crop&q=80&w=800',
      metrics: [
        { label: 'Revenue', value: '3x' },
        { label: 'CAC', value: '-40%' },
        { label: 'AOV', value: '2x' }
      ]
    },
    {
      title: 'D2C Brand Launch',
      image: 'https://images.unsplash.com/photo-1686061592689-312bbfb5c055?auto=format&fit=crop&q=80&w=800',
      metrics: [
        { label: 'Revenue (6mo)', value: '5x' },
        { label: 'Engagement', value: '4x' },
        { label: 'Repeat Rate', value: '35%' }
      ]
    },
    {
      title: 'Apparel Brand Expansion',
      image: 'https://images.unsplash.com/photo-1651326848981-349fd8aadb37?auto=format&fit=crop&q=80&w=800',
      metrics: [
        { label: 'Online Sales', value: '2.8x' },
        { label: 'Web Traffic', value: '4x' },
        { label: 'Conv. Rate', value: '2.5x' }
      ]
    }
  ];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Helmet>
        <title>Retail & E-commerce Marketing | DG Stream</title>
        <meta name="description" content="DG Stream helps lifestyle, fashion, and apparel brands scale revenue through performance marketing, branding, and conversion-focused strategies." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1651326848981-349fd8aadb37?auto=format&fit=crop&q=80" 
              alt="Modern retail and fashion e-commerce concept"
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
                <h1 className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                  Turn Traffic Into <span className="text-retail">Sales</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                  DG Stream helps lifestyle, fashion, and apparel brands scale revenue through performance marketing, branding, and conversion-focused strategies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-retail text-white hover:bg-retail-dark text-lg px-8 py-7 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <a href="#contact-section">Scale My Brand</a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-7 rounded-xl bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm font-semibold transition-all"
                    onClick={scrollToServices}
                  >
                    See Growth Strategies
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-10">Not Getting Enough Sales From Your Marketing?</h2>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                  { text: 'High ad spend with low returns (ROAS)', icon: TrendingDown },
                  { text: 'Low website conversion rates', icon: Filter },
                  { text: 'Poor brand visibility in a crowded market', icon: EyeOff },
                  { text: 'Inconsistent sales growth month-over-month', icon: BarChart3 }
                ].map((problem, i) => {
                  const Icon = problem.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-destructive" />
                      </div>
                      <span className="font-medium text-lg">{problem.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Retail Growth Solutions</h2>
              <p className="text-xl text-muted-foreground">
                End-to-end digital strategies designed to acquire customers and maximize lifetime value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="bg-card border-border shadow-sm hover:shadow-premium transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-retail/10 flex items-center justify-center mb-6 group-hover:bg-retail/20 transition-colors">
                        <Icon className="w-7 h-7 text-retail transition-colors" />
                      </div>
                      <h3 className="text-xl mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* TARGET CLIENTS SECTION */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-6">Who We Work With</h2>
              <p className="text-xl text-primary-foreground/80">
                We partner with ambitious retail brands ready to dominate their market.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                { name: 'Lifestyle Brands', icon: ShoppingBag },
                { name: 'Fashion Brands', icon: Shirt },
                { name: 'E-commerce Stores', icon: ShoppingCart },
                { name: 'D2C Brands', icon: ArrowRight }
              ].map((client, i) => {
                const Icon = client.icon;
                return (
                  <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-semibold text-white hover:bg-white/20 transition-colors">
                    <Icon className="w-5 h-5" />
                    {client.name}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Results We've Delivered</h2>
              <p className="text-xl text-muted-foreground">
                Data-driven growth for retail and e-commerce brands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-card border-border shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-2xl text-white font-bold">{study.title}</h3>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="border-l-2 border-retail/30 pl-4">
                          <div className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{metric.value}</div>
                          <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">How We Scale Your Brand</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0"></div>

              {[
                { step: '1', icon: Search, title: 'Analyze & Strategize', desc: 'We audit your current performance, identify bottlenecks, and map out your ideal customer profile.' },
                { step: '2', icon: Rocket, title: 'Launch Campaigns', desc: 'We deploy targeted performance marketing, SEO, and social strategies to drive high-intent traffic.' },
                { step: '3', icon: Settings, title: 'Optimize & Scale', desc: 'Continuous A/B testing, funnel optimization, and scaling winning campaigns to maximize revenue.' }
              ].map((process, i) => {
                const Icon = process.icon;
                return (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-md flex items-center justify-center mb-6 relative">
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-retail text-white flex items-center justify-center font-bold text-sm">
                        {process.step}
                      </div>
                      <Icon className="w-10 h-10 text-retail" />
                    </div>
                    <h3 className="text-xl mb-4">{process.title}</h3>
                    <p className="text-muted-foreground">{process.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA & CONTACT SECTION */}
        <section id="contact-section" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1674027392842-29f8354e236c?auto=format&fit=crop&q=80" 
              alt="E-commerce growth background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <h2 className="mb-6 text-4xl md:text-5xl text-white">Ready to Scale Your Brand?</h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  Let's build a growth strategy that drives consistent sales and maximizes your return on ad spend.
                </p>
                <div className="space-y-6">
                  {[
                    'Data-driven performance marketing',
                    'Conversion rate optimization',
                    'Transparent ROI reporting',
                    'Dedicated e-commerce growth experts'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-retail/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-retail-light" />
                      </div>
                      <span className="text-lg font-medium text-white">{benefit}</span>
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
                  inquiryType="retail"
                  fieldLabels={{
                    name: 'Full Name',
                    email: 'Email Address',
                    phone: 'Phone Number',
                    businessCategory: 'Business Category',
                    businessModel: 'Business Model',
                    whereDoYouSell: 'Where Do You Sell Currently',
                    currentStage: 'Current Business Stage',
                    message: 'Message (Optional)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RetailPage;