import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="404 – Siden ble ikke funnet | MTB Test Norge"
        description="Beklager, vi fant ikke siden du leter etter. Gå tilbake til forsiden for å finne det du trenger."
        canonicalUrl="/"
        noindex
      />
      <Header />
      <main className="flex-grow flex items-center justify-center py-24">
        <div className="text-center px-4">
          <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Beklager, vi fant ikke siden du leter etter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              Til forsiden
            </Link>
            <Link
              to="/sammenligninger"
              className="inline-flex items-center px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
            >
              Sammenligninger
            </Link>
            <Link
              to="/nyheter"
              className="inline-flex items-center px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
            >
              Nyheter
            </Link>
            <Link
              to="/guider"
              className="inline-flex items-center px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
            >
              Guider
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
