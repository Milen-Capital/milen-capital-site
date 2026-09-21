import type { PortableTextBlock } from "@portabletext/react";
import { BLOG_POSTS } from "@/content/site";
import { fetchAllPosts, fetchPostBySlug, type SanityPost } from "@/lib/sanity/queries";

// Forma común que usan los componentes del blog, sin importar si el post
// viene de Sanity (con "portableBody", texto enriquecido) o del contenido
// de ejemplo en content/site.ts (con "paragraphs", texto plano).
export type DisplayPost = {
  slug: string;
  title: string;
  excerpt: string;
  categoryId: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  paragraphs?: string[];
  portableBody?: PortableTextBlock[];
};

function fromSanity(post: SanityPost): DisplayPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    categoryId: post.categoryId,
    image: post.image ?? "",
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    portableBody: post.body,
  };
}

function fromStatic(post: (typeof BLOG_POSTS)[number]): DisplayPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    categoryId: post.categoryId,
    image: post.image,
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    paragraphs: post.content,
  };
}

export async function getBlogPosts(): Promise<DisplayPost[]> {
  const sanityPosts = await fetchAllPosts();
  if (sanityPosts.length > 0) return sanityPosts.map(fromSanity);
  return BLOG_POSTS.map(fromStatic);
}

export async function getBlogPostBySlug(slug: string): Promise<DisplayPost | null> {
  const sanityPost = await fetchPostBySlug(slug);
  if (sanityPost) return fromSanity(sanityPost);

  const staticPost = BLOG_POSTS.find((post) => post.slug === slug);
  return staticPost ? fromStatic(staticPost) : null;
}
