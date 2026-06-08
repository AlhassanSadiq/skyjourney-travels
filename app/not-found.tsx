"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Home, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-ocean-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-500 to-ocean-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-sky-500/20">
            <Compass className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">Destination Not Found</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Looks like you have wandered off the beaten path. The page you are looking for 
            does not exist or may have been moved to a new location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-ocean-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-sky-600 text-sky-600 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300"
            >
              <Plane size={18} />
              Explore Destinations
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
