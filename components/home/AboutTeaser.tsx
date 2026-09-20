import Link from "next/link";
import { ABOUT_TEASER, TEAM } from "@/content/site";
import FallbackImage from "@/components/FallbackImage";
import TeamMemberCard from "@/components/about/TeamMemberCard";

export default function AboutTeaser() {
  const restOfTeam = TEAM.members.filter((member) => !member.lead);

  return (
    <section className="overflow-hidden bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-gold-dark">{ABOUT_TEASER.title}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{ABOUT_TEASER.name}</h2>
            <p className="mt-1 text-sm font-medium text-gold-dark">{ABOUT_TEASER.role}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{ABOUT_TEASER.text}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ABOUT_TEASER.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-gold-dark"
                  >
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <blockquote className="mt-6 rounded-2xl border border-gold/25 bg-cream p-6">
              <p className="font-display text-lg italic leading-snug text-navy">
                &ldquo;{ABOUT_TEASER.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-gold-dark">
                — {ABOUT_TEASER.quoteAuthor}
              </footer>
            </blockquote>

            <Link
              href={ABOUT_TEASER.href}
              className="mt-8 inline-flex rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-navy-700"
            >
              {ABOUT_TEASER.ctaLabel}
            </Link>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full bg-gold/10 blur-2xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-navy/5 blur-2xl" aria-hidden="true" />
            <FallbackImage
              src={ABOUT_TEASER.photoCutout}
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

            <div className="absolute bottom-4 left-4 z-20 rounded-xl bg-navy px-4 py-2.5 shadow-lg">
              <p className="text-sm font-semibold text-cream">{ABOUT_TEASER.name}</p>
              <p className="text-xs text-gold-light">{ABOUT_TEASER.role}</p>
            </div>
          </div>
        </div>

        <div className="relative mt-20">
          <svg
            className="pointer-events-none absolute -left-6 -top-10 h-40 w-40 text-gold/30 md:-left-10 md:h-52 md:w-52"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
          >
            <path d="M10 190C10 95 95 10 190 10" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg
            className="pointer-events-none absolute -right-6 -bottom-10 h-40 w-40 text-gold/30 md:-right-10 md:h-52 md:w-52"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
          >
            <path d="M190 10C190 105 105 190 10 190" stroke="currentColor" strokeWidth="2" />
          </svg>

          <div className="relative text-center">
            <p className="text-sm uppercase tracking-wide text-gold-dark">Asesoría</p>
            <h3 className="mt-2 font-display text-2xl text-navy md:text-3xl">{TEAM.title}</h3>
            <p className="mt-2 text-muted">{TEAM.subtitle}</p>
          </div>
          <div className="relative mt-10 flex flex-wrap items-end justify-center gap-x-10 gap-y-10">
            {restOfTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
