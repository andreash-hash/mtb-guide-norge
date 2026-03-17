import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin to generate sitemap at build time
function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    closeBundle: async () => {
      const { generateSitemapXml, getSitemapStats } = await import('./src/utils/sitemap');
      const sitemap = generateSitemapXml();
      const outputPath = path.resolve(__dirname, 'dist/sitemap.xml');
      
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      }
      
      fs.writeFileSync(outputPath, sitemap, 'utf-8');
      const stats = getSitemapStats();
      console.log(`✅ Sitemap generated: ${stats.totalUrls} URLs (${stats.reviews} reviews, ${stats.guides} guides, ${stats.news} news)`);
    }
  };
}

// Plugin to pre-render route-specific HTML files with correct meta tags
// Crawlers get proper meta tags without needing JS rendering
function prerenderMetaPlugin(): Plugin {
  return {
    name: 'prerender-meta-tags',
    closeBundle: async () => {
      const { getAllRouteMeta, generateHtmlForRoute } = await import('./src/utils/prerender-meta');
      
      const distDir = path.resolve(__dirname, 'dist');
      const templatePath = path.resolve(distDir, 'index.html');
      
      if (!fs.existsSync(templatePath)) {
        console.warn('⚠️ dist/index.html not found, skipping meta prerender');
        return;
      }
      
      const templateHtml = fs.readFileSync(templatePath, 'utf-8');
      const routes = getAllRouteMeta();
      let count = 0;

      for (const route of routes) {
        // Skip root – it already has the right meta in index.html
        if (route.path === '/') continue;

        const routeDir = path.resolve(distDir, route.path.slice(1)); // remove leading /
        
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        
        const html = generateHtmlForRoute(templateHtml, route);
        fs.writeFileSync(path.resolve(routeDir, 'index.html'), html, 'utf-8');
        count++;
      }

      console.log(`✅ Pre-rendered meta tags for ${count} routes`);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && sitemapPlugin(),
    mode === "production" && prerenderMetaPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));