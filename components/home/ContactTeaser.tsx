"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT_TEASER, COVERAGE_MAP } from "@/content/site";
import { PinIcon } from "@/components/icons";
import CoverageMap from "@/components/home/CoverageMap";

export default function ContactTeaser() {
  const [activeId, setActiveId] = useState<string>(COVERAGE_MAP[0].id);
  const active = COVERAGE_MAP.find((point) => point.id === activeId) ?? COVERAGE_MAP[0];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="flex items-center gap-2 text-sm uppercase tracking-wide text-gold-dark">
            <span className="h-px w-6 bg-gold-dark" aria-hidden="true" />
            {CONTACT_TEASER.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">{CONTACT_TEASER.title}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">{CONTACT_TEASER.text}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {COVERAGE_MAP.map((point) => {
              const isActive = point.id === activeId;
              return (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setActiveId(point.id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-navy text-cream"
                      : "bg-cream text-muted hover:bg-gold/15 hover:text-navy"
                  }`}
                >
                  <PinIcon className="h-3.5 w-3.5" />
                  {point.city}
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-gold/20 bg-cream p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
              <PinIcon className="h-4 w-4" />
              {CONTACT_TEASER.officeLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy">{active.address}</p>
          </div>

          <Link
            href={CONTACT_TEASER.href}
            className="mt-8 inline-flex rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
          >
            {CONTACT_TEASER.ctaLabel}
          </Link>
        </div>

        <CoverageMap activeId={activeId} />
      </div>
    </section>
  );
}
