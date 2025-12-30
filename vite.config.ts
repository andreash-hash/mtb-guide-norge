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
      
      // Ensure dist directory exists
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      }
      
      fs.writeFileSync(outputPath, sitemap, 'utf-8');
      const stats = getSitemapStats();
      console.log(`✅ Sitemap generated: ${stats.totalUrls} URLs (${stats.reviews} reviews, ${stats.guides} guides, ${stats.news} news)`);
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
    mode === "production" && sitemapPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
