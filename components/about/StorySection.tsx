import { ABOUT_PAGE, ABOUT_TEASER } from "@/content/site";
import FallbackImage from "@/components/FallbackImage";

export default function StorySection() {
  return (
    <section className="overflow-hidden bg-white pb-14 pt-6 md:pb-16 md:pt-8">
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[19rem] lg:mx-0">
          <div
            className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full bg-gold/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-navy/5 blur-2xl"
            aria-hidden="true"
          />
          <FallbackImage
            src={ABOUT_PAGE.story.photo}
            alt={ABOUT_TEASER.name}
            fill
            sizes="(min-width: 1024px) 420px, 80vw"
            className="relative z-10 object-contain object-bottom"
            fallback={
              <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-gold/40 bg-navy font-display text-5xl text-gold-light">
                {ABOUT_TEASER.initials}
              </div>
            }
          />

          <div className="absolute -bottom-6 -right-6 z-20 max-w-[16rem] rounded-xl bg-navy px-4 py-3 shadow-lg md:-right-12">
            <p className="font-display text-sm italic leading-snug text-cream">
              &ldquo;{ABOUT_TEASER.quote}&rdquo;
            </p>
            <p className="mt-2 text-xs text-gold-light">— {ABOUT_TEASER.quoteAuthor}</p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-gold-dark">{ABOUT_PAGE.story.eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{ABOUT_PAGE.story.title}</h2>
          <div className="mt-5 space-y-4">
            {ABOUT_PAGE.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
