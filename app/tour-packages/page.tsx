"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Check,
  ArrowRight,
  Tag,
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
} from "lucide-react";
import { tourPackages } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils";

const categories = ["All", "Luxury", "Adventure", "Culture", "Beach", "History", "Food", "Romance", "Multi-City"];

export default function TourPackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = tourPackages.filter((pkg) => {
    const matchesCategory = activeCategory === "All" || pkg.tags.includes(activeCategory);
    const matchesSearch =
      searchQuery === "" ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Curated Experiences
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Tour{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-ocean-300">
                Packages
              </span>
            </h1>
            <p className="text-lg text-sky-100 leading-relaxed">
              Handcrafted itineraries designed for every type of traveler. All-inclusive packages 
              that take the stress out of planning and let you focus on the adventure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <SlidersHorizontal size={18} className="text-muted-foreground flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-sky-600 text-white shadow-md shadow-sky-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 lg:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No packages found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((pkg, index) => (
                <AnimatedSection key={pkg.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border h-full flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {pkg.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-sky-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {pkg.originalPrice && (
                        <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white rounded-md text-xs font-bold">
                          Save {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                            {pkg.title}
                          </h3>
                          <div className="flex items-center gap-1 text-white/80 text-sm">
                            <MapPin size={12} />
                            <span>{pkg.destination}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                          <Star size={12} className="fill-amber-400 text-amber-400" />
                          <span className="text-white text-sm font-medium">{pkg.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {pkg.description}
                      </p>
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>2-8 People</span>
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-5">
                        {pkg.included.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check size={14} className="text-emerald-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                        {pkg.included.length > 3 && (
                          <p className="text-xs text-sky-600 font-medium pl-6">
                            +{pkg.included.length - 3} more included
                          </p>
                        )}
                      </div>
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                        <div>
                          {pkg.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through mr-2">
                              {formatPrice(pkg.originalPrice)}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-sky-600">
                            {formatPrice(pkg.price)}
                          </span>
                          <span className="text-xs text-muted-foreground"> /person</span>
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
                        >
                          Book Now
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-900 to-ocean-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want a Custom Package?
            </h2>
            <p className="text-sky-100 mb-8 text-lg">
              We can design a completely personalized itinerary based on your preferences, budget, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50 transition-colors"
              >
                Request Custom Package
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Explore Destinations
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
