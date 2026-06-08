"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Headphones,
  Shield,
  AlertTriangle,
  HelpCircle,
  Briefcase,
  CreditCard,
  Luggage,
  User,
  Calendar,
  Users,
  FileText,
} from "lucide-react";
import { faqs } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { toast } from "@/components/ui/Toaster";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast("Message sent successfully! We will get back to you within 24 hours.", "success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
      description: "Mon-Sat, 8am-8pm EST",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@skyjourney.com", "bookings@skyjourney.com"],
      description: "We reply within 24 hours",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Travel Street", "Nairobi, Kenya 00100"],
      description: "Visit us during business hours",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00 - 20:00", "Sun: 10:00 - 16:00"],
      description: "24/7 emergency support available",
      color: "from-violet-500 to-purple-500",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-sky-900 via-sky-800 to-ocean-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sky-200 text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-ocean-300">
                SkyJourney
              </span>
            </h1>
            <p className="text-lg text-sky-100 leading-relaxed">
              Have questions about your trip? Need a custom itinerary? Our travel experts are 
              here to help you plan the perfect vacation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-foreground font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-border">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we will get back to you within 24 hours.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@email.com"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (234) 567-890"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        Subject *
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="package">Package Information</option>
                          <option value="visa">Visa Assistance</option>
                          <option value="flight">Flight Booking</option>
                          <option value="hotel">Hotel Reservation</option>
                          <option value="custom">Custom Trip</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your travel plans, questions, or requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & WhatsApp */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="space-y-6">
                {/* Map Placeholder */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-border">
                  <div className="relative h-80 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-sky-500 mx-auto mb-3" />
                      <p className="text-foreground font-medium">SkyJourney Travels HQ</p>
                      <p className="text-sm text-muted-foreground">123 Travel Street, Nairobi, Kenya</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        (Google Maps integration placeholder)
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-ocean-100/50 dark:from-sky-900/20 dark:to-ocean-900/20" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center">
                        <MapPin size={20} className="text-sky-600" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Headquarters</p>
                        <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                        <Globe size={20} className="text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Global Offices</p>
                        <p className="text-sm text-muted-foreground">Dubai, London, Istanbul, Kigali</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <MessageCircle size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">Chat on WhatsApp</h3>
                      <p className="text-emerald-100 text-sm">
                        Get instant responses from our travel experts. Available 24/7.
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-white/80" />
                  </div>
                </motion.a>

                {/* Social Links */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-border">
                  <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-white ${social.color} transition-all duration-300`}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find answers to common questions about our services, booking process, and travel policies.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {Object.entries(groupedFaqs).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <HelpCircle size={20} className="text-sky-600" />
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((faq) => (
                    <AnimatedSection key={faq.id}>
                      <div className="bg-white dark:bg-slate-800 rounded-xl border border-border overflow-hidden">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          <span className="font-medium text-foreground pr-4">{faq.question}</span>
                          <motion.div
                            animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: openFaq === faq.id ? "auto" : 0,
                            opacity: openFaq === faq.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Headphones size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency Travel Support</h2>
            <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
              Traveling and need immediate assistance? Our emergency hotline is available around the clock 
              for urgent travel issues, medical emergencies, and last-minute changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-colors"
              >
                <Phone size={18} />
                Emergency Hotline
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Emergency
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
