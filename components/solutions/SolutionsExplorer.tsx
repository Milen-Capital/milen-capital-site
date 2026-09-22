"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT, SOLUTIONS, SOLUTIONS_PAGE, SOLUTION_FORMS } from "@/content/site";
import { SOLUTION_ICONS } from "@/components/icons";
import FallbackImage from "@/components/FallbackImage";
import SolutionFormField from "@/components/solutions/SolutionFormField";

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

function SidebarButton({
  item,
  isActive,
  onClick,
}: {
  item: SolutionItem;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = SOLUTION_ICONS[item.icon];
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`flex items-center justify-between gap-3 rounded-xl border-l-4 px-4 py-3 text-left transition ${
        isActive ? "border-gold bg-white shadow-sm" : "border-transparent bg-white/60 hover:bg-white"
      }`}
    >
      <span className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          {Icon ? <Icon className="h-4 w-4" /> : null}
        </span>
        <span className={`text-sm font-medium ${isActive ? "text-navy" : "text-navy/70"}`}>{item.name}</span>
      </span>
      <span aria-hidden="true" className={isActive ? "text-navy" : "text-navy/30"}>
        ›
      </span>
    </button>
  );
}

function HelpBox() {
  return (
    <div className="mt-6 rounded-2xl bg-navy p-6 text-center">
      <p className="font-display text-lg text-cream">{SOLUTIONS_PAGE.helpBox.title}</p>
      <p className="mt-1 text-sm text-cream/70">{SOLUTIONS_PAGE.helpBox.text}</p>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
      >
        {SOLUTIONS_PAGE.helpBox.ctaLabel}
      </a>
    </div>
  );
}

export default function SolutionsExplorer() {
  const searchParams = useSearchParams();
  const requestedId = searchParams.get("seguro");
  const initialId = SOLUTIONS.items.find((item) => item.id === requestedId)?.id ?? SOLUTIONS.items[0].id;
  const [activeId, setActiveId] = useState<string>(initialId);
  const [values, setValues] = useState<Record<string, string>>({});
  const [listOpen, setListOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const mobileDetailRef = useRef<HTMLDivElement>(null);

  const active = SOLUTIONS.items.find((item) => item.id === activeId) ?? SOLUTIONS.items[0];
  const otherItems = SOLUTIONS.items.filter((item) => item.id !== activeId);
  const fields = SOLUTION_FORMS[activeId] ?? [];
  const Icon = SOLUTION_ICONS[active.icon];

  const handleSelect = (id: string) => {
    setActiveId(id);
    setValues({});
    setListOpen(false);
    setFormOpen(false);
    mobileDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const lines = fields.map((field) => `${field.label}: ${values[field.id]?.trim() || "—"}`).join("\n");
    const message = `${SOLUTIONS_PAGE.whatsappIntro(active.name)}\n\n${lines}`;
    const url = `${CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const detailPanel = (
    <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm uppercase tracking-wide text-gold-dark">
        {SOLUTIONS_PAGE.detailEyebrowByType.quePrefix}
      </p>
      <h2 className="mt-1 text-2xl text-navy md:text-3xl">seguro de {active.name.toLowerCase()}?</h2>
      <p className="mt-3 max-w-2xl text-muted">{active.description}</p>

      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <FallbackImage
          src={active.image}
          alt={active.name}
          fill
          sizes="(min-width: 1024px) 700px, 100vw"
          unoptimized
          className="object-cover"
          fallback={
            <div className="flex h-full w-full items-center justify-center bg-cream font-display text-xl text-navy/30">
              {active.name}
            </div>
          }
        />
      </div>

      <div className="mt-6 flex items-start gap-4 rounded-2xl bg-cream p-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy">
          {Icon ? <Icon /> : null}
        </span>
        <div>
          <p className="font-semibold text-navy">{SOLUTIONS_PAGE.coverageLabel}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{active.detail}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFormOpen((v) => !v)}
        aria-expanded={formOpen}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
      >
        Cotizar seguro de {active.name.toLowerCase()}
        <ChevronIcon className={`transition-transform ${formOpen ? "rotate-180" : ""}`} />
      </button>

      {formOpen && (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <SolutionFormField
              key={field.id}
              field={field}
              value={values[field.id] ?? ""}
              onChange={(value) => setValues((prev) => ({ ...prev, [field.id]: value }))}
            />
          ))}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
            >
              {SOLUTIONS_PAGE.formSubmitLabel}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );

  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="container-page">
        {/* Mobile/tablet: card activa + acordeón "Más soluciones" */}
        <div className="lg:hidden">
          <div key={activeId} ref={mobileDetailRef} className="scroll-mt-24">
            {detailPanel}
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
                const ItemIcon = SOLUTION_ICONS[item.icon];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/70 px-4 py-3 text-left transition hover:bg-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                        {ItemIcon ? <ItemIcon className="h-4 w-4" /> : null}
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

          <HelpBox />
        </div>

        {/* Desktop: lista lateral + panel de detalle */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-[320px_1fr] lg:items-start">
          <div>
            <div className="flex flex-col gap-2">
              {SOLUTIONS.items.map((item) => (
                <SidebarButton
                  key={item.id}
                  item={item}
                  isActive={item.id === activeId}
                  onClick={() => handleSelect(item.id)}
                />
              ))}
            </div>
            <HelpBox />
          </div>

          <div key={activeId}>{detailPanel}</div>
        </div>
      </div>
    </section>
  );
}
