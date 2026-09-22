"use client";

import { useEffect, useRef, useState } from "react";
import { COVERAGE_MAP } from "@/content/site";
import { PinIcon } from "@/components/icons";

function embedUrl(lat: number, lon: number) {
  const delta = 0.09;
  const bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
}

export default function CoverageMap({ activeId }: { activeId: string }) {
  const active = COVERAGE_MAP.find((point) => point.id === activeId) ?? COVERAGE_MAP[0];
  const [unlocked, setUnlocked] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const relock = () => {
    setUnlocked(false);
    setResetKey((k) => k + 1);
  };

  useEffect(() => {
    if (!unlocked) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        relock();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [unlocked]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-navy/10 shadow-lg shadow-navy/10"
      onMouseLeave={() => unlocked && relock()}
    >
      <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-md">
        <PinIcon className="h-4 w-4 text-gold-dark" />
        {active.city}
      </div>

      <iframe
        key={`${active.id}-${resetKey}`}
        title={`Mapa de ${active.city}, ${active.state}`}
        src={embedUrl(active.lat, active.lon)}
        className="h-80 w-full md:h-[440px]"
        loading="lazy"
      />

      {!unlocked && (
        <button
          type="button"
          onClick={() => setUnlocked(true)}
          aria-label="Activar el mapa para hacer zoom"
          className="group absolute inset-0 z-10 flex items-center justify-center bg-transparent transition hover:bg-navy/10"
        >
          <span className="rounded-full bg-navy/85 px-4 py-2 text-xs font-medium text-cream opacity-0 transition group-hover:opacity-100">
            Haz clic para interactuar con el mapa
          </span>
        </button>
      )}
    </div>
  );
}
