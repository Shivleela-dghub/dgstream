import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import apiServerClient from '@/lib/apiServerClient';

function ContactForm({ 
  inquiryType = 'healthcare', 
  fieldLabels = {},
  className = "space-y-6 bg-card p-8 rounded-3xl border border-border shadow-premium"
}) {
  const isHealthcare = inquiryType === 'healthcare';
  const accentColor = isHealthcare ? 'healthcare' : 'retail';
  
  const placeholders = {
    healthcare: {
      name: 'e.g., Dr. Rajesh Kumar',
      email: 'e.g., rajesh@clinic.com',
      phone: 'e.g., +91 98765 43210'
    },
    retail: {
      name: 'e.g., Priya Sharma',
      email: 'e.g., priya@store.com',
      phone: 'e.g., +91 98765 43210'
    }
  };

  const currentPlaceholders = placeholders[inquiryType] || placeholders.healthcare;

  const labels = {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    clinicType: 'Clinic Type',
    lookingFor: 'Looking For',
    businessCategory: 'Business Category',
    businessModel: 'Business Model',
    whereDoYouSell: 'Where Do You Sell Currently',
    currentStage: 'Current Business Stage',
    message: 'Message',
    ...fieldLabels
  };

  const healthcareClinicTypes = [
    "Dental Clinic", "Dermatology", "IVF Center", "Hospital", 
    "Diagnostic Center", "Individual Practitioner", "Multi-Specialty Clinic", "Other"
  ];

  const healthcareLookingFor = [
    "Patient Acquisition", "SEO & Local Search", "Social Media Management", "Website Development"
  ];

  const retailCategories = [
    "Fashion & Apparel", "Lifestyle", "Beauty & Cosmetics", 
    "Electronics", "Home Decor", "Health & Wellness", "Other"
  ];

  const retailModels = [
    "D2C", "B2B", "Marketplace Seller", "Omnichannel"
  ];

  const retailChannels = [
    "Own Website", "Marketplaces", "Social Media", "Physical Retail", "Multiple Channels"
  ];

  const retailStages = [
    "Just Starting", "Growing (Consistent Sales)", "Scaling (High Volume)", "Established Brand"
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicType: '',
    lookingFor: '',
    businessCategory: '',
    businessModel: '',
    whereDoYouSell: '',
    currentStage: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in your name, email, and phone number.');
      return;
    }

    if (isHealthcare && (!formData.clinicType || !formData.lookingFor)) {
      toast.error('Please fill in all required healthcare fields.');
      return;
    }

    if (!isHealthcare && (!formData.businessCategory || !formData.businessModel || !formData.whereDoYouSell || !formData.currentStage)) {
      toast.error('Please fill in all required retail fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        industryType: inquiryType, // Map inquiryType to backend's expected industryType
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        ...(isHealthcare ? {
          clinicType: formData.clinicType,
          lookingFor: formData.lookingFor
        } : {
          businessCategory: formData.businessCategory,
          businessModel: formData.businessModel,
          whereDoYouSell: formData.whereDoYouSell,
          currentStage: formData.currentStage
        })
      };

      const response = await apiServerClient.fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || 'Submission failed');
      }

      toast.success(`Thank you! We've sent a confirmation email to ${formData.email}. Our team will contact you within 24 hours.`);
      
      setFormData({
        name: '', email: '', phone: '', clinicType: '', lookingFor: '',
        businessCategory: '', businessModel: '', whereDoYouSell: '', currentStage: '', message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Form submitted but email confirmation failed. Please check your email or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-foreground font-bold">{labels.name} *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}
            placeholder={currentPlaceholders.name}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="email" className="text-foreground font-bold">{labels.email} *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}
            placeholder={currentPlaceholders.email}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="phone" className="text-foreground font-bold">{labels.phone} *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}
            placeholder={currentPlaceholders.phone}
          />
        </div>

        {isHealthcare ? (
          <div className="space-y-3">
            <Label htmlFor="clinicType" className="text-foreground font-bold">{labels.clinicType} *</Label>
            <Select value={formData.clinicType} onValueChange={(val) => handleSelectChange('clinicType', val)} required>
              <SelectTrigger id="clinicType" className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}>
                <SelectValue placeholder="Select practice type" />
              </SelectTrigger>
              <SelectContent>
                {healthcareClinicTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="space-y-3">
            <Label htmlFor="businessCategory" className="text-foreground font-bold">{labels.businessCategory} *</Label>
            <Select value={formData.businessCategory} onValueChange={(val) => handleSelectChange('businessCategory', val)} required>
              <SelectTrigger id="businessCategory" className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {retailCategories.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {isHealthcare ? (
        <div className="space-y-3">
          <Label htmlFor="lookingFor" className="text-foreground font-bold">{labels.lookingFor} *</Label>
          <Select value={formData.lookingFor} onValueChange={(val) => handleSelectChange('lookingFor', val)} required>
            <SelectTrigger id="lookingFor" className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {healthcareLookingFor.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="businessModel" className="text-foreground font-bold">{labels.businessModel} *</Label>
              <Select value={formData.businessModel} onValueChange={(val) => handleSelectChange('businessModel', val)} required>
                <SelectTrigger id="businessModel" className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {retailModels.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="whereDoYouSell" className="text-foreground font-bold">{labels.whereDoYouSell} *</Label>
              <Select value={formData.whereDoYouSell} onValueChange={(val) => handleSelectChange('whereDoYouSell', val)} required>
                <SelectTrigger id="whereDoYouSell" className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}>
                  <SelectValue placeholder="Select primary channel" />
                </SelectTrigger>
                <SelectContent>
                  {retailChannels.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="currentStage" className="text-foreground font-bold">{labels.currentStage} *</Label>
            <Select value={formData.currentStage} onValueChange={(val) => handleSelectChange('currentStage', val)} required>
              <SelectTrigger id="currentStage" className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} h-12 rounded-xl`}>
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                {retailStages.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      <div className="space-y-3">
        <Label htmlFor="message" className="text-foreground font-bold">{labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`bg-muted/50 border-border text-foreground focus-visible:ring-${accentColor} rounded-xl resize-none p-4`}
          placeholder="Tell us about your goals..."
        />
      </div>

      <Button 
        type="submit" 
        className={`w-full text-white text-lg py-7 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all ${
          isHealthcare ? 'bg-healthcare hover:bg-healthcare-dark' : 'bg-retail hover:bg-retail-dark'
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get My Growth Plan'}
      </Button>
    </form>
  );
}

export default ContactForm;