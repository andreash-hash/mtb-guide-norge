// Sitemap data - separate from main data files to avoid image import issues during build
const SITE_URL = 'https://mtbguide.no';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Static list of content IDs for sitemap generation
const reviewIds = [
  'trek-fuel-ex-7',
  'specialized-stumpjumper', 
  'canyon-spectral',
  'santa-cruz-hightower',
  'yeti-sb130',
  'norco-fluid-fs',
  'trek-marlin-8',
  'specialized-rockhopper',
  'scott-scale-970'
];

const guideIds = [
  'velg-riktig-terrengsykkel',
  'mtb-for-nybegynnere',
  'vedlikehold',
  'beste-stier-norge',
  'riktig-utstyr',
  'terrengsykkel-terminologi'
];

const newsIds = [
  'trek-fuel-ex-2025',
  'specialized-priskutt',
  'trysil-stier',
  'enduro-test',
  'canyon-oslo',
  'shimano-vs-sram',
  'elsykkel-rekord',
  'varsesong-tips'
];

export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function generateSitemapUrls(): SitemapUrl[] {
  const currentDate = getCurrentDate();
  const urls: SitemapUrl[] = [];

  // Hovedsider
  urls.push(
    { loc: `${SITE_URL}/`, lastmod: currentDate, changefreq: 'daily', priority: 1.0 },
    { loc: `${SITE_URL}/anmeldelser`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${SITE_URL}/guider`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${SITE_URL}/nyheter`, lastmod: currentDate, changefreq: 'daily', priority: 0.8 },
    { loc: `${SITE_URL}/butikk`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 }
  );

  // Anmeldelser
  reviewIds.forEach((id) => {
    urls.push({
      loc: `${SITE_URL}/anmeldelser/${id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // Guider
  guideIds.forEach((id) => {
    urls.push({
      loc: `${SITE_URL}/guider/${id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // Nyheter
  newsIds.forEach((id) => {
    urls.push({
      loc: `${SITE_URL}/nyheter/${id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  return urls;
}

export function generateSitemapXml(): string {
  const urls = generateSitemapUrls();
  
  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('\n');

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
