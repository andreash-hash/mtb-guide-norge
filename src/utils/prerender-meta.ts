// Pre-render meta tags for all routes at build time
// This generates route-specific HTML files so crawlers get correct meta tags without JS

const SITE_URL = 'https://mtbtest.no';
const SITE_NAME = 'MTB Test Norge';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
}

// ============ ROUTE DEFINITIONS ============

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'MTB Test Norge – Sammenligninger, guider og nyheter 2025',
    description: 'Sammenlign terrengsykler basert på tekniske spesifikasjoner. Faktabaserte guider og nyheter om stisykling i Norge.',
    keywords: 'terrengsykkel, mtb norge, terrengsykkel sammenligning, beste terrengsykkel, stisykling',
  },
  {
    path: '/sammenligninger',
    title: 'Terrengsykkel-sammenligninger 2025 | MTB Test Norge',
    description: 'Sammenlign terrengsykler side om side. Tekniske spesifikasjoner, priser og egenskaper for de mest populære stisyklene.',
    keywords: 'terrengsykkel sammenligning, mtb test, stisykkel 2025',
  },
  {
    path: '/guider',
    title: 'Terrengsykkel guider – Alt om MTB | MTB Test Norge',
    description: 'Lær alt om terrengsykling. Guider for nybegynnere og erfarne. Vedlikehold, teknikk, utstyr og stier i Norge.',
    keywords: 'mtb guide, terrengsykkel tips, mtb for nybegynnere, sykkelvedlikehold',
  },
  {
    path: '/nyheter',
    title: 'MTB Nyheter Norge – Siste nytt om terrengsykling | MTB Test Norge',
    description: 'Siste nyheter om terrengsykling, nye sykler, komponenter og stier i Norge.',
    keywords: 'mtb nyheter, terrengsykkel nyheter, nye sykler 2025',
  },
];

// Bike comparisons
const bikeComparisonMeta: Record<string, { name: string; brand: string; desc: string }> = {
  'trek-fuel-ex-7': { name: 'Trek Fuel EX 7', brand: 'Trek', desc: 'Tekniske spesifikasjoner, pris og vurdering av Trek Fuel EX 7 – en allsidig trail-sykkel.' },
  'specialized-stumpjumper': { name: 'Specialized Stumpjumper', brand: 'Specialized', desc: 'Alt om Specialized Stumpjumper – spesifikasjoner, egenskaper og sammenligning.' },
  'canyon-spectral': { name: 'Canyon Spectral', brand: 'Canyon', desc: 'Canyon Spectral sammenligning – tekniske data, pris og kjøreegenskaper.' },
  'santa-cruz-hightower': { name: 'Santa Cruz Hightower', brand: 'Santa Cruz', desc: 'Santa Cruz Hightower – premium trail-sykkel med VPP-demping. Spesifikasjoner og vurdering.' },
  'yeti-sb130': { name: 'Yeti SB130', brand: 'Yeti', desc: 'Yeti SB130 med Switch Infinity-plattform – tekniske detaljer og sammenligning.' },
  'norco-fluid-fs': { name: 'Norco Fluid FS', brand: 'Norco', desc: 'Norco Fluid FS – rimelig fulldemper for stisykling. Spesifikasjoner og pris.' },
  'trek-marlin-8': { name: 'Trek Marlin 8', brand: 'Trek', desc: 'Trek Marlin 8 hardtail – god inngangsport til terrengsykling. Tekniske data.' },
  'specialized-rockhopper': { name: 'Specialized Rockhopper', brand: 'Specialized', desc: 'Specialized Rockhopper – klassisk hardtail for nybegynnere. Spesifikasjoner.' },
  'scott-scale-970': { name: 'Scott Scale 970', brand: 'Scott', desc: 'Scott Scale 970 – lett XC-hardtail. Tekniske spesifikasjoner og vurdering.' },
};

