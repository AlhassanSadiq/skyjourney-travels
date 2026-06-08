"use client";

import Link from "next/link";
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
} from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
  ],
  services: [
    { label: "Flight Booking", href: "/services" },
    { label: "Hotel Reservations", href: "/services" },
    { label: "Visa Assistance", href: "/services" },
    { label: "Holiday Packages", href: "/tour-packages" },
  ],
  destinations: [
    { label: "Dubai", href: "/destinations/dubai" },
    { label: "London", href: "/destinations/london" },
    { label: "Istanbul", href: "/destinations/istanbul" },
    { label: "Zanzibar", href: "/destinations/zanzibar" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Travel Insurance", href: "/services" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-slate-400">
                  Get exclusive deals, travel tips, and destination guides delivered to your inbox.
                </p>
              </div>
              <form className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-ocean-500 rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white -rotate-45" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Sky<span className="text-sky-400">Journey</span>
                </h2>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Your trusted partner for premium travel experiences since 2010. We make every journey unforgettable.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-sky-400" />
                <span>123 Travel Street, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-sky-400" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-sky-400" />
                <span>info@skyjourney.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 flex items-center gap-1">
              Made with <Heart size={14} className="text-red-400 fill-red-400" /> by SkyJourney Travels. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
