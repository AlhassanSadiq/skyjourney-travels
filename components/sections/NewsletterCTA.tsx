"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { toast } from "@/components/ui/Toaster";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    toast("Successfully subscribed to our newsletter!", "success");
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-ocean-700" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Send className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive deals, 
            new destinations, and travel inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={18} />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>

          <p className="text-sky-200/70 text-sm mt-4">
            No spam, ever. Unsubscribe anytime. Join 25,000+ travelers.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
