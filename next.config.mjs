/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permite que "npm run dev" sirva recursos (JS, HMR) cuando se accede
  // desde otro dispositivo en la misma red local (ej. celular apuntando
  // a la IP de la compu), que Next.js bloquea por defecto por seguridad.
  allowedDevOrigins: ["192.168.100.185"],
  images: {
    formats: ["image/webp"],
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
