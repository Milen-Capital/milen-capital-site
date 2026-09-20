export default function PageHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="relative border-t-2 border-gold-dark bg-white pb-6 pt-10 text-navy md:pb-8 md:pt-12">
      <span
        className="pointer-events-none absolute left-6 top-6 h-6 w-6 border-l border-t border-gold-dark/40 md:left-10 md:top-10"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-b border-r border-gold-dark/40 md:bottom-10 md:right-10"
        aria-hidden="true"
      />

      <div className="container-page text-center">
        <p className="text-sm uppercase tracking-wide text-gold-dark">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight text-navy md:text-5xl">{title}</h1>

        <div className="mt-8 flex items-center justify-center" aria-hidden="true">
          <span className="h-px w-16 bg-gold-dark/50" />
          <span className="mx-3 h-1.5 w-1.5 rotate-45 bg-gold-dark" />
          <span className="h-px w-16 bg-gold-dark/50" />
        </div>
      </div>
    </section>
  );
}
