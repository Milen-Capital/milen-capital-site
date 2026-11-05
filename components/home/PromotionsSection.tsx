"use client";

import { useEffect, useState } from "react";
import { PROMOTIONS, CONTACT } from "@/content/site";
import { getPromotions, getStaticPromotions, type DisplayPromotion } from "@/lib/promotions";
import FallbackImage from "@/components/FallbackImage";

// Se busca en el navegador (no en el servidor) para que la home siga
// siendo una página estática y rápida: la tarjeta aparece de inmediato
// con el contenido de ejemplo y, si Sanity tiene promociones activas,
// se actualiza sola sin necesitar un nuevo deploy.
export default function PromotionsSection() {
  const [promotions, setPromotions] = useState<DisplayPromotion[]>(getStaticPromotions);

  useEffect(() => {
    let active = true;
    getPromotions().then((data) => {
      if (active && data.length > 0) setPromotions(data);
    });
    return () => {
      active = false;
    };
  }, []);

  if (promotions.length === 0) return null;

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm uppercase tracking-wide text-gold-dark">
            <span className="h-px w-6 bg-gold-dark" aria-hidden="true" />
            {PROMOTIONS.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">{PROMOTIONS.title}</h2>
          <p className="mt-3 text-muted">{PROMOTIONS.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => {
            const whatsappUrl = `${CONTACT.whatsappHref}?text=${encodeURIComponent(promo.whatsappMessage)}`;
            return (
              <div
                key={promo.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[9/16] w-full">
                  <FallbackImage
                    src={promo.image}
                    alt={promo.title}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
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

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-navy">{promo.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{promo.description}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
                  >
                    {promo.ctaLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
