import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Stethoscope } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const mainSpecialties = [
  {
    id: 'dental',
    title: 'Cosmetic Dentistry & Dental Clinics',
    image: 'https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81',
    content: 'Focus on high-ticket treatments (implants, smile design). Strong need for local SEO and paid ads. Visual marketing (before/after transformations).',
    cta: 'Grow My Dental Practice'
  },
  {
    id: 'dermatology',
    title: 'Dermatology & Aesthetic Clinics',
    image: 'https://images.unsplash.com/photo-1634449862841-8c6e970117e5',
    content: 'High demand for skin, laser, and anti-aging treatments. Heavy reliance on Instagram and paid ads. Premium branding and influencer-driven marketing.',
    cta: 'Get More Aesthetic Clients'
  },
  {
    id: 'fertility',
    title: 'Fertility & IVF Centers',
    image: 'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3',
    content: 'High-value patient acquisition. Emotional decision-driven marketing. Need for trust-building and lead nurturing funnels.',
    cta: 'Increase IVF Consultations'
  },
  {
    id: 'hospital',
    title: 'Multi-Specialty & Private Hospitals',
    image: 'https://images.unsplash.com/photo-1580281657702-257584239a55',
    content: 'Large-scale branding and patient acquisition. Multi-department marketing strategies. Strong need for SEO, ads, and reputation management.',
    cta: 'Strengthen Hospital Brand'
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Centers & Labs',
    image: 'https://images.unsplash.com/photo-1657778752500-9da406aa813f',
    content: 'High-volume patient flow business. Dependence on Google Ads and local visibility. Fast conversion-focused landing pages required.',
    cta: 'Increase Test Bookings'
  }
];

const additionalSpecialties = [
  {
    title: 'Orthopedic & Spine Clinics',
    content: 'High-value surgeries and treatments, condition-based search demand (knee, spine issues), need for educational and video-based marketing.',
    cta: 'Get More Surgery Leads'
  },
  {
    title: 'Cosmetic & Plastic Surgery Clinics',
    content: 'Premium, high-ticket procedures, visual storytelling and patient transformation content, strong need for branding and paid campaigns.',
    cta: 'Attract Premium Clients'
  },
  {
    title: 'Cardiology & Lifestyle Disease Clinics',
    content: 'Preventive care and recurring patients, trust-driven marketing, SEO + awareness campaigns critical.',
    cta: 'Increase Patient Appointments'
  }
];

function HealthcareSpecialtiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">High-Growth Healthcare Specialties We Empower</h2>
          <p className="text-xl text-muted-foreground">
            We partner with healthcare practices that are ready to scale, attract high-value patients, and invest in consistent digital growth.
          </p>
        </motion.div>

        <Tabs defaultValue="dental" className="w-full mb-16">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
            <TabsList className="h-auto p-1.5 bg-background border shadow-sm rounded-2xl inline-flex">
              {mainSpecialties.map((specialty) => (
                <TabsTrigger 
                  key={specialty.id} 
                  value={specialty.id}
                  className="px-6 py-3 rounded-xl text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  {specialty.title.split('&')[0].trim()}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {mainSpecialties.map((specialty) => (
            <TabsContent key={specialty.id} value={specialty.id} className="mt-0 outline-none">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl overflow-hidden border shadow-premium grid lg:grid-cols-2 gap-0"
              >
                <div className="relative h-72 lg:h-auto min-h-[400px]">
                  <img 
                    src={specialty.image} 
                    alt={specialty.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary/10 mix-blend-multiply" />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{specialty.title}</h3>
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                    {specialty.content}
                  </p>
                  <div>
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg transition-all duration-300 text-lg px-8 py-6 rounded-xl">
                      <Link to="/contact">
                        {specialty.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer group hover:shadow-premium-hover hover:border-primary/30 transition-all duration-300 bg-card">
                <CardContent className="p-8 flex items-center justify-between h-full">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">View More Specialties</h4>
                    <p className="text-muted-foreground">Explore other healthcare fields we specialize in.</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Plus className="w-6 h-6 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-3xl">
              <DialogHeader className="p-8 pb-0">
                <DialogTitle className="text-2xl md:text-3xl text-primary">More Healthcare Specialties</DialogTitle>
              </DialogHeader>
              <div className="p-8 grid gap-6 max-h-[70vh] overflow-y-auto">
                {additionalSpecialties.map((spec, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-muted/50 border border-border/50">
                    <h4 className="text-xl font-bold text-primary mb-3">{spec.title}</h4>
                    <p className="text-muted-foreground mb-6">{spec.content}</p>
                    <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/5 text-primary">
                      <Link to="/contact">{spec.cta}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Card className="bg-primary text-primary-foreground border-none shadow-premium">
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-white">Don't see your specialty?</h4>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                We work with all healthcare practices to build custom, high-converting growth strategies.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit">
                <Link to="/contact">Tell Us Your Specialty</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-card border shadow-premium rounded-3xl p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
              Make Your Healthcare Practice Visible
            </h2>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact">Start My Growth Journey</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HealthcareSpecialtiesSection;