"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star, Clock, Tag, Check } from "lucide-react";
import { destinations } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils";

export default function DestinationsPage() {
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
              Explore The World
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-ocean-300">
                Destinations
              </span>
            </h1>
            <p className="text-lg text-sky-100 leading-relaxed">
              From the golden sands of Dubai to the ancient pyramids of Egypt, discover 
              handpicked destinations that promise unforgettable adventures.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <AnimatedSection key={destination.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-sky-700">
                        {destination.country}
                      </span>
                    </div>
                    {destination.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 bg-amber-500 text-white rounded-lg text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                          <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                            <MapPin size={14} />
                            <span>{destination.country}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                          <Star size={14} className="fill-amber-400 text-amber-400" />
                          <span className="text-white text-sm font-medium">{destination.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                      {destination.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                      <div className="space-y-1.5">
                        {destination.highlights.slice(0, 3).map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check size={14} className="text-emerald-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock size={14} />
                          <span>{destination.duration}</span>
                        </div>
                        <StarRating rating={Math.floor(destination.rating)} size={14} />
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground">From</span>
                        <div className="text-xl font-bold text-sky-600">
                          {formatPrice(destination.price)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-3">
                      <Link
                        href={`/destinations/${destination.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-sky-600 text-sky-600 rounded-xl text-sm font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
                      >
                        View Details
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-900 to-ocean-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Don't See Your Dream Destination?
            </h2>
            <p className="text-sky-100 mb-8 text-lg">
              We can arrange trips to any destination worldwide. Contact us for a custom itinerary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50 transition-colors"
              >
                Request Custom Trip
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/tour-packages"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Browse Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
