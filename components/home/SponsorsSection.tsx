import { SPONSORS } from "@/content/site";
import SponsorCard from "@/components/home/SponsorCard";

export default function SponsorsSection() {
  const sponsor = SPONSORS.items[0];

  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      <svg
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 text-gold/20"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M10 190C10 95 95 10 190 10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 text-gold/20"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M190 10C190 105 105 190 10 190" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="container-page relative flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md text-center lg:text-left">
          <p className="flex items-center justify-center gap-2 text-sm uppercase tracking-wide text-gold-light lg:justify-start">
            <span className="h-px w-6 bg-gold-light" aria-hidden="true" />
            {SPONSORS.title}
          </p>
          <h2 className="mt-3 text-3xl text-cream md:text-4xl">{sponsor.name}</h2>
          <p className="mt-3 text-cream/70">{sponsor.description}</p>
        </div>

        <div className="flex flex-col items-center gap-8 sm:flex-row">
          <SponsorCard name={sponsor.name} logo={sponsor.logo} comingSoonBadge={SPONSORS.comingSoonBadge} />
          <span className="hidden h-28 w-px bg-cream/15 sm:block" aria-hidden="true" />
          <p className="max-w-[13rem] text-center font-display text-2xl italic leading-snug text-cream sm:text-left">
            {SPONSORS.messageTitle}
          </p>
        </div>
      </div>
    </section>
  );
}
