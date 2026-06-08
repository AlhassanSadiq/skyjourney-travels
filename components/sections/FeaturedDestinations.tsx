"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star, Clock } from "lucide-react";
import { destinations } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils";

export default function FeaturedDestinations() {
  const featured = destinations.filter((d) => d.featured);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-sky-50/50 dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
            Popular Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Discover Your Next{" "}
            <span className="text-gradient">Adventure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Handpicked destinations that promise unforgettable experiences. From bustling cities to serene beaches.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((destination, index) => (
            <AnimatedSection key={destination.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-sky-700">
                      {destination.country}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                        <div className="flex items-center gap-1 text-white/80 text-sm">
                          <MapPin size={12} />
                          <span>{destination.country}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span className="text-white text-sm font-medium">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{destination.duration}</span>
                    </div>
                    <StarRating rating={Math.floor(destination.rating)} size={14} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">From</span>
                      <div className="text-xl font-bold text-sky-600">
                        {formatPrice(destination.price)}
                      </div>
                    </div>
                    <Link
                      href={`/destinations/${destination.id}`}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-lg text-sm font-medium hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors"
                    >
                      Explore
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-sky-600 text-sky-600 rounded-xl font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
          >
            View All Destinations
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
