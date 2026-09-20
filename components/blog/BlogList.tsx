"use client";

import { useEffect, useState } from "react";
import { BLOG_PAGE, BLOG_POSTS, BLOG_TEASER } from "@/content/site";
import BlogCard from "@/components/blog/BlogCard";

// Móvil muestra 4 por página, el resto (sm en adelante) muestra 6.
function usePageSize() {
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const update = () => setPageSize(mediaQuery.matches ? 4 : 6);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return pageSize;
}

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = usePageSize();

  const posts = activeCategory ? BLOG_POSTS.filter((post) => post.categoryId === activeCategory) : BLOG_POSTS;
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginatedPosts = posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    setPage(1);
  };

  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="container-page">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleCategoryChange(null)}
            aria-pressed={activeCategory === null}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === null ? "bg-navy text-cream" : "bg-white text-muted hover:bg-gold/15 hover:text-navy"
            }`}
          >
            {BLOG_PAGE.filterAllLabel}
          </button>
          {BLOG_TEASER.topics.map((topic) => {
            const isActive = topic.id === activeCategory;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => handleCategoryChange(topic.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? "bg-navy text-cream" : "bg-white text-muted hover:bg-gold/15 hover:text-navy"
                }`}
              >
                {topic.name}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Paginación del blog" className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                aria-current={pageNumber === currentPage ? "page" : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition ${
                  pageNumber === currentPage
                    ? "bg-navy text-cream"
                    : "bg-white text-muted hover:bg-gold/15 hover:text-navy"
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
