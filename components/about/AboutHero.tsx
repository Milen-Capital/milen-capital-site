import PageHero from "@/components/PageHero";
import { ABOUT_PAGE } from "@/content/site";

export default function AboutHero() {
  return <PageHero eyebrow={ABOUT_PAGE.hero.eyebrow} title={ABOUT_PAGE.hero.title} />;
}
