import FallbackImage from "@/components/FallbackImage";

export default function TeamMemberCard({
  member,
  className = "w-36 sm:w-44",
  dark = false,
}: {
  member: {
    id: string;
    name: string;
    role: string;
    initials: string;
    roleConfirmed: boolean;
    photoCutout: string;
  };
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`group transition-transform duration-300 hover:-translate-y-1.5 ${className}`}>
      <div className="relative aspect-[4/5]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/10 blur-lg transition-all duration-300 group-hover:bg-gold/60 group-hover:blur-xl"
          aria-hidden="true"
        />
        <FallbackImage
          src={member.photoCutout}
          alt={member.name}
          fill
          sizes="200px"
          className="object-contain object-bottom transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_22px_rgba(189,156,106,0.65)]"
          fallback={
            <div
              className={`flex h-full w-full items-center justify-center rounded-full border font-display text-2xl shadow-none transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:shadow-[0_0_25px_rgba(189,156,106,0.55)] ${
                dark ? "border-cream/20 bg-cream/5 text-cream" : "border-navy/15 bg-navy/5 text-navy"
              }`}
            >
              {member.initials}
            </div>
          }
        />
      </div>
      <div className="mt-3 text-center">
        <p
          className={`text-sm font-semibold transition-colors duration-300 ${
            dark ? "text-cream group-hover:text-gold-light" : "text-navy group-hover:text-gold-dark"
          }`}
        >
          {member.name}
        </p>
        <p
          className={`text-xs ${
            member.roleConfirmed
              ? "text-gold-light"
              : dark
                ? "italic text-cream/60"
                : "italic text-muted"
          }`}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}
