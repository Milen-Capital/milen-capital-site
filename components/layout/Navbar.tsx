"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/content/site";
import { SOCIAL_ICONS } from "@/components/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={160}
            height={110}
            quality={90}
            className="h-8 w-auto md:h-9"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-black md:text-xl">
              {SITE.name}
            </span>
            <span className="mt-0.5 hidden text-[10px] uppercase tracking-[0.18em] text-gold-dark sm:block">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black hover:text-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.id];
            return (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="flex h-6 w-6 items-center justify-center transition hover:scale-110"
              >
                {Icon ? <Icon className="h-6 w-6" /> : null}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-black lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Principal (móvil)"
          className="border-t border-black/10 bg-white lg:hidden"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-black hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center"
                  >
                    {Icon ? <Icon className="h-8 w-8" /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
