import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoKeywords = ["tattoo", "tattoo-studio"];
const seoLocations = [
  "greiz", "mohlsdorf", "plauen", "weida", "reichenbach", "zwickau", "gera", "elsterberg", "werdau", "crimmitschau", 
  "fraureuth", "hohenleuben", "leubnitz", "berga", "neumark", "lichtentanne", "netzschkau", "mylau", "treuen", 
  "lengenfeld", "auerbach", "ronneburg", "wuenschendorf", "langenwetzendorf", "wilkau-hasslau", "kirchberg", 
  "meerane", "glauchau", "muelsen", "oelsnitz-vogtland", "falkenstein", "rodewisch", "schmoelln", "goessnitz", 
  "bad-koestritz", "muenchenbernsdorf", "kraftsdorf", "seelingstaedt", "neumuehle", "teichwolframsdorf", 
  "heinsdorfergrund", "steinberg", "ellefeld", "neukirchen", "crinitzberg", "hirschfeld", "rosenbach", "pausa", 
  "wildenfels", "hartenstein", "crossen", "stenn", "ebersbrunn"
];

const formatSeoText = (text) => {
  return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in dist. Run build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');
const sitemapUrls = [
  'https://verliebtinfarbe.de/',
  'https://verliebtinfarbe.de/about',
  'https://verliebtinfarbe.de/gallery',
  'https://verliebtinfarbe.de/blog',
  'https://verliebtinfarbe.de/kontakt',
  'https://verliebtinfarbe.de/termin-buchen',
  'https://verliebtinfarbe.de/impressum',
  'https://verliebtinfarbe.de/datenschutz'
];

seoKeywords.forEach(keyword => {
  seoLocations.forEach(location => {
    const slug = `${keyword}-${location}`;
    const readableKeyword = formatSeoText(keyword);
    const readableLocation = formatSeoText(location);
    const title = `${readableKeyword} in ${readableLocation} | Verliebt in Farbe`;
    const description = `Du suchst ein ${readableKeyword} in ${readableLocation}? Entdecke Anis Fineline & Farb-Tattoostudio in der Nähe. Jetzt Termin vereinbaren!`;
    const canonical = `https://verliebtinfarbe.de/${slug}`;

    let pageHtml = baseHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${title}</title>`
    );
    
    // Replace meta description or add if doesn't exist
    if (pageHtml.includes('name="description"')) {
      pageHtml = pageHtml.replace(
        /<meta\s+name="description"\s+content="[^"]*"/i,
        `<meta name="description" content="${description}">`
      );
    } else {
      pageHtml = pageHtml.replace(
        /<\/head>/i,
        `  <meta name="description" content="${description}">\n</head>`
      );
    }
    
    // Add canonical link for SEO
    pageHtml = pageHtml.replace(
      /<\/head>/i,
      `  <link rel="canonical" href="${canonical}">\n</head>`
    );

    const dirPath = path.join(distPath, slug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(dirPath, 'index.html'), pageHtml);
    sitemapUrls.push(canonical);
  });
});

// Sitemap wird jetzt vorher durch generate-sitemap.js in /public geschrieben
console.log(`Generated SEO pages entries.`);
