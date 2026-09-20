import { COVERAGE_MAP } from "@/content/site";
import { PinIcon } from "@/components/icons";

function embedUrl(lat: number, lon: number) {
  const delta = 0.09;
  const bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
}

export default function CoverageMap({ activeId }: { activeId: string }) {
  const active = COVERAGE_MAP.find((point) => point.id === activeId) ?? COVERAGE_MAP[0];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-navy/10 shadow-lg shadow-navy/10">
      <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-md">
        <PinIcon className="h-4 w-4 text-gold-dark" />
        {active.city}
      </div>
      <iframe
        key={active.id}
        title={`Mapa de ${active.city}, ${active.state}`}
        src={embedUrl(active.lat, active.lon)}
        className="h-80 w-full md:h-[440px]"
        loading="lazy"
      />
    </div>
  );
}
