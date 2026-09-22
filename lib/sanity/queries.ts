import type { PortableTextBlock } from "@portabletext/react";
import { sanityClient, isSanityConfigured } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  categoryId: string;
  image: string | null;
  date: string;
  readTime: string;
  author: string;
  body: PortableTextBlock[];
};

const POST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "categoryId": category,
  "image": select(
    defined(coverImage.asset) => coverImage.asset->url + "?w=1600&fit=max",
    null
  ),
  "date": publishedAt,
  readTime,
  author,
  body
}`;

export async function fetchAllPosts(): Promise<SanityPost[]> {
  if (!isSanityConfigured) return [];
  try {
    return await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) ${POST_PROJECTION}`);
  } catch (error) {
    console.error("Error al consultar Sanity, se usa el contenido de ejemplo:", error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0] ${POST_PROJECTION}`, { slug });
  } catch (error) {
    console.error("Error al consultar Sanity, se usa el contenido de ejemplo:", error);
    return null;
  }
}

export { urlForImage };
