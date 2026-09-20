"use client";

import { useState } from "react";
import { CONTACT, CONTACT_PAGE, COVERAGE_MAP } from "@/content/site";
import { PinIcon, PhoneIcon, MailIcon } from "@/components/icons";
import CoverageMap from "@/components/home/CoverageMap";
import ContactForm from "@/components/contact/ContactForm";

const INFO_CARDS = [
  { id: "phone", label: "Teléfono", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { id: "email", label: "Correo", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
] as const;

const INFO_ICONS = {
  phone: PhoneIcon,
  email: MailIcon,
};

export default function ContactSection() {
  const [activeId, setActiveId] = useState<string>(COVERAGE_MAP[0].id);
  const active = COVERAGE_MAP.find((point) => point.id === activeId) ?? COVERAGE_MAP[0];

  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <ContactForm />

          <div className="mt-8">
            <h2 className="text-2xl text-navy md:text-3xl">{CONTACT_PAGE.infoTitle}</h2>

            <div className="mt-5 flex flex-col gap-3">
              {INFO_CARDS.map((card) => {
                const Icon = INFO_ICONS[card.id];
                return (
                  <a
                    key={card.id}
                    href={card.href}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                      {Icon ? <Icon className="h-5 w-5" /> : null}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted">{card.label}</span>
                      <span className="block font-medium text-navy">{card.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-navy md:text-3xl">{CONTACT_PAGE.locationsTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{CONTACT_PAGE.coverageNote}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {COVERAGE_MAP.map((point) => {
              const isActive = point.id === activeId;
              return (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setActiveId(point.id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? "bg-navy text-cream" : "bg-white text-muted hover:bg-gold/15 hover:text-navy"
                  }`}
                >
                  <PinIcon className="h-3.5 w-3.5" />
                  {point.city}
                </button>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-gold/20 bg-white p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
              <PinIcon className="h-4 w-4" />
              {CONTACT_PAGE.officeLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy">{active.address}</p>
          </div>

          <div className="mt-4">
            <CoverageMap activeId={activeId} />
          </div>
        </div>
      </div>
    </section>
  );
}
