import { ABOUT_PAGE } from "@/content/site";
import { BADGE_ICONS, TOPIC_ICONS } from "@/components/icons";
import FallbackImage from "@/components/FallbackImage";

const VALUE_ICONS = { ...BADGE_ICONS, ...TOPIC_ICONS };

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl text-cream md:text-3xl">{children}</h2>
      <span className="mt-2 block h-px w-10 bg-gold-light" aria-hidden="true" />
    </div>
  );
}

export default function MissionVisionValues() {
  return (
    <section className="bg-navy py-14 md:py-16">
      <div className="container-page grid gap-12 md:grid-cols-3 md:gap-10">
        <div>
          <ColumnTitle>{ABOUT_PAGE.mission.title}</ColumnTitle>
          <p className="mt-4 leading-relaxed text-cream/70">{ABOUT_PAGE.mission.text}</p>
          <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md shadow-black/20">
            <FallbackImage
              src={ABOUT_PAGE.mission.image}
              alt={ABOUT_PAGE.mission.title}
              fill
              sizes="(min-width: 768px) 340px, 90vw"
              className="object-cover"
              fallback={
                <div className="flex h-full w-full items-center justify-center bg-navy-700 font-display text-xl text-cream/30">
                  {ABOUT_PAGE.mission.title}
                </div>
              }
            />
          </div>
        </div>

        <div className="md:border-l md:border-cream/15 md:pl-10">
          <ColumnTitle>{ABOUT_PAGE.vision.title}</ColumnTitle>
          <p className="mt-4 leading-relaxed text-cream/70">{ABOUT_PAGE.vision.text}</p>
          <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md shadow-black/20">
            <FallbackImage
              src={ABOUT_PAGE.vision.image}
              alt={ABOUT_PAGE.vision.title}
              fill
              sizes="(min-width: 768px) 340px, 90vw"
              className="object-cover"
              fallback={
                <div className="flex h-full w-full items-center justify-center bg-navy-700 font-display text-xl text-cream/30">
                  {ABOUT_PAGE.vision.title}
                </div>
              }
            />
          </div>
        </div>

        <div className="md:border-l md:border-cream/15 md:pl-10">
          <ColumnTitle>{ABOUT_PAGE.values.title}</ColumnTitle>
          <div className="mt-5 space-y-4">
            {ABOUT_PAGE.values.items.map((value) => {
              const Icon = VALUE_ICONS[value.icon];
              return (
                <div key={value.id} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-gold-light">
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                  </span>
                  <div>
                    <p className="font-semibold text-cream">{value.name}</p>
                    <p className="text-sm leading-relaxed text-cream/70">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