// Guides
const guideMeta: Record<string, { title: string; desc: string }> = {
  'velg-riktig-terrengsykkel': { title: 'Velg riktig terrengsykkel 2025', desc: 'Hardtail vs fulldemper, hjulstørrelser og geometri forklart. Komplett guide til å velge terrengsykkel.' },
  'mtb-for-nybegynnere': { title: 'MTB for nybegynnere – komplett guide', desc: 'Alt du må vite før du starter med terrengsykling. Teknikk, sikkerhet, utstyr og tips.' },
  'vedlikehold': { title: 'Vedlikehold av terrengsykkel', desc: 'Hold sykkelen din i toppform hele sesongen. Etter tur, ukentlig, månedlig og årlig service.' },
  'beste-stier-norge': { title: 'Beste MTB-stier i Norge', desc: 'Populære destinasjoner for terrengsykling i Norge. Østlandet, Vestlandet, Trøndelag og mer.' },
  'riktig-utstyr': { title: 'Riktig utstyr til terrengsykling', desc: 'Hjelm, beskyttelse, klær og tilbehør du trenger for å sykle terreng trygt og komfortabelt.' },
  'terrengsykkel-terminologi': { title: 'Terrengsykkel-terminologi', desc: 'Ordliste over MTB-begreper: travel, geometry, dropper post, reach, stack og mer.' },
  'mtb-geometri-forklart': { title: 'Terrengsykkel-geometri forklart', desc: 'Forstå geometritabellen: reach, stack, styrevinkel, chainstay og mer – og hva det betyr for kjøreegenskapene.' },
  'emtb-hardtail-vs-fulldemper': { title: 'E-MTB: Hardtail eller fulldemper?', desc: 'Hardtail vs fulldemper elsykkel – fordeler, ulemper, vedlikehold og hva som passer din kjørestil.' },
};

// News articles (titles for meta)
const newsMeta: Record<string, { title: string; desc: string }> = {
  'trek-fuel-ex-2025': { title: 'Trek Fuel EX 2025 – ny generasjon', desc: 'Trek lanserer ny Fuel EX med oppdatert geometri og forbedret demping for 2025-sesongen.' },
  'specialized-priskutt': { title: 'Specialized kutter prisene', desc: 'Specialized reduserer prisene på flere populære modeller i Norge.' },
  'trysil-stier': { title: 'Nye stier i Trysil', desc: 'Trysil utvider stinettverket med nye flow trails og tekniske stier for 2025.' },
  'enduro-test': { title: 'Enduro-test 2025', desc: 'Vi sammenligner de beste enduro-syklene for 2025-sesongen.' },
  'canyon-oslo': { title: 'Canyon åpner i Oslo', desc: 'Canyon etablerer showroom i Oslo – prøvekjør sykler før du kjøper.' },
  'shimano-vs-sram': { title: 'Shimano vs SRAM 2025', desc: 'Sammenligning av Shimano og SRAM girsystemer for terrengsykkel i 2025.' },
  'elsykkel-rekord': { title: 'Elsykkel-salg slår rekorder', desc: 'Salget av elektriske terrengsykler i Norge fortsetter å vokse kraftig.' },
  'varsesong-tips': { title: 'Tips for vårsesongen', desc: 'Gjør sykkelen klar for våren – vedlikeholdstips og sjekkliste.' },
};

export function getAllRouteMeta(): RouteMeta[] {
  const routes: RouteMeta[] = [...staticRoutes];

  // Add bike comparison routes
  for (const [id, meta] of Object.entries(bikeComparisonMeta)) {
    routes.push({
      path: `/sammenligninger/${id}`,
      title: `${meta.name} – Sammenligning | ${SITE_NAME}`,
      description: meta.desc,
      ogType: 'article',
      keywords: `${meta.name}, ${meta.brand}, terrengsykkel, sammenligning`,
    });
  }

  // Add guide routes
  for (const [id, meta] of Object.entries(guideMeta)) {
    routes.push({
      path: `/guider/${id}`,
      title: `${meta.title} | ${SITE_NAME}`,
      description: meta.desc,
      ogType: 'article',
      keywords: `${meta.title.toLowerCase()}, mtb guide, terrengsykkel`,
    });
  }

  // Add news routes
  for (const [id, meta] of Object.entries(newsMeta)) {
    routes.push({
      path: `/nyheter/${id}`,
      title: `${meta.title} | ${SITE_NAME}`,
      description: meta.desc,
      ogType: 'article',
      keywords: `${meta.title.toLowerCase()}, mtb nyheter`,
    });
  }

  return routes;
}

export function generateHtmlForRoute(templateHtml: string, route: RouteMeta): string {
  const ogImage = route.ogImage || DEFAULT_OG_IMAGE;
  const ogType = route.ogType || 'website';
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;

  let html = templateHtml;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(route.description)}">`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${escapeHtml(route.title)}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${escapeHtml(route.description)}">`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*">/,
    `<meta property="og:image" content="${ogImage}">`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*">/,
    `<meta property="og:type" content="${ogType}">`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}">`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*">/,
    `<meta name="twitter:image" content="${ogImage}">`
  );

  // Add canonical URL and keywords if not present
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}">\n  </head>`);
  }

  if (route.keywords) {
    html = html.replace(
      /<meta name="keywords" content="[^"]*">/,
      `<meta name="keywords" content="${escapeHtml(route.keywords)}">`
    );
  }

  // Add robots noindex if specified
  if (route.noindex) {
    html = html.replace('</head>', `  <meta name="robots" content="noindex, nofollow">\n  </head>`);
  }

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}