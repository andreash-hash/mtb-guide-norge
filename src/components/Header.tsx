import { Menu, X } from "lucide-react";
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
    { name: "Om oss", href: "#om-oss" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      {/* Accent top line */}
      <div className="h-0.5 bg-gradient-to-r from-accent via-secondary to-accent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with silhouette */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={mtbSilhouette} 
              alt="MTB Test logo" 
              className="h-14 w-14 object-contain transition-transform group-hover:scale-110 mix-blend-multiply"
            />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold text-primary tracking-tight">MTB Test</span>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Norge</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-200 font-semibold text-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
