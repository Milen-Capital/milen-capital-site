import Link from "next/link";
import { BLOG_TEASER, type BlogPost } from "@/content/site";
import { TOPIC_ICONS } from "@/components/icons";
import FallbackImage from "@/components/FallbackImage";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const category = BLOG_TEASER.topics.find((topic) => topic.id === post.categoryId);
  const Icon = category ? TOPIC_ICONS[category.icon] : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream">
        <FallbackImage
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 380px, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
          fallback={
            <div className="flex h-full w-full items-center justify-center text-navy/20">
              {Icon ? <Icon className="h-10 w-10" /> : null}
            </div>
          }
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {category ? (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
            {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
            {category.name}
          </span>
        ) : null}

        <h3 className="mt-3 text-lg leading-snug text-navy">{post.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-4 flex items-center gap-2 pt-2 text-xs text-muted">
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime} de lectura</span>
        </div>
      </div>
    </Link>
  );
}
