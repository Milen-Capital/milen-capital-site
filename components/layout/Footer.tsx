import Image from "next/image";
import { CONTACT, FOOTER, GNP_BADGE, SITE, SOCIAL_LINKS } from "@/content/site";
import { MailIcon, PhoneIcon, SOCIAL_ICONS_MONO, TOPIC_ICONS } from "@/components/icons";
import FallbackImage from "@/components/FallbackImage";

export default function Footer() {
  const ShieldIcon = TOPIC_ICONS.shield;

  return (
    <footer className="bg-navy text-cream/80">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3 md:gap-10 md:py-12">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt=""
              width={160}
              height={110}
              quality={90}
              className="h-10 w-auto"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl text-cream">{SITE.name}</span>
              <span className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-gold-light">
                {SITE.tagline}
              </span>
            </span>
          </div>
          <div className="mt-5 flex items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS_MONO[social.id];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold-light transition hover:bg-gold hover:text-navy"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                </a>
              );
            })}
          </div>
        </div>

        <div className="md:border-l md:border-cream/10 md:pl-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
            {FOOTER.contactLabel}
          </h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={CONTACT.phoneHref} className="hover:text-gold-light">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-light">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:border-l md:border-cream/10 md:pl-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
            {GNP_BADGE.eyebrow}
          </h3>
          <div className="mt-5 flex h-10 items-center">
            <FallbackImage
              src={GNP_BADGE.logo}
              alt="GNP Seguros"
              fill={false}
              width={200}
              height={56}
              quality={90}
              className="h-10 w-auto object-contain"
              fallback={
                <div className="flex h-10 items-center gap-2 text-cream/60">
                  <ShieldIcon className="h-6 w-6" />
                  <span className="text-sm font-semibold">GNP Seguros</span>
                </div>
              }
            />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-4 text-xs text-cream/45">
          <p className="max-w-3xl">{SITE.legalNote}</p>
          <p className="mt-2">{SITE.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
