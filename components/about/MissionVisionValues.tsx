import { ABOUT_PAGE } from "@/content/site";
import { BADGE_ICONS, TOPIC_ICONS } from "@/components/icons";

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
          </div>

          <div className="md:border-l md:border-cream/15 md:pl-14">
            <ColumnTitle>{ABOUT_PAGE.vision.title}</ColumnTitle>
            <p className="mt-4 leading-relaxed text-cream/70">{ABOUT_PAGE.vision.text}</p>
          </div>
        </div>
      </section>

      <div className="container-page relative z-10 -mt-16 md:-mt-20">
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 rounded-2xl bg-white p-6 shadow-lg shadow-navy/20 sm:grid-cols-3 md:gap-x-5 md:gap-y-8 md:p-10">
          {ABOUT_PAGE.values.items.map((value) => {
            const Icon = VALUE_ICONS[value.icon];
            return (
              <div key={value.id} className="flex flex-col items-center gap-1 text-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                </span>
                <p className="text-sm font-semibold text-gold-dark">{value.name}</p>
                <p className="text-xs leading-snug text-ink">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
