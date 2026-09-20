import PageHero from "@/components/PageHero";
import BlogList from "@/components/blog/BlogList";
import { BLOG_PAGE } from "@/content/site";

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow={BLOG_PAGE.hero.eyebrow} title={BLOG_PAGE.hero.title} />
      <BlogList />
    </>
  );
}
