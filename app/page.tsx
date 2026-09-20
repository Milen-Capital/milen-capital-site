import Hero from "@/components/home/Hero";
import SolutionsTeaser from "@/components/home/SolutionsTeaser";
import AboutTeaser from "@/components/home/AboutTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import ContactTeaser from "@/components/home/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsTeaser />
      <AboutTeaser />
      <TestimonialsSection />
      <SponsorsSection />
      <ContactTeaser />
    </>
  );
}
