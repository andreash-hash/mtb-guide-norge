// Sitemap data - separate from main data files to avoid image import issues during build
const SITE_URL = 'https://mtbtest.no';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const reviewIds = [
  'trek-fuel-ex-7', 'specialized-stumpjumper', 'canyon-spectral',
  'santa-cruz-hightower', 'yeti-sb130', 'norco-fluid-fs',
  'trek-marlin-8', 'specialized-rockhopper', 'scott-scale-970'
];

const guideIds = [
  'velg-riktig-terrengsykkel', 'mtb-for-nybegynnere', 'vedlikehold',
  'beste-stier-norge', 'riktig-utstyr', 'terrengsykkel-terminologi',
  'mtb-geometri-forklart', 'emtb-hardtail-vs-fulldemper'
];

const newsIds = [
  'trek-fuel-ex-2025', 'specialized-priskutt', 'trysil-stier',
  'enduro-test', 'canyon-oslo', 'shimano-vs-sram', 'elsykkel-rekord',
  'varsesong-tips',
  // New articles
  'fox-36-2025', 'norco-range-2025', 'sram-eagle-transmission',
  'nesbyen-bikepark-utvidelse', 'rockshox-zeb-ultimate-2025',
  'scott-spark-2025', 'mtb-forsikring-tips', 'shimano-deore-xt-2025',
  'mtb-sesongstart-2025', 'e-mtb-lettvekt-test', 'dekkguide-sesong',
  'mtb-trening-vinter', 'giant-trance-x-2025', 'stisykling-allemannsrett',
  'maxxis-nye-dekk-2025'
];

export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function generateSitemapUrls(): SitemapUrl[] {
  const currentDate = getCurrentDate();
  const urls: SitemapUrl[] = [];

  urls.push(
    { loc: `${SITE_URL}/`, lastmod: currentDate, changefreq: 'daily', priority: 1.0 },
    { loc: `${SITE_URL}/sammenligninger`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${SITE_URL}/guider`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${SITE_URL}/nyheter`, lastmod: currentDate, changefreq: 'daily', priority: 0.8 }
  );

  reviewIds.forEach((id) => {
    urls.push({ loc: `${SITE_URL}/sammenligninger/${id}`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 });
  });

  guideIds.forEach((id) => {
    urls.push({ loc: `${SITE_URL}/guider/${id}`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 });
  });

  newsIds.forEach((id) => {
    urls.push({ loc: `${SITE_URL}/nyheter/${id}`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 });
  });

  return urls;
}

export function generateSitemapXml(): string {
  const urls = generateSitemapUrls();
  const urlEntries = urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export function getSitemapStats() {
  return {
    totalUrls: generateSitemapUrls().length,
    reviews: reviewIds.length,
    guides: guideIds.length,
    news: newsIds.length,
    mainPages: 5,
  };
}
