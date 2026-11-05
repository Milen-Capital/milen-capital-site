import PageHero from "@/components/PageHero";
import BlogList from "@/components/blog/BlogList";
import { BLOG_PAGE } from "@/content/site";
import { getBlogPosts } from "@/lib/blog";

// El listado depende de contenido que puede cambiar en Sanity sin un
// nuevo deploy. En vez de volver a consultar Sanity en cada visita
// (lo que hacía sentir la página "trabada" unos segundos), se guarda
// una copia lista y se refresca sola cada 60 segundos.
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero eyebrow={BLOG_PAGE.hero.eyebrow} title={BLOG_PAGE.hero.title} />
      <BlogList posts={posts} />
    </>
  );
}
