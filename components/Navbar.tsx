"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Plane,
  ChevronDown,
  Phone,
  Globe,
  DollarSign,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/tour-packages", label: "Tour Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const currencies = ["USD", "EUR", "GBP", "AED", "KES", "TZS"];
const languages = ["English", "French", "Arabic", "Swahili"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-sky-900 text-white text-xs py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Phone size={12} />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@skyjourney.com" className="hover:text-sky-200 transition-colors">
              info@skyjourney.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => { setIsCurrencyOpen(!isCurrencyOpen); setIsLangOpen(false); }}
                className="flex items-center gap-1 hover:text-sky-200 transition-colors"
              >
                <DollarSign size={12} />
                {currency}
                <ChevronDown size={10} className={isCurrencyOpen ? "rotate-180" : ""} />
              </button>
              <AnimatePresence>
                {isCurrencyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-full right-0 mt-1 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-border py-1 min-w-[100px] z-50"
                  >
                    {currencies.map((c) => (
                      <button
                        key={c}
                        onClick={() => { setCurrency(c); setIsCurrencyOpen(false); }}
                        className={cn(
                          "w-full text-left px-3 py-1.5 text-sm hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors",
                          currency === c && "text-sky-600 font-medium"
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => { setIsLangOpen(!isLangOpen); setIsCurrencyOpen(false); }}
                className="flex items-center gap-1 hover:text-sky-200 transition-colors"
              >
                <Globe size={12} />
                {language}
                <ChevronDown size={10} className={isLangOpen ? "rotate-180" : ""} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-full right-0 mt-1 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-border py-1 min-w-[120px] z-50"
                  >
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLanguage(l); setIsLangOpen(false); }}
                        className={cn(
                          "w-full text-left px-3 py-1.5 text-sm hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors",
                          language === l && "text-sky-600 font-medium"
                        )}
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white dark:bg-slate-900"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-ocean-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-sky-500/30 transition-shadow">
                <Plane className="w-5 h-5 text-white -rotate-45" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground leading-tight">
                  Sky<span className="text-sky-600">Journey</span>
                </h1>
                <p className="text-[10px] text-muted-foreground -mt-0.5 tracking-wider uppercase">
                  Premium Travels
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-sky-600 bg-sky-50 dark:bg-sky-900/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={20} className="text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={20} className="text-slate-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Now
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border overflow-hidden bg-background"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-sky-600 bg-sky-50 dark:bg-sky-900/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-border mt-2">
                  <div className="flex items-center gap-4 px-4 py-2 text-sm text-muted-foreground">
                    <span>Currency: {currency}</span>
                    <span>Language: {language}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
