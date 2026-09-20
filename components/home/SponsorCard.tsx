"use client";

import { useState } from "react";
import { TOPIC_ICONS } from "@/components/icons";
import FallbackImage from "@/components/FallbackImage";

export default function SponsorCard({
  name,
  logo,
  comingSoonBadge,
}: {
  name: string;
  logo: string;
  comingSoonBadge: string;
}) {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const ShieldIcon = TOPIC_ICONS.shield;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-40 w-40 items-center justify-center sm:h-52 sm:w-52">
        <FallbackImage
          src={logo}
          alt={name}
          fill={false}
          width={260}
          height={260}
          quality={90}
          className="h-full w-full object-contain drop-shadow-lg"
          onLoad={() => setLogoLoaded(true)}
          fallback={
            <span className="flex h-full w-full items-center justify-center rounded-full border border-navy/10 bg-white text-navy/50">
              <ShieldIcon className="h-20 w-20" />
            </span>
          }
        />
      </div>
      {!logoLoaded && (
        <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
          {comingSoonBadge}
        </span>
      )}
    </div>
  );
}
