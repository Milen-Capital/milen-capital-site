import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/site";

const BASE_URL = "https://milencapital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/soluciones", "/sobre-nosotros", "/blog", "/contacto"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
