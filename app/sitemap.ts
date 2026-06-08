import { MetadataRoute } from "next";
import { destinations, tourPackages, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skyjourneytravels.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/destinations",
    "/tour-packages",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const destinationRoutes = destinations.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const packageRoutes = tourPackages.map((pkg) => ({
    url: `${baseUrl}/tour-packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...destinationRoutes, ...packageRoutes, ...blogRoutes];
}
