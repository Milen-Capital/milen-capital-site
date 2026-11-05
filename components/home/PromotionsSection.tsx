"use client";

import { useEffect, useRef, useState } from "react";
import { PROMOTIONS, CONTACT } from "@/content/site";
import { getPromotions, getStaticPromotions, type DisplayPromotion } from "@/lib/promotions";
import FallbackImage from "@/components/FallbackImage";

function ArrowIcon({ direction, className }: { direction: "left" | "right"; className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Se busca en el navegador (no en el servidor) para que la home siga
// siendo una página estática y rápida: el carrusel aparece de inmediato
// con el contenido de ejemplo y, si Sanity tiene promociones activas,
// se actualiza solo sin necesitar un nuevo deploy.
export default function PromotionsSection() {
  const [promotions, setPromotions] = useState<DisplayPromotion[]>(getStaticPromotions);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    getPromotions().then((data) => {
      if (active && data.length > 0) setPromotions(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, promotions.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  if (promotions.length === 0) return null;

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm uppercase tracking-wide text-gold-dark">
              <span className="h-px w-6 bg-gold-dark" aria-hidden="true" />
              {PROMOTIONS.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">{PROMOTIONS.title}</h2>
            <p className="mt-3 text-muted">{PROMOTIONS.subtitle}</p>
          </div>

          {promotions.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Promoción anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-cream disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === promotions.length - 1}
                aria-label="Siguiente promoción"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-cream disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          )}
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {promotions.map((promo) => {
            const whatsappUrl = `${CONTACT.whatsappHref}?text=${encodeURIComponent(promo.whatsappMessage)}`;
            return (
              <div key={promo.id} className="w-full shrink-0 snap-center">
                <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy/10 md:grid-cols-[360px_1fr] md:items-stretch">
                  <div className="relative aspect-[900/1543] w-full md:w-[360px]">
                    <FallbackImage
                      src={promo.image}
                      alt={promo.title}
                      fill
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="object-cover"
                      fallback={
                        <div className="flex h-full w-full items-center justify-center bg-navy/5 px-6 text-center font-display text-lg text-navy/30">
                          {promo.title}
                        </div>
                      }
                    />
                    {promo.badge ? (
                      <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
                        {promo.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <h3 className="font-display text-2xl text-navy md:text-3xl">{promo.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{promo.description}</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
                    >
                      {promo.ctaLabel}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {promotions.length > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {promotions.map((promo, index) => (
              <button
                key={promo.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a la promoción ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-gold-dark" : "w-2 bg-navy/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
