import Link from "next/link";
import { HERO } from "@/content/site";
import { BADGE_ICONS } from "@/components/icons";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cream/20 blur-3xl" />

        <div className="container-page relative grid gap-12 pb-28 pt-16 md:pb-32 md:pt-24 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-navy/70">{HERO.backedBy}</p>
            <h1 className="mt-4 max-w-xl text-4xl leading-tight text-navy md:text-5xl lg:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-navy/80 md:text-lg">
              {HERO.subheadline}
            </p>
            <div className="mt-8">
              <Link
                href={HERO.ctaPrimary.href}
                className="inline-block rounded-full bg-navy px-7 py-3 text-center text-sm font-semibold text-cream transition hover:bg-navy-700"
              >
                {HERO.ctaPrimary.label}
              </Link>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-navy/15 shadow-lg shadow-navy/10">
            <iframe
              src={HERO.videoUrl}
              title={HERO.videoTitle}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="container-page relative z-10 -mt-14 md:-mt-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl bg-navy p-6 shadow-lg shadow-navy/30 sm:grid-cols-4 md:gap-6 md:p-8">
          {HERO.badges.map((badge) => {
            const Icon = BADGE_ICONS[badge.id];
            return (
              <div
                key={badge.id}
                className="flex flex-col items-center gap-2 text-center sm:border-l sm:border-cream/15 sm:first:border-l-0"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                  {Icon ? <Icon /> : null}
                </span>
                <span className="text-xs font-semibold text-cream sm:text-sm">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
