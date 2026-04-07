import { Menu, X, Bike } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mtbSilhouette from "@/assets/mtb-silhouette-dark.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Sammenligninger", href: "/sammenligninger" },
    { name: "Nyheter", href: "/nyheter" },
    { name: "Guider", href: "/guider" },
    { name: "Om oss", href: "/om-oss" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="h-0.5 bg-gradient-to-r from-accent via-secondary to-accent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img src={mtbSilhouette} alt="MTB Test Norge" className="h-10 w-10 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">MTB Test</span>
              <span className="text-[10px] md:text-xs font-semibold text-accent uppercase tracking-widest">Norge</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 rounded-md text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="cta" size="sm" className="ml-2" asChild>
              <Link to="/sammenligninger" className="flex items-center gap-1.5">
                <Bike className="h-4 w-4" />
                Finn sykkel
              </Link>
            </Button>
          </nav>

          {/* Mobile CTA + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="cta" size="sm" className="hidden sm:flex" asChild>
              <Link to="/sammenligninger" className="flex items-center gap-1">
                <Bike className="h-4 w-4" />
                <span className="hidden md:inline">Finn sykkel</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="h-10 w-10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors duration-200 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 px-2">
                <Button variant="cta" className="w-full" asChild>
                  <Link
                    to="/sammenligninger"
                    className="flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Bike className="h-4 w-4" />
                    Finn din sykkel
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;