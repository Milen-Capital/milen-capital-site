// Íconos en línea (SVG) usados en la Home. Se agrupan aquí para mantener
// los componentes de sección enfocados en layout, no en trazos de íconos.

import { useId } from "react";

type IconProps = {
  className?: string;
};

function Svg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 21s-6.5-5.4-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.6-6.5 11-6.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M5 4.5h2.7l1.1 3.3-1.7 1.5a11.2 11.2 0 0 0 5.6 5.6l1.5-1.7 3.3 1.1V17a1.5 1.5 0 0 1-1.6 1.5C10.4 18 6 13.6 5.5 8.1A1.5 1.5 0 0 1 5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 7 12 12.5 19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 4.5l2.3 4.9 5.2.6-3.9 3.6 1 5.2L12 16.3l-4.6 2.5 1-5.2L4.5 10l5.2-.6L12 4.5Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export const SOLUTION_ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  auto: (props) => (
    <Svg {...props}>
      <path
        d="M4 16v-3.2c0-.5.2-1 .6-1.3l1.6-1.4.9-2.4A2 2 0 0 1 9 6.5h6a2 2 0 0 1 1.9 1.2l.9 2.4 1.6 1.4c.4.3.6.8.6 1.3V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 13.5h16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 16v1.8a.7.7 0 0 0 .7.7H6a.7.7 0 0 0 .7-.7V16M17.3 16v1.8a.7.7 0 0 0 .7.7h1.3a.7.7 0 0 0 .7-.7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7.5" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="16.5" cy="13.5" r="1.1" fill="currentColor" />
    </Svg>
  ),
  health: (props) => (
    <Svg {...props}>
      <path
        d="M12 20s-6.5-4-9-8.2C1.2 8.6 2.6 5.5 5.6 5c1.9-.3 3.4.6 4.4 2 .3.4.9.4 1.2 0 1-1.4 2.5-2.3 4.4-2 3 .5 4.4 3.6 2.6 6.8C18.5 16 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8.5 11h2l1-2 1.5 3.5 1-1.5H16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  ),
  life: (props) => (
    <Svg {...props}>
      <circle cx="8.5" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 18c0-2.6 2-4.5 4.5-4.5S13 15.4 13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="8.5" r="1.9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 18c.2-2.1 1.7-3.6 3.5-3.6 1.9 0 3.5 1.6 3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  home: (props) => (
    <Svg {...props}>
      <path
        d="M4.5 11.5 12 5l7.5 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10v7.5c0 .55.45 1 1 1H16c.55 0 1-.45 1-1V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 18.5V14h4v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </Svg>
  ),
  savings: (props) => (
    <Svg {...props}>
      <path
        d="M5 13c0-3.3 2.9-6 6.5-6 2.6 0 4.8 1.4 5.8 3.4L19 10l-.8 1.9-1.7.1c-.2.6-.5 1.1-.9 1.6V16l-1.5 1v-1.2c-.7.2-1.4.3-2.1.3-3.6 0-6.5-1.4-7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="14.6" cy="9.4" r=".9" fill="currentColor" />
      <path d="M7.5 13.5 6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  graduation: (props) => (
    <Svg {...props}>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 11.5v3.8c0 1.2 2.5 2.2 5.5 2.2s5.5-1 5.5-2.2v-3.8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M21 10v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  pet: (props) => (
    <Svg {...props}>
      <circle cx="7" cy="8" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="8" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9.3" cy="12" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15.5 12c1.8 0 3 1.5 3 3.2 0 2.2-2 3.8-4.3 3.8-.9 0-1.5-.3-2.2-.3s-1.3.3-2.2.3c-2.3 0-4.3-1.6-4.3-3.8 0-1.7 1.3-3.1 3-3.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  team: (props) => (
    <Svg {...props}>
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 19c0-2.9 2.2-5 5-5s5 2.1 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16.5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 12.3c2.3.2 4 2.1 4 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  business: (props) => (
    <Svg {...props}>
      <rect x="4" y="9.5" width="16" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 9.5V7a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 13.5h16" stroke="currentColor" strokeWidth="1.5" />
    </Svg>
  ),
};

export const TOPIC_ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  shield: (props) => (
    <Svg {...props}>
      <path
        d="M12 3.5 18.5 6v5.2c0 4.2-2.7 7.9-6.5 8.8-3.8-.9-6.5-4.6-6.5-8.8V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  building: (props) => (
    <Svg {...props}>
      <path d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4h5A1.5 1.5 0 0 1 14 5.5V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 10h3.5A1.5 1.5 0 0 1 19 11.5V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 20h16M8.5 7.5h2M8.5 11h2M8.5 14.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  chart: (props) => (
    <Svg {...props}>
      <path d="M4 20V9M9.5 20V4M15 20v-7M20 20V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  target: (props) => (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </Svg>
  ),
  eye: (props) => (
    <Svg {...props}>
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </Svg>
  ),
};

export const BADGE_ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  advice: (props) => (
    <Svg {...props}>
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6c-.5.4-1.3.06-1.3-.6V16h-.5A2.5 2.5 0 0 1 4 13.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  support: (props) => (
    <Svg {...props}>
      <path
        d="M12 21c4.5-2.7 8-6.6 8-11a5 5 0 0 0-8-4 5 5 0 0 0-8 4c0 4.4 3.5 8.3 8 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 10.5l2 2 4-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  ),
  trust: (props) => (
    <Svg {...props}>
      <path
        d="M12 3l7 3v5.2c0 4.6-3 8.7-7 9.8-4-1.1-7-5.2-7-9.8V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  ),
  custom: (props) => (
    <Svg {...props}>
      <path d="M5 7h6M15 7h4M5 17h4M13 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="17" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </Svg>
  ),
  experience: (props) => (
    <Svg {...props}>
      <circle cx="12" cy="9.5" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 13.8 7.5 20l4.5-2.3 4.5 2.3-1.5-6.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 6.5v3l2 1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  ),
};

// Id único por instancia: este ícono puede aparecer varias veces en la
// misma página (Navbar + Footer), y los ids de <linearGradient> deben ser
// únicos en el documento para que el degradado se pinte bien en todas.
function InstagramIcon(props: IconProps) {
  const gradientId = `ig-gradient-${useId()}`;
  return (
    <Svg {...props}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEC053" />
          <stop offset="35%" stopColor="#F2703E" />
          <stop offset="65%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill={`url(#${gradientId})`} />
      <circle cx="12" cy="12" r="4.2" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16.9" cy="7.1" r="1.1" fill="#fff" />
    </Svg>
  );
}

// Íconos de redes sociales con los colores reales de cada marca (no usan
// currentColor: son insignias de color fijo, para que se reconozcan de
// inmediato en Navbar y Footer).
export const SOCIAL_ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  facebook: (props) => (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9.5" fill="#1877F2" />
      <path
        d="M13.6 20v-6.2h2.1l.3-2.5h-2.4v-1.6c0-.7.2-1.2 1.3-1.2h1.3V6.2c-.2 0-1-.1-1.9-.1-2 0-3.3 1.2-3.3 3.4v2h-2.1v2.5h2.1V20h2.6Z"
        fill="#fff"
      />
    </Svg>
  ),
  instagram: InstagramIcon,
  youtube: (props) => (
    <Svg {...props}>
      <rect x="1.5" y="5" width="21" height="14" rx="4" fill="#FF0000" />
      <path d="M10.3 8.7v6.6l5.7-3.3-5.7-3.3Z" fill="#fff" />
    </Svg>
  ),
  linkedin: (props) => (
    <Svg {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
      <circle cx="7.6" cy="8" r="1.4" fill="#fff" />
      <path d="M6.4 11v8.5h2.4V11H6.4Zm4.4 0v8.5h2.4v-4.6c0-1.5 1-2.2 2-2.2s1.8.7 1.8 2.2v4.6H19v-5c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.2.8-2.6 1.4V11h-2.4Z" fill="#fff" />
    </Svg>
  ),
  whatsapp: (props) => (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9.5" fill="#25D366" />
      <path
        d="M8.3 15.7 7 19l3.4-1.2a6.9 6.9 0 1 0-2.7-3l.6.9Z"
        fill="#fff"
      />
      <path
        d="M9.6 9.9c.1-.5.5-.5.8-.5h.4c.2 0 .3 0 .4.3.2.4.5 1.2.5 1.3.1.2.1.3 0 .4-.1.2-.2.3-.3.4-.1.1-.2.2-.1.5.2.3.8 1.4 1.9 1.8.3.1.4.1.5-.1l.4-.5c.2-.2.3-.2.5-.1l1.2.6c.2.1.2.1.2.3 0 .7-.4 1.4-1.4 1.5-1.2.2-2.9-.5-4.1-1.7-1-1-1.5-1.9-1.5-3.1 0-.4.1-.8.3-1.1Z"
        fill="#25D366"
      />
    </Svg>
  ),
};

// Versión monocromática (currentColor) de los íconos de redes sociales,
// para las insignias circulares doradas del Footer.
export const SOCIAL_ICONS_MONO: Record<string, (props: IconProps) => React.ReactNode> = {
  facebook: (props) => (
    <Svg {...props}>
      <path
        d="M13.6 20v-6.2h2.1l.3-2.5h-2.4v-1.6c0-.7.2-1.2 1.3-1.2h1.3V6.2c-.2 0-1-.1-1.9-.1-2 0-3.3 1.2-3.3 3.4v2h-2.1v2.5h2.1V20h2.6Z"
        fill="currentColor"
      />
    </Svg>
  ),
  instagram: (props) => (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </Svg>
  ),
  youtube: (props) => (
    <Svg {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.3 9.5v5l4.6-2.5-4.6-2.5Z" fill="currentColor" />
    </Svg>
  ),
  linkedin: (props) => (
    <Svg {...props}>
      <circle cx="7.6" cy="7.3" r="1.3" fill="currentColor" />
      <path
        d="M6.4 10.3v8.2h2.4v-8.2H6.4Zm4.4 0v8.2h2.4v-4.5c0-1.4 1-2.1 1.9-2.1s1.7.7 1.7 2.1v4.5H19v-4.9c0-2.5-1.4-3.7-3.1-3.7-1.5 0-2.1.8-2.5 1.4v-1.5h-2.6Z"
        fill="currentColor"
      />
    </Svg>
  ),
  whatsapp: (props) => (
    <Svg {...props}>
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.8L4 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 9.4c.1-.4.4-.4.7-.4h.4c.2 0 .3 0 .4.3.2.4.5 1.1.5 1.2.1.2.1.3 0 .4-.1.2-.2.3-.3.4-.1.1-.2.2-.1.4.2.3.7 1.3 1.8 1.7.3.1.4.1.5-.1l.4-.5c.2-.2.3-.2.5-.1l1.1.6c.2.1.2.1.2.3 0 .6-.4 1.3-1.3 1.4-1.1.2-2.7-.5-3.8-1.6-1-1-1.4-1.8-1.4-2.9 0-.4.1-.7.3-1Z"
        fill="currentColor"
      />
    </Svg>
  ),
};
