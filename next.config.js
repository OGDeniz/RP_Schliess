/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Für statische Seiten

  // Anpassungen für die Entwicklungsumgebung
  experimental: {
      workerThreads: false, // Deaktiviert Worker-Threads für schnellere Builds
      cpus: 1, // Begrenzt die Anzahl der CPU-Kerne für Builds
      optimizeCss: true, // Reduziert die CSS-Verarbeitung
  },

  // Optimierungen zur Reduzierung der Serverlast
  compress: true, // Aktiviert die GZIP-Kompression für schnelleres Laden
  poweredByHeader: false, // Entfernt das 'X-Powered-By'-Header für Sicherheit
  reactStrictMode: true, // Verhindert doppelte Renderings in Entwicklungsumgebungen

  images: {
      formats: ["image/avif", "image/webp"], // Optimierte Bildformate
      deviceSizes: [640, 750, 828, 1080, 1200], // Definiert unterstützte Bildgrößen
      unoptimized: true, // Wichtig für statische Exporte, da keine optimierte Bildverarbeitung möglich ist
  },

  // Anpassungen für Routen und API
  async headers() {
      return [
          {
              source: "/(.*)", // Für alle Routen
              headers: [
                  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
              ],
          },
      ];
  },

  // Konfiguration von Umgebungsvariablen
  env: {
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  },
};

module.exports = nextConfig;
