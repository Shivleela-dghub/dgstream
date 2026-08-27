"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validations/contact.schema";
import { toast, Toaster } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Instagram, X, Loader2 } from "lucide-react";
import { BtnLime } from "../shared/Button";
import { submitContactForm } from "@/services/contactService"

const services = [
  "SEO SERVICES",
  "GOOGLE & META ADS",
  "WEBSITE DEVELOPMENT",
  "BRANDING & CREATIVE",
  "SOFTWARE & IT SOLUTIONS",
  "AI AUTOMATION",
  "AI Creative",
  "3D Product Visualization",
  "Interior & Architectural Visualization",
  "Digital Experiences",
  "Branding",
  "BPO & AI Annotation"
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "", email: "", company: "", city: "", phone: "", services: [], budget: "", about_project: ""
    },
  });

  const selectedServices = watch("services");

  const toggleService = (service) => {
    const current = selectedServices || [];
    if (current.includes(service)) {
      setValue("services", current.filter((s) => s !== service), { shouldValidate: true });
    } else {
      setValue("services", [...current, service], { shouldValidate: true });
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await submitContactForm(data);
      console.log(res);
      if (res.success) {
        toast.success(`Thank you! We've sent a confirmation email to ${data.email}. Our team will contact you within 24 hours.`);
        reset();
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-10 py-[2rem] pb-[3rem] md:pb-[4rem]">
      <div className="container mx-auto px-0 sm:px-6 grid lg:grid-cols-3 gap-8 lg:gap-10">

        <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-2" noValidate>
          <div className="grid sm:grid-cols-2 gap-6">

            <div>
              <label htmlFor="name" className="text-xs uppercase font-mono tracking-widest text-black mb-2 block">FULL NAME</label>
              <input id="name" type="text" autoComplete="name" placeholder="Jordan Lee" {...register("name")}
                className={`w-full border-2 px-4 py-3 text-sm focus:outline-none focus:border-[#8AB300] ${errors.name ? "border-red-500" : "border-slate-200"}`} />
              {errors.name && <p className="text-red-500 text- mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-xs uppercase font-mono tracking-widest text-black mb-2 block">WORK EMAIL</label>
              <input id="email" type="email" autoComplete="email" placeholder="you@company.com" {...register("email")}
                className={`w-full border-2 px-4 py-3 text-sm focus:outline-none focus:border-[#8AB300] ${errors.email ? "border-red-500" : "border-slate-200"}`} />
              {errors.email && <p className="text-red-500 text- mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="company" className="text-xs uppercase font-mono tracking-widest text-black mb-2 block">COMPANY</label>
              <input id="company" type="text" placeholder="Company name" {...register("company")}
                className={`w-full border-2 px-4 py-3 text-sm focus:outline-none focus:border-[#8AB300] ${errors.company ? "border-red-500" : "border-slate-200"}`} />
              {errors.company && <p className="text-red-500 text- mt-1">{errors.company.message}</p>}
            </div>
            <div>
              <label htmlFor="company" className="text-xs uppercase font-mono tracking-widest text-black mb-2 block">city</label>
              <input id="city" type="text" placeholder="City name" {...register("city")}
                className={`w-full border-2 px-4 py-3 text-sm focus:outline-none focus:border-[#8AB300] ${errors.city ? "border-red-500" : "border-slate-200"}`} />
              {errors.city && <p className="text-red-500 text- mt-1">{errors.city.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="text-xs uppercase font-mono tracking-widest text-black mb-2 block">
                Whatsapp number
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                {...register("phone", {
                  validate: (value) => {
                    if (!value) return false; // optional, so empty is ok

                    // 1. India 10 digits: starts with 6-9
                    const indiaRegex = /^[6-9]\d{9}$/;
                    const cleanPhone = value.replace(/\D/g, ""); // remove spaces, +, -

                    return indiaRegex.test(cleanPhone) || "Enter a valid 10 digit phone number";
                  }
                })}
                className="w-full border-2 border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#8AB300]"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <fieldset className="mt-8">
            <legend className="text-xs uppercase font-mono tracking-widest text-black mb-3 block">WHAT DO YOU NEED HELP WITH?</legend>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service) => {
                const id = `service-${service.toLowerCase().replace(/ & | /g, "-")}`
                const checked = selectedServices?.includes(service)
                return (
                  <div key={service} onClick={() => toggleService(service)}
                    className={`flex items-center gap-3 border-2 px-4 py-3 cursor-pointer transition ${checked ? "border-[#8AB300] bg-[rgba(200,255,0,0.06)]" : "border-slate-200 hover:border-[#8AB300]"}`}>
                    <input id={id} type="checkbox" checked={checked} onChange={() => toggleService(service)} className="h-4 w-4 shrink-0 accent-[#8AB300] pointer-events-none" />
                    <label htmlFor={id} className="text-sm uppercase font-semibold tracking-wide cursor-pointer">{service}</label>
                  </div>
                )
              })}
            </div>
            {errors.services && <p className="text-red-500 text- mt-2">{errors.services.message}</p>}
          </fieldset>

          <div className="mt-8">
            <label htmlFor="budget" className="text-xs uppercase font-mono tracking-widest text-black mb-2 block">MONTHLY BUDGET RANGE</label>
            <select id="budget" autoComplete="off" {...register("budget")}
              className={`w-full border-2 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#8AB300] ${errors.budget ? "border-red-500" : "border-slate-200"}`}>
              <option value="">Select a range</option>
              <option value="$500 - $1,000">$500 - $1,000</option>
              <option value="$1,000 - $2,000">$1,000 - $2,000</option>
              <option value="$2,000+">$2,000+</option>
            </select>
            {errors.budget && <p className="text-red-500 text- mt-1">{errors.budget.message}</p>}
          </div>
          <div className="mt-8">
            <label htmlFor="about_project" className="text-xs uppercase font-mono tracking-widest text-black mb-2 block">
              Tell us about the project
            </label>
            <textarea
              id="about_project"
              rows={5}
              placeholder="What are you trying to achieve,and by when?"
              {...register("about_project")}
              className="w-full border-2 border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#8AB300] resize-y min-h-[120px]"
            />
          </div>

          <div className="mt-8 w-full sm:w-auto">
            <BtnLime>
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? "SENDING..." : "SEND YOUR BRIEF"}
            </BtnLime>
          </div>
          <p className="mt-2 text-[0.65rem] uppercase text-[#6B6B7A] font-mono">We reply within 24 hours, Mon–Fri.</p>
        </form>

        <div className="space-y-6 md:space-y-8">
          {/* <div className="bg-black text-white p-8">
            <p className="text-sm font-mono tracking-widest mb-4">PREFER TO TALK?</p>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">Book a 30-min call</h3>
            <p className="text-sm text-slate-300 mb-6">Skip the form — grab a slot directly on our calendar.</p>
            <button className="w-full border border-white py-3 font-semibold tracking-wide hover:bg-white hover:text-black transition">BOOK A CALL</button>
          </div> */}
          <div className="border border-slate-200 p-5 sm:p-6">
            <p className="text-xs font-mono tracking-widest text-[#6B6B7A] mb-4">DIRECT CONTACT</p>
            <hr className="my-3 border-slate-300" />
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 cursor-pointer hover:text-[#8AB300] break-all"><Mail size={16} className="shrink-0 text-lime-500" /><span>contact@dgstream.in</span></div>
              <hr className="my-3 border-slate-300" />
              <div className="flex items-center gap-3 cursor-pointer hover:text-[#8AB300]"><Phone size={16} className="shrink-0 text-lime-500" /><span>+91 8088962868</span></div>
              <hr className="my-3 border-slate-300" />
              <div className="flex items-center gap-3"><MapPin size={16} className="shrink-0 text-lime-500" /><span>Remote-first — clients worldwide</span></div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="border border-slate-200 p-3 hover:border-[#8AB300] transition"><Linkedin size={16} /></a>
              <a href="#" aria-label="Instagram" className="border border-slate-200 p-3 hover:border-[#8AB300] transition"><Instagram size={16} /></a>
              <a href="#" aria-label="X" className="border border-slate-200 p-3 hover:border-[#8AB300] transition"><X size={16} /></a>
            </div>
          </div>
          <div className="border border-slate-200 p-5 sm:p-6">
            <p className="text-xs uppercase font-mono tracking-widest text-[#6B6B7A] mb-4">Response Times</p>
            <hr className="my-4 border-slate-300" />
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3"><p className="text-[#6B6B7A]">Brief submissions</p></div>
              <div className="flex items-center gap-3">
                <p className="text-xl text-black font-bold">Within 24 hours</p>
              </div>
              <hr className="my-4 border-slate-300" />
              <div className="flex items-center gap-3">
                <p className="text-[#6B6B7A]">Active client support</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xl text-black font-bold">Same-day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}