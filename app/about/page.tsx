"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { teamMembers, stats } from "@/lib/data";

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We live and breathe travel. Every recommendation comes from genuine experience and love for exploration.",
  },
  {
    icon: Target,
    title: "Customer First",
    description: "Your satisfaction is our north star. We go above and beyond to exceed expectations on every trip.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We settle for nothing less than exceptional. From planning to execution, quality is our standard.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "With local experts in 50+ countries, we offer authentic insights that guidebooks simply can't match.",
  },
];

export default function AboutPage() {
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
              About SkyJourney
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Story of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-ocean-300">
                Adventure & Excellence
              </span>
            </h1>
            <p className="text-lg text-sky-100 leading-relaxed">
              Founded in 2010, SkyJourney Travels has grown from a small family business to one of the 
              most trusted travel agencies in the region. Our journey is built on a simple promise: 
              to make every trip extraordinary.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-sky-600 mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-ocean-500 rounded-3xl opacity-10 blur-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop"
                        alt="Travel adventure"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop"
                        alt="Road trip"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop"
                        alt="Mountain landscape"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&h=300&fit=crop"
                        alt="Beach sunset"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
                    Our Mission
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    To Transform Travel Into{" "}
                    <span className="text-gradient">Unforgettable Experiences</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe travel is not just about reaching a destination - it's about the journey, 
                    the people you meet, and the memories you create. Our mission is to craft personalized 
                    travel experiences that inspire, delight, and transform.
                  </p>
                </div>
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-100 dark:bg-ocean-900/30 text-ocean-700 dark:text-ocean-300 text-sm font-medium mb-4">
                    Our Vision
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Becoming the World's Most{" "}
                    <span className="text-gradient">Trusted Travel Partner</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a world where everyone can explore with confidence. By 2030, we aim to 
                    serve 1 million travelers annually, expand to 200 destinations, and set new standards 
                    for sustainable, responsible tourism.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Drives Us{" "}
              <span className="text-gradient">Every Day</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex gap-5 p-6 bg-sky-50/50 dark:bg-sky-900/10 rounded-2xl border border-sky-100 dark:border-sky-900/20 hover:border-sky-300 dark:hover:border-sky-700 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-ocean-500 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet the{" "}
              <span className="text-gradient">Experts Behind</span> Your Journeys
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A passionate team of travel enthusiasts dedicated to making your trips extraordinary.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-sky-600 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
