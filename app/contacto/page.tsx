import PageHero from "@/components/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import { CONTACT_PAGE } from "@/content/site";

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow={CONTACT_PAGE.hero.eyebrow} title={CONTACT_PAGE.hero.title} />
      <ContactSection />
    </>
  );
}
