"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Tag,
  Share2,
  Bookmark,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { blogPosts } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BlogDetailPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you are looking for does not exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium text-white">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-white/80 text-sm">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-white/80 text-sm">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-ocean-500 flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Travel Expert & Writer</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <button className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-sky-100 dark:hover:bg-sky-900/20 transition-colors">
                      <Share2 size={18} className="text-muted-foreground" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-sky-100 dark:hover:bg-sky-900/20 transition-colors">
                      <Bookmark size={18} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Traveling is one of the most enriching experiences one can have. Whether you are exploring 
                    ancient ruins, relaxing on pristine beaches, or immersing yourself in vibrant city cultures, 
                    every journey brings new perspectives and unforgettable memories.
                  </p>
                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                    Planning Your Perfect Trip
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The key to a successful trip lies in thorough preparation. Research your destination thoroughly, 
                    understand local customs and traditions, and create a flexible itinerary that allows for both 
                    planned activities and spontaneous adventures. Remember, some of the best travel moments happen 
                    when you least expect them.
                  </p>
                  <div className="bg-sky-50 dark:bg-sky-900/10 rounded-xl p-6 my-8 border-l-4 border-sky-500">
                    <p className="text-foreground font-medium italic">
                      "The world is a book, and those who do not travel read only one page." 
                      — Saint Augustine
                    </p>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                    Essential Travel Tips
                  </h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sky-600 text-sm font-bold">1</span>
                      </div>
                      <span className="text-muted-foreground">Always carry copies of important documents and store digital backups in the cloud.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sky-600 text-sm font-bold">2</span>
                      </div>
                      <span className="text-muted-foreground">Learn basic phrases in the local language — locals appreciate the effort and it enhances your experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sky-600 text-sm font-bold">3</span>
                      </div>
                      <span className="text-muted-foreground">Pack light and smart. Versatile clothing and minimal luggage make travel more enjoyable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sky-600 text-sm font-bold">4</span>
                      </div>
                      <span className="text-muted-foreground">Respect local cultures and traditions. Be mindful of dress codes and behavioral norms.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    With these tips in mind, you are well on your way to creating unforgettable travel memories. 
                    Remember, the best journeys are those that challenge you, inspire you, and leave you with stories 
                    to tell for years to come.
                  </p>
                </div>
              </AnimatedSection>

              {/* Tags */}
              <AnimatedSection delay={0.2}>
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={16} className="text-muted-foreground" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm text-muted-foreground hover:bg-sky-100 dark:hover:bg-sky-900/20 hover:text-sky-600 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2} direction="left">
                <div className="sticky top-24 space-y-6">
                  {/* Categories */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-border">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen size={18} className="text-sky-600" />
                      Categories
                    </h4>
                    <div className="space-y-2">
                      {["Destination Guides", "Travel Tips", "Visa Information"].map((cat) => (
                        <Link
                          key={cat}
                          href={`/blog`}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/10 transition-colors group"
                        >
                          <span className="text-sm text-muted-foreground group-hover:text-sky-600 transition-colors">
                            {cat}
                          </span>
                          <ChevronRight size={14} className="text-muted-foreground group-hover:text-sky-600 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-sky-600 to-ocean-500 rounded-2xl p-6 text-white">
                    <h4 className="font-bold mb-2">Stay Updated</h4>
                    <p className="text-sm text-sky-100 mb-4">
                      Get the latest travel tips and destination guides.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 mb-2"
                    />
                    <button className="w-full py-2 bg-white text-sky-700 rounded-lg text-sm font-semibold hover:bg-sky-50 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-sky-50/50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related, index) => (
                <AnimatedSection key={related.id} delay={index * 0.1}>
                  <Link href={`/blog/${related.id}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                          <span>{related.date}</span>
                          <span>{related.readTime}</span>
                        </div>
                        <h3 className="font-bold text-foreground group-hover:text-sky-600 transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
