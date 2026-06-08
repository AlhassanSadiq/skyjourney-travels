"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowLeft,
  Star,
  Clock,
  Check,
  ArrowRight,
  Heart,
  Share2,
  Phone,
  Mail,
} from "lucide-react";
import { destinations } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils";

export default function DestinationDetailPage() {
  const params = useParams();
  const destination = destinations.find((d) => d.id === params.id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-6">The destination you are looking for does not exist.</p>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Destinations
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <MapPin size={18} />
                  <span className="text-lg">{destination.country}</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  {destination.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                    <span className="text-white font-medium">{destination.rating}</span>
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="flex items-center gap-1 text-white/80">
                    <Clock size={16} />
                    <span>{destination.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  About {destination.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {destination.description}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-bold text-foreground mb-4">Trip Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {destination.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-sky-50 dark:bg-sky-900/10 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-ocean-500 flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className="text-foreground font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-xl font-bold text-foreground mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                      <Image
                        src={destination.image}
                        alt={`${destination.name} gallery ${i}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2} direction="left">
                <div className="sticky top-24 space-y-6">
                  {/* Price Card */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-border">
                    <div className="mb-4">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-3xl font-bold text-sky-600">
                        {formatPrice(destination.price)}
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium text-foreground">{destination.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Rating</span>
                        <div className="flex items-center gap-1">
                          <StarRating rating={Math.floor(destination.rating)} size={14} />
                          <span className="font-medium text-foreground">{destination.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Group Size</span>
                        <span className="font-medium text-foreground">2-12 People</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 mb-3"
                    >
                      Book This Trip
                      <ArrowRight size={18} />
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-sky-600 text-sky-600 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300"
                    >
                      <Phone size={16} />
                      Request Callback
                    </Link>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-border">
                    <h4 className="font-bold text-foreground mb-4">Need Help?</h4>
                    <div className="space-y-3">
                      <a href="tel:+1234567890" className="flex items-center gap-3 p-3 rounded-xl bg-sky-50 dark:bg-sky-900/10 hover:bg-sky-100 dark:hover:bg-sky-900/20 transition-colors">
                        <Phone size={18} className="text-sky-600" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Call Us</p>
                          <p className="text-xs text-muted-foreground">+1 (234) 567-890</p>
                        </div>
                      </a>
                      <a href="mailto:info@skyjourney.com" className="flex items-center gap-3 p-3 rounded-xl bg-sky-50 dark:bg-sky-900/10 hover:bg-sky-100 dark:hover:bg-sky-900/20 transition-colors">
                        <Mail size={18} className="text-sky-600" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Email Us</p>
                          <p className="text-xs text-muted-foreground">info@skyjourney.com</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
