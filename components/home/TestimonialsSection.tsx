import { TESTIMONIALS } from "@/content/site";
import { StarIcon } from "@/components/icons";

function QuoteMark() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      aria-hidden="true"
      className="text-gold/30"
    >
      <path
        d="M14.5 0C7 2 2 8 2 15.5 2 21.3 6.2 26 12 26c4.4 0 7.8-3.4 7.8-7.6 0-4-2.9-7-6.7-7-1 0-1.9.2-2.6.5C11.2 7.4 14.6 3.4 20 1.2L14.5 0Z"
        fill="currentColor"
      />
      <path
        d="M30.5 0C23 2 18 8 18 15.5c0 5.8 4.2 10.5 10 10.5 4.4 0 7.8-3.4 7.8-7.6 0-4-2.9-7-6.7-7-1 0-1.9.2-2.6.5C27.2 7.4 30.6 3.4 36 1.2L30.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm uppercase tracking-wide text-gold-dark">
              <span className="h-px w-6 bg-gold-dark" aria-hidden="true" />
              Testimonios
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">{TESTIMONIALS.title}</h2>
            <p className="mt-3 text-muted">{TESTIMONIALS.subtitle}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.items.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
                <QuoteMark />
                <div className="mt-2 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/5 font-display text-sm text-navy">
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{item.name}</p>
                    <div className="mt-0.5 flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <StarIcon key={star} className="h-3.5 w-3.5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm italic leading-relaxed text-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
