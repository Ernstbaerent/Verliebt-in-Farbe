import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pfade
const publicPath = path.resolve(__dirname, '../public');
const seoConfigPath = path.resolve(__dirname, '../src/seoConfig.ts');

// Wir lesen die Arrays direkt aus der seoConfig.ts aus, 
// damit wir immer die aktuellsten Daten haben, ohne sie doppelt zu pflegen.
const seoConfigContent = fs.readFileSync(seoConfigPath, 'utf8');

const extractArray = (content, arrayName) => {
  const match = content.match(new RegExp(`export const ${arrayName}\\s*=\\s*\\[(.*?)\\];`, 's'));
  if (match && match[1]) {
    // Einfache Evaluierung der Strings in dem Array
    return match[1].split(',')
      .map(s => s.trim().replace(/['"]/g, ''))
      .filter(s => s.length > 0);
  }
  return [];
};

const seoKeywords = extractArray(seoConfigContent, 'seoKeywords');
const seoLocations = extractArray(seoConfigContent, 'seoLocations');

const baseUrl = 'https://verliebtinfarbe.de';

// Die statischen Hauptseiten der Webseite
const staticRoutes = [
  '/',
  '/about',
  '/gallery',
  '/blog',
  '/kontakt',
  '/termin-buchen',
  '/impressum',
  '/datenschutz'
];

let sitemapUrls = [...staticRoutes.map(route => `${baseUrl}${route}`)];

// Die SEO-Routen generieren
seoKeywords.forEach(keyword => {
  seoLocations.forEach(location => {
    const slug = `${keyword}-${location}`;
    sitemapUrls.push(`${baseUrl}/${slug}`);
  });
});

// XML-Struktur aufbauen
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
  </url>`).join('\n')}
</urlset>`;

// In den public-Ordner schreiben
const sitemapPath = path.join(publicPath, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`✅ Sitemap erfolgreich generiert! (${sitemapUrls.length} URLs wurden in public/sitemap.xml gespeichert)`);
