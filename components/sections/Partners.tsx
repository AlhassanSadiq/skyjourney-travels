"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { partners } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Partners() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            Trusted by Leading Airlines & Hotel Partners
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <AnimatedSection key={partner.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-sky-50 dark:group-hover:bg-sky-900/20 transition-colors">
                  <Plane className="w-8 h-8 text-slate-400 group-hover:text-sky-500 transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-sky-600 transition-colors text-center">
                  {partner.name}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
