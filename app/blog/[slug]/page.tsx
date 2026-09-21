import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { BLOG_PAGE, BLOG_TEASER, CONTACT } from "@/content/site";
import { getBlogPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";
import { TOPIC_ICONS } from "@/components/icons";
import FallbackImage from "@/components/FallbackImage";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const category = BLOG_TEASER.topics.find((topic) => topic.id === post.categoryId);
  const Icon = category ? TOPIC_ICONS[category.icon] : null;

  return (
    <article>
      <section className="border-t-2 border-gold-dark bg-white pb-8 pt-10 md:pt-12">
        <div className="container-page max-w-3xl">
          <Link href="/blog" className="text-sm font-medium text-gold-dark hover:text-navy">
            ← {BLOG_PAGE.backLabel}
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {category ? (
              <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                {category.name}
              </span>
            ) : null}
          </div>

          <h1 className="mt-4 text-3xl leading-tight text-navy md:text-4xl">{post.title}</h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-14">
        <div className="container-page max-w-3xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <FallbackImage
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
              fallback={
                <div className="flex h-full w-full items-center justify-center bg-white text-navy/20">
                  {Icon ? <Icon className="h-12 w-12" /> : null}
                </div>
              }
            />
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink">
            {post.portableBody ? (
              <PortableText value={post.portableBody} />
            ) : (
              post.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)
            )}
          </div>

          <div className="mt-10 rounded-2xl bg-navy p-8 text-center">
            <p className="font-display text-xl text-cream">¿Tienes dudas sobre este tema?</p>
            <p className="mt-1 text-sm text-cream/70">
              Escríbenos y te ayudamos a encontrar la protección adecuada.
            </p>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
