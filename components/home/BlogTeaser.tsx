import Link from "next/link";
import { BLOG_TEASER } from "@/content/site";
import { TOPIC_ICONS } from "@/components/icons";

export default function BlogTeaser() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wide text-gold-dark">Blog</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{BLOG_TEASER.title}</h2>
          <p className="mt-3 text-muted">{BLOG_TEASER.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_TEASER.topics.map((topic) => {
            const Icon = TOPIC_ICONS[topic.icon];
            return (
              <div
                key={topic.id}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy">
                    {Icon ? <Icon /> : null}
                  </span>
                  <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {BLOG_TEASER.comingSoonBadge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg text-navy">{topic.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
              </div>
            );
          })}
        </div>

        <Link
          href={BLOG_TEASER.href}
          className="mt-10 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark hover:text-navy"
        >
          {BLOG_TEASER.ctaLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
