import { PROMOTIONS } from "@/content/site";
import { fetchPromotions, type SanityPromotion } from "@/lib/sanity/queries";

// Misma idea que lib/blog.ts: forma común sin importar si la promoción
// viene de Sanity (Edith puede crear varias, sin tocar código) o del
// contenido de ejemplo en content/site.ts.
export type DisplayPromotion = {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  ctaLabel: string;
  whatsappMessage: string;
};

function fromSanity(promo: SanityPromotion): DisplayPromotion {
  return {
    id: promo._id,
    title: promo.title,
    description: promo.description,
    image: promo.image ?? PROMOTIONS.items[0].image,
    badge: promo.badge ?? undefined,
    ctaLabel: promo.ctaLabel ?? PROMOTIONS.defaultCtaLabel,
    whatsappMessage: promo.whatsappMessage ?? PROMOTIONS.defaultWhatsappMessage,
  };
}

function fromStatic(promo: (typeof PROMOTIONS.items)[number]): DisplayPromotion {
  return {
    id: promo.id,
    title: promo.title,
    description: promo.description,
    image: promo.image,
    badge: promo.badge,
    ctaLabel: PROMOTIONS.defaultCtaLabel,
    whatsappMessage: promo.whatsappMessage,
  };
}

export async function getPromotions(): Promise<DisplayPromotion[]> {
  const sanityPromotions = await fetchPromotions();
  if (sanityPromotions.length > 0) return sanityPromotions.map(fromSanity);
  return PROMOTIONS.items.map(fromStatic);
}

export function getStaticPromotions(): DisplayPromotion[] {
  return PROMOTIONS.items.map(fromStatic);
}
