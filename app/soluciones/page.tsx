import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import SolutionsExplorer from "@/components/solutions/SolutionsExplorer";
import { SOLUTIONS } from "@/content/site";

export default function SolucionesPage() {
  return (
    <>
      <PageHero eyebrow="Soluciones" title={SOLUTIONS.title} />
      <Suspense fallback={null}>
        <SolutionsExplorer />
      </Suspense>
    </>
  );
}
