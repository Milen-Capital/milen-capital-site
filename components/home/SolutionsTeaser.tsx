"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { SOLUTIONS } from "@/content/site";
import { SOLUTION_ICONS, StarIcon } from "@/components/icons";
import FallbackImage from "@/components/FallbackImage";

type SolutionItem = (typeof SOLUTIONS.items)[number];

function GridIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SolutionDetailCard({ item, fill = false }: { item: SolutionItem; fill?: boolean }) {
  const Icon = SOLUTION_ICONS[item.icon];
  return (
    <div
      className={`grid overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2 ${fill ? "lg:h-full" : ""}`}
    >
      <div className={`relative aspect-[4/3] md:aspect-auto ${fill ? "lg:h-full" : ""}`}>
        <FallbackImage
          key={item.id}
          src={item.image}
          alt={item.name}
          sizes="(min-width: 768px) 50vw, 100vw"
          unoptimized
          className="h-full w-full object-cover"
          fallback={
            <div className="flex h-full w-full items-center justify-center bg-navy/5 text-navy">
              {Icon ? <Icon className="h-12 w-12" /> : null}
            </div>
          }
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-semibold text-gold-dark">
          {Icon ? <Icon className="h-4 w-4" /> : null}
          {item.name}
        </span>
        <h3 className="mt-4 font-display text-2xl leading-snug text-navy md:text-3xl">
          {item.description}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
        <Link
          href={`${SOLUTIONS.href}?seguro=${item.id}`}
          className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
        >
          {SOLUTIONS.ctaLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function SolutionsTeaser() {
  const [activeId, setActiveId] = useState<string>(SOLUTIONS.items[0].id);
  const [listOpen, setListOpen] = useState(false);
  const active = SOLUTIONS.items.find((item) => item.id === activeId) ?? SOLUTIONS.items[0];
  const otherItems = SOLUTIONS.items.filter((item) => item.id !== activeId);
  const mobileDetailRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setActiveId(id);
    setListOpen(false);
    mobileDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-24">
      <svg
        className="pointer-events-none absolute -right-8 -top-8 hidden h-48 w-48 text-gold/40 md:block"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path d="M200 100A100 100 0 0 1 100 0" stroke="currentColor" strokeWidth="1" />
      </svg>
      <StarIcon className="pointer-events-none absolute right-24 top-14 hidden h-5 w-5 text-gold md:block" />

      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm uppercase tracking-wide text-gold-dark">
            <span className="h-px w-6 bg-gold-dark" aria-hidden="true" />
            Soluciones
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">{SOLUTIONS.title}</h2>
          <p className="mt-3 text-muted">{SOLUTIONS.subtitle}</p>
        </div>

        {/* Mobile / tablet: tarjeta activa + acordeón "Más soluciones" */}
        <div className="mt-10 lg:hidden">
          <div key={activeId} ref={mobileDetailRef} className="scroll-mt-24">
            <SolutionDetailCard item={active} />
          </div>

          <button
            type="button"
            onClick={() => setListOpen((v) => !v)}
            aria-expanded={listOpen}
            className="mt-4 flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-medium text-navy shadow-sm"
          >
            <span className="flex items-center gap-2">
              <GridIcon />
              Más soluciones
            </span>
            <ChevronIcon className={`transition-transform ${listOpen ? "rotate-180" : ""}`} />
          </button>

          {listOpen && (
            <div className="mt-2 flex flex-col gap-2">
              {otherItems.map((item) => {
                const Icon = SOLUTION_ICONS[item.icon];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/70 px-4 py-3 text-left transition hover:bg-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                        {Icon ? <Icon className="h-4 w-4" /> : null}
                      </span>
                      <span className="text-sm font-medium text-navy/70">{item.name}</span>
                    </span>
                    <span aria-hidden="true" className="text-navy/30">
                      ›
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop: lista lateral + panel de detalle */}
        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-[320px_1fr] lg:items-stretch">
          <div className="flex flex-col gap-2">
            {SOLUTIONS.items.map((item) => {
              const Icon = SOLUTION_ICONS[item.icon];
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  aria-pressed={isActive}
                  className={`flex items-center justify-between gap-3 rounded-xl border-l-4 px-4 py-3 text-left transition ${
                    isActive
                      ? "border-gold bg-white shadow-sm"
                      : "border-transparent bg-white/60 hover:bg-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                    </span>
                    <span className={`text-sm font-medium ${isActive ? "text-navy" : "text-navy/70"}`}>
                      {item.name}
                    </span>
                  </span>
                  <span aria-hidden="true" className={isActive ? "text-navy" : "text-navy/30"}>
                    ›
                  </span>
                </button>
              );
            })}
          </div>

          <SolutionDetailCard item={active} fill />
        </div>
      </div>
    </section>
  );
}
