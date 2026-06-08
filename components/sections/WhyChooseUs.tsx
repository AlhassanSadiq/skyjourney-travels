"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Headphones,
  Award,
  Globe,
  Wallet,
  Clock,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description:
      "Your payments and personal data are protected with bank-level encryption. Book with complete confidence.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated travel experts are available around the clock to assist you before, during, and after your trip.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50 dark:bg-sky-900/20",
    textColor: "text-sky-600",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description:
      "We match any comparable quote. If you find a better price elsewhere, we'll beat it by 5%.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Access to 120+ destinations worldwide with local expertise and partnerships in every region.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    textColor: "text-violet-600",
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    description:
      "Pay in installments with zero interest. We offer payment plans to make your dream trip affordable.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-600",
  },
  {
    icon: Clock,
    title: "Instant Confirmation",
    description:
      "Receive booking confirmations within minutes. No waiting, no uncertainty - just instant peace of mind.",
    color: "from-cyan-500 to-ocean-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    textColor: "text-cyan-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
            Why SkyJourney
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Travelers{" "}
            <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We go the extra mile to ensure every journey is seamless, safe, and truly memorable.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.textColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
