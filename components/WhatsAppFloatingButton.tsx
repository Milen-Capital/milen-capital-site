import { CONTACT } from "@/content/site";
import { SOCIAL_ICONS } from "@/components/icons";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-navy/30 transition hover:scale-105"
    >
      <SOCIAL_ICONS.whatsapp className="h-14 w-14" />
    </a>
  );
}
