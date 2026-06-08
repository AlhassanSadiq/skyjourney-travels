"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, Check, ArrowRight, Tag } from "lucide-react";
import { tourPackages } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils";

export default function PopularPackages() {
  const featured = tourPackages.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-100 dark:bg-ocean-900/30 text-ocean-700 dark:text-ocean-300 text-sm font-medium mb-4">
            Curated Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popular Tour{" "}
            <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            All-inclusive packages designed for every type of traveler. Just pack your bags and leave the rest to us.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((pkg, index) => (
            <AnimatedSection key={pkg.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col sm:flex-row bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="relative sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {pkg.tags.slice(0, 2).map((tag) => (
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
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-sky-600 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{pkg.destination}</p>
                    </div>
                    <StarRating rating={Math.floor(pkg.rating)} size={14} />
                  </div>
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
                  <div className="space-y-1.5 mb-4">
                    {pkg.included.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-emerald-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
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
                      href={`/tour-packages/${pkg.id}`}
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

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            href="/tour-packages"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-sky-600 text-sky-600 rounded-xl font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
          >
            View All Packages
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
