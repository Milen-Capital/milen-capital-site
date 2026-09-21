import PageHero from "@/components/PageHero";
import BlogList from "@/components/blog/BlogList";
import { BLOG_PAGE } from "@/content/site";
import { getBlogPosts } from "@/lib/blog";

// El listado depende de contenido que puede cambiar en Sanity sin un
// nuevo deploy, así que se busca en cada visita en vez de quedar fijo
// desde el momento del build.
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero eyebrow={BLOG_PAGE.hero.eyebrow} title={BLOG_PAGE.hero.title} />
      <BlogList posts={posts} />
    </>
  );
}
