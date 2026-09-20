export default function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="container-page py-24">
      <p className="text-sm uppercase tracking-wide text-gold-dark">{eyebrow}</p>
      <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-xl text-muted">{description}</p>
    </div>
  );
}
