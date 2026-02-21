import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: object | object[];
  noindex?: boolean;
}

const SITE_URL = "https://mtbtest.no";
const SITE_NAME = "MTB Test Norge";
const DEFAULT_OG_IMAGE = "/og-default.jpg";
const LOGO_URL = `${SITE_URL}/favicon.ico`;

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  breadcrumbs,
  structuredData,
  noindex = false,
}: SEOHeadProps) => {
  const fullCanonicalUrl = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL;

  // Build BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${SITE_URL}${item.path}`,
        })),
      }
    : null;

  // Collect all structured data into an array
  const allStructuredData: object[] = [];
  if (breadcrumbSchema) allStructuredData.push(breadcrumbSchema);
  if (structuredData) {
    if (Array.isArray(structuredData)) {
      allStructuredData.push(...structuredData);
    } else {
      allStructuredData.push(structuredData);
    }
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="Norwegian" />
      <meta name="author" content={SITE_NAME} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="nb_NO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />

      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

// Pre-built schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": LOGO_URL,
  "sameAs": [
    "https://facebook.com/mtbtestnorge",
    "https://instagram.com/mtbtestnorge",
    "https://youtube.com/mtbtestnorge"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_NAME,
  "url": SITE_URL,
  "description": "Din guide til terrengsykling i Norge – sammenligninger, nyheter og guider",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/sok?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const createArticleSchema = (article: {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": article.title,
  "description": article.description,
  "image": article.image ? `${SITE_URL}${article.image}` : undefined,
  "datePublished": article.publishedAt,
  "author": { "@type": "Organization", "name": SITE_NAME },
  "publisher": {
    "@type": "Organization",
    "name": SITE_NAME,
    "logo": { "@type": "ImageObject", "url": LOGO_URL }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}${article.path}` }
});

export default SEOHead;
