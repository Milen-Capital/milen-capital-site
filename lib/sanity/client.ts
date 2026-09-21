import { createClient } from "@sanity/client";

export const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

// Sin projectId, el cliente no puede armar la URL de la API. Se deja "sin
// configurar" (en vez de tirar error) para que el sitio siga funcionando
// con el contenido de ejemplo mientras Sanity no está conectado.
export const isSanityConfigured = Boolean(SANITY_PROJECT_ID);

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID || "placeholder",
  dataset: SANITY_DATASET,
  apiVersion: "2025-01-01",
  useCdn: true,
});
