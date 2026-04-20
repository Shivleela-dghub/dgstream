import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function ContactPage() {
  const [industry, setIndustry] = useState('');

  return (
    <div>
      <Helmet>
        <title>Contact Us | Get a Custom Growth Plan</title>
        <meta name="description" content="Tell us about your business and our team will get in touch within 24 hours to build your custom growth plan." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="pt-20 bg-muted/20 min-h-screen">
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6">Get a Custom Growth Plan</h1>
                <p className="text-xl text-muted-foreground">
                  Tell us about your business and our team will get in touch within 24 hours.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
              {/* Form Section */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-premium border border-border space-y-4">
                  <Label htmlFor="industry" className="text-lg font-bold text-foreground">Select Your Industry *</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry" className="h-14 bg-muted/50 border-border text-foreground focus-visible:ring-primary rounded-xl px-4 text-lg">
                      <SelectValue placeholder="Choose Healthcare or Retail" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <AnimatePresence mode="wait">
                  {industry && (
                    <motion.div
                      key={industry}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ContactForm 
                        inquiryType={industry} 
                        className="space-y-8 bg-card rounded-[2.5rem] p-8 md:p-12 shadow-premium border border-border"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact Info Section */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 flex flex-col gap-6 sticky top-28"
              >
                <div className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 shadow-premium flex flex-col justify-center">
                  <h3 className="text-white mb-8">Direct Contact</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">Email Us</div>
                        <a href="mailto:contact@dgstream.in" className="text-primary-foreground/80 hover:text-white transition-colors text-lg">
                          contact@dgstream.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">Call Us</div>
                        <a href="tel:9731361100" className="text-primary-foreground/80 hover:text-white transition-colors text-lg">
                          9731361100
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">WhatsApp</div>
                        <a href="https://wa.me/9731361100" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-[#25D366] transition-colors text-lg">
                          Chat with our team
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">Business Hours</div>
                        <div className="text-primary-foreground/80 text-lg">
                          Mon-Sat 9AM-7PM IST
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;