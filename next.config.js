/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      wasm: false, // Deaktiviert WebAssembly, um Speicherprobleme zu umgehen
      optimizeCss: true, // Reduziert die CSS-Verarbeitung
    },
    // Optimierungen zur Reduzierung der Serverlast
    compress: true, // Aktiviert die GZIP-Kompression für schnelleres Laden
    poweredByHeader: false, // Entfernt das 'X-Powered-By'-Header für Sicherheit
    reactStrictMode: false, // Verhindert doppelte Renderings in Entwicklungsumgebungen
    swcMinify: true, // Aktiviert die SWC-Minifizierung für kleinere JavaScript-Dateien
    // Limits für Bilder setzen, um Speicherbedarf zu verringern
    images: {
      formats: ['image/avif', 'image/webp'], // Optimierte Bildformate
      minimumCacheTTL: 60, // Bild-Cache auf 60 Sekunden setzen
      deviceSizes: [640, 750, 828, 1080, 1200], // Definiert unterstützte Bildgrößen
    },
    // Anpassungen für Routen und API
    async headers() {
      return [
        {
          source: '/(.*)', // Für alle Routen
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
      ];
    },
    // Konfiguration von Umgebungsvariablen
    env: {
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
    },
    // Deaktiviert große Server-Funktionen, die Speicher verbrauchen
    output: 'standalone', // Für eine kleinere Build-Größe optimiert
  };
  
  module.exports = nextConfig;
  