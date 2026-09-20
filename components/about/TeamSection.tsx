import Link from "next/link";
import { ABOUT_PAGE, CONTACT_TEASER, TEAM } from "@/content/site";
import TeamMemberCard from "@/components/about/TeamMemberCard";

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-14 md:py-16">
      <svg
        className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 text-gold/25 md:h-56 md:w-56"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M10 190C10 95 95 10 190 10" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 text-gold/25 md:h-56 md:w-56"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M190 10C190 105 105 190 10 190" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="container-page relative text-center">
        <p className="text-sm uppercase tracking-wide text-gold-dark">{ABOUT_PAGE.team.eyebrow}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{ABOUT_PAGE.team.title}</h2>
        <p className="mt-2 text-muted">{ABOUT_PAGE.team.subtitle}</p>
      </div>

      <div className="relative container-page mt-12 flex flex-wrap items-end justify-center gap-x-10 gap-y-10">
        {TEAM.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} className="w-40 sm:w-48" />
        ))}
      </div>

      <div className="relative mt-10 text-center">
        <Link
          href={CONTACT_TEASER.href}
          className="inline-flex rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream transition hover:bg-navy-700"
        >
          {CONTACT_TEASER.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
