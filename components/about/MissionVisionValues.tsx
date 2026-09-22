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
    <>
      <section className="relative bg-navy pb-24 pt-14 md:pb-28 md:pt-16">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <ColumnTitle>{ABOUT_PAGE.mission.title}</ColumnTitle>
            <p className="mt-4 leading-relaxed text-cream/70">{ABOUT_PAGE.mission.text}</p>
            <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md shadow-black/20">
              <FallbackImage
                src={ABOUT_PAGE.mission.image}
                alt={ABOUT_PAGE.mission.title}
                fill
                sizes="(min-width: 768px) 480px, 90vw"
                className="object-cover"
                fallback={
                  <div className="flex h-full w-full items-center justify-center bg-navy-700 font-display text-xl text-cream/30">
                    {ABOUT_PAGE.mission.title}
                  </div>
                }
              />
            </div>
          </div>

          <div className="md:border-l md:border-cream/15 md:pl-14">
            <ColumnTitle>{ABOUT_PAGE.vision.title}</ColumnTitle>
            <p className="mt-4 leading-relaxed text-cream/70">{ABOUT_PAGE.vision.text}</p>
            <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md shadow-black/20">
              <FallbackImage
                src={ABOUT_PAGE.vision.image}
                alt={ABOUT_PAGE.vision.title}
                fill
                sizes="(min-width: 768px) 480px, 90vw"
                className="object-cover"
                fallback={
                  <div className="flex h-full w-full items-center justify-center bg-navy-700 font-display text-xl text-cream/30">
                    {ABOUT_PAGE.vision.title}
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-page relative z-10 -mt-16 md:-mt-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-2xl bg-cream p-6 shadow-lg shadow-navy/20 sm:grid-cols-3 md:gap-x-6 md:gap-y-10 md:p-10">
          {ABOUT_PAGE.values.items.map((value) => {
            const Icon = VALUE_ICONS[value.icon];
            return (
              <div key={value.id} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                  {Icon ? <Icon /> : null}
                </span>
                <p className="font-semibold text-navy">{value.name}</p>
                <p className="text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
