"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  FileCheck,
  Palmtree,
  Car,
  Shield,
  ArrowRight,
  Check,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Plane,
  Hotel,
  FileCheck,
  Palmtree,
  Car,
  Shield,
};

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Travel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-ocean-300">
                Solutions
              </span>
            </h1>
            <p className="text-lg text-sky-100 leading-relaxed">
              From booking your first flight to ensuring your safe return, we provide end-to-end 
              travel services tailored to your unique needs and preferences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Plane;
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 md:bg-gradient-to-l" />
                      </div>
                      <div className="flex-1 p-6 md:p-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-ocean-500 flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check size={14} className="text-emerald-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sky-600 font-medium hover:gap-3 transition-all"
                        >
                          Learn More
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flight Search Mockup */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
              Flight Search
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Find Your{" "}
              <span className="text-gradient">Perfect Flight</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-border p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">From</label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="Departure City"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">To</label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 rotate-90" size={18} />
                    <input
                      type="text"
                      placeholder="Destination City"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Departure</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="trip" defaultChecked className="text-sky-600" />
                    <span className="text-muted-foreground">One Way</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="trip" className="text-sky-600" />
                    <span className="text-muted-foreground">Round Trip</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="trip" className="text-sky-600" />
                    <span className="text-muted-foreground">Multi-City</span>
                  </label>
                </div>
                <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <SearchIcon />
                  Search Flights
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hotel Search Mockup */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-100 dark:bg-ocean-900/30 text-ocean-700 dark:text-ocean-300 text-sm font-medium mb-4">
              Hotel Search
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Discover Premium{" "}
              <span className="text-gradient">Accommodations</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-border p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Destination</label>
                  <div className="relative">
                    <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="City, hotel, or landmark"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Rooms</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                    <option>1 Room</option>
                    <option>2 Rooms</option>
                    <option>3 Rooms</option>
                    <option>4+ Rooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Adults</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Children</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                    <option>0 Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                    <option>3 Children</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Star Rating</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                    <option>Any Rating</option>
                    <option>5 Stars</option>
                    <option>4 Stars</option>
                    <option>3 Stars</option>
                  </select>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <SearchIcon />
                Search Hotels
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-900 to-ocean-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need a Custom Travel Solution?
            </h2>
            <p className="text-sky-100 mb-8 text-lg">
              Our travel experts are ready to craft a personalized package just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50 transition-colors"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}
