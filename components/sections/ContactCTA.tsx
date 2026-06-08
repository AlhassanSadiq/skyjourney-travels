"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-sky-50/50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Plan Your{" "}
              <span className="text-gradient">Dream Trip</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Have a destination in mind? Our travel experts are ready to craft a personalized 
              itinerary that matches your style, budget, and travel dreams. Reach out today 
              and let's make it happen.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground">info@skyjourney.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-semibold text-foreground">123 Travel Street, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-ocean-500 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">Destination</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                      <option value="">Select a destination</option>
                      <option value="dubai">Dubai</option>
                      <option value="london">London</option>
                      <option value="istanbul">Istanbul</option>
                      <option value="kigali">Kigali</option>
                      <option value="zanzibar">Zanzibar</option>
                      <option value="cairo">Cairo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your travel plans..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
                  >
                    Send Inquiry
                  </motion.button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
